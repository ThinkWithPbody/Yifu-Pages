---
excalidraw-plugin: parsed
excalidraw-open-md: true
tags:
  - excalidraw
  - project
title: 
status: DONE
start: 2025-02-20
due: 2025-06-20
completion: 2025-02-20
priority: medium
share: true
hide: false
---
This page walks you through how to generate audio files from PDFs using qpdf, pdfminer, and MeloTTS.

## Environment

**Install and enable WSL on windows.** Skip this step if you already have a linux environment set up.

> [!caution]
> You may have to enable CPU Virtualization in BIOS.

**Install a distro to the WSL.** I use OpenSUSE Tumbleweed. You can do the same by going to Microsoft Store and installing OpenSUSE Tumbleweed.

**Create this file or append** the following line to allocate more memory:

`C:\Users\USERNAME\.wslconfig`
```
[wsl2]
memory=16GB # Adjust based on your system
processors=4
```

**Start the WSL**

```bash
wsl
```

Once the WSL is started, I use VSCode with the extension WSL to access files and CLI easily. 

Simply use the command Connect to WSL or enter this in the terminal.

```
code .
```

## Dependencies

### System Level

```
sudo zypper install git, qpdf
```

### Project Level

```
git clone https://github.com/myshell-ai/MeloTTS.git
```

**Create venv** within the MeloTTS Directory
```
cd MeloTTS
python3.11 -m venv venv
source venv/bin/activate
```

**Install pdfminer**
```
pip install pdfminer.six
```

**Install MeloTTS Dependencies**
```
cd MeloTTS
pip install -e .
pip install --upgrade pip
python -m unidic download
python -m nltk.downloader averaged_perceptron_tagger_eng
```

## Run Script

**Create the folder** `files` under `MeloTTS` and copy your PDF file there.

**Rename the PDF** properly.

**Review settings** before running the script with `python pdf2wav.py` 

`pdf2wav.py`
```python
import os
import subprocess
import shutil
import torch
from melo.api import TTS

if torch.cuda.is_available():
    device = 'cuda:0'
    print(f"🚀 CUDA is available. Using device: {torch.cuda.get_device_name(0)}")
else:
    device = 'cpu'
    print("⚠️ CUDA is NOT available. Running on CPU.")

# ✅ Default Settings
CHUNK_SIZE = {
    "default": 3000,
    "ZH": 3000,
    "EN": 15000
}
LANGUAGE = 'EN'
ACCENT = "EN-US"  # Options: EN-US, EN-BR, EN-INDIA, EN-AU, EN-Default
SPEED = 1.0
PROCESS_START = 0    # Start chunk index (0)
PROCESS_END = -1     # End chunk index (-1 for all)
GENERATE_TTS = True
GENERATE_LRC = True

# ✅ 1. Set up paths
BASE_DIR = os.path.expanduser("./files")
file_bases = ["input", "decrypted", "text"]
file_paths = {name: os.path.join(BASE_DIR, f"{name}.pdf" if name != "text" else f"{name}.txt") for name in file_bases}

# ✅ 2. Find a PDF file that isn't in file_bases
exclude_files = [f"{name}.pdf" for name in file_bases if name != "text"]

pdf_files = [f for f in os.listdir(BASE_DIR) if f.endswith(".pdf") and f not in exclude_files]

if not pdf_files:
    print("❌ No valid PDF files found in 'files/' directory.")
    exit()

original_pdf = pdf_files[0]
original_pdf_path = os.path.join(BASE_DIR, original_pdf)
output_base = os.path.join(BASE_DIR, os.path.splitext(original_pdf)[0])

# ✅ 3. Rename original PDF to 'input.pdf'
shutil.copy2(original_pdf_path, file_paths["input"])
print(f"📄 Selected PDF: {original_pdf} -> Renamed to 'input.pdf'")

# ✅ 4. Decrypt PDF
try:
    subprocess.run(["qpdf", "--decrypt", file_paths["input"], file_paths["decrypted"]], check=True)
    print("🔓 PDF Decrypted Successfully.")
except subprocess.CalledProcessError:
    print("❌ PDF Decryption Failed.")
    exit()

# ✅ 5. Convert Decrypted PDF to Text
try:
    subprocess.run(["pdf2txt.py", "-o", file_paths["text"], file_paths["decrypted"]], check=True)
    print("📜 Text Extracted Successfully.")
except subprocess.CalledProcessError:
    print("❌ Text Extraction Failed.")
    exit()

# ✅ 6. Split Text into Chunks with Paragraph Awareness
def split_text_into_chunks(text, chunk_size):
    paragraphs = text.split("\n\n")  # Split by empty lines
    chunks = []
    current_chunk = ""

    for para in paragraphs:
        para = para.strip()
        if not para:
            continue

        non_empty_lines = [line for line in para.split('\n') if line.strip()]

        if len(current_chunk) + len(para) <= chunk_size or len(non_empty_lines) < 5:
            current_chunk += para + "\n\n"
        else:
            if current_chunk:
                chunks.append(current_chunk.strip())
            current_chunk = para + "\n\n"

    if current_chunk:
        chunks.append(current_chunk.strip())

    return chunks

# Read the full text
with open(file_paths["text"], "r", encoding="utf-8") as f:
    full_text = f.read()

# Select chunk size based on language
chunk_size = CHUNK_SIZE.get(LANGUAGE, CHUNK_SIZE["default"])

chunks = split_text_into_chunks(full_text, chunk_size=chunk_size)

# ✅ 7. Initialize MeloTTS
model = TTS(language=LANGUAGE, device=device)
speaker_ids = model.hps.data.spk2id

# ✅ 8. Convert Each Chunk with Processing Range and Optional Outputs
start_idx = PROCESS_START
end_idx = PROCESS_END if PROCESS_END != -1 else len(chunks)

for idx in range(start_idx, end_idx):
    chunk = chunks[idx]
    output_wav = f"{output_base}_{idx:02d}.wav"
    # output_lrc = f"{output_base}_{idx:02d}.lrc"
    output_lrc = f"{output_base}_{idx:02d}.txt"

    try:
        # Generate WAV if enabled
        if GENERATE_TTS:
            if LANGUAGE == "EN":
                speaker_id = speaker_ids.get(ACCENT, speaker_ids["EN-Default"])
            else:
                speaker_id = speaker_ids[LANGUAGE]

            model.tts_to_file(chunk, speaker_id, output_wav, speed=SPEED)

            print(f"🎧 WAV File Created: {output_wav}")

        # Generate LRC if enabled
        if GENERATE_LRC:
            with open(output_lrc, "w", encoding="utf-8", newline='') as lrc_file:
                for line in chunk.split('\n'):
                    if line.strip():
                        # lrc_file.write(f"[00:00.00]{line.strip()}\n")
                        lrc_file.write(f"{line.strip()}\n")
            print(f"📝 LRC File Created: {output_lrc}")

    except Exception as e:
        print(f"❌ Processing Failed for Chunk {idx}: {e}")

print("✅ Workflow Complete!")
```

*Created in collaboration with 4o.*

## Post Generation

I use foobar2000 to rename, convert to AAC and add metadata and replaygain.

For .txt lyrics files, I use this script to **batch rename**.

`batch_replace.py`
```python
import os

# Define replacements
replace_from = "The Birth of Tragedy_"
replace_to = ""

# Process files in the current directory
for filename in os.listdir():
    if filename.endswith(".txt") and replace_from in filename:
        new_name = filename.replace(replace_from, replace_to)
        os.rename(filename, new_name)
        print(f"Renamed: {filename} -> {new_name}")

print("✅ Renaming Complete.")
```

I then use [[../../2024/Plex_Media_Server/Plex_Media_Server|Plex Media Server]] to host them in my Library.