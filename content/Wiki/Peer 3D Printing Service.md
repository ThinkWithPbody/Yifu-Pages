---
tags:
  - wiki
share: true
---
parents:: [[../../Yifu Ding|Yifu Ding]]

<span style="font-size:2em;color:red;background-color:gree;">End of Year 50% Off!</span>

*Cheaper, better, and faster than Stratasys PLA!*

Pick up at Daniels or 404-Major Mackenzie Dr E.

### Machine

Bambu P1S with AMS
- Up to 4 filaments per plate
- Build volume XYZ: 225mm * 225mm * 250mm | 8.85in * 8.85in * 9.85in
- 0.4 mm hardened steel nozzle
- Bambu Studio slicer
### Service Charge

| Plate Slicing & Setup | Time                                          | Filament             |
| :-------------------- | --------------------------------------------- | -------------------- |
| \$8 + $4/plate        | <span style="color:red;">\$3</span> ~~$6~~/hr | As cheap as it gets! |

> [!info]
> Slicing fee is discounted or waived depending on complexity.
> 
> Slicing fee is waived for Bambu Studio sliced .3mf files, print failures are not covered and no support will be provided. If you understand the risks and seek complete control, use this [[./Attachments/Peer 3D Printing Service/Template.3mf|template]] to get started.

### Getting Started

1. Follow [[Peer 3D Printing Service#File Preparation|File Preparation]] and export files.
2. Choose your [[Peer 3D Printing Service#Filament|Filament]].
3. Choose from one of the [[Peer 3D Printing Service#Quality Presets|Quality Presets]].
4. Adjust [[Peer 3D Printing Service#Slicing Options|Slicing Options]] as needed.
5. Send your **ZIP** file, **filament**, **preset**, and **custom options** to Yifu Ding over Teams or [Email](mailto:yifu.ding@mail.utoronto.ca) for an estimate.
6. Email transfer fees to yifuding.twp@gmail.com

#### File Preparation

![[./Attachments/Peer 3D Printing Service/2024-04-10T21_01_21-05_00_TWP-X570-WIN10(Rhino).gif|2024-04-10T21_01_21-05_00_TWP-X570-WIN10(Rhino)]]

##### Orientate

Choose printing **orientation** for maximum smoothness. 
- Printing a thin, organic piece vertically provides smoother detail and needs less support than laying it flat on the bed.

##### Divide

Divide large models exceeding the **build volume** with a **planar** cutter to provide **flat surfaces** that will adhere to the print bed nicely.
- Each model need to be a closed solid with no non-manifold geometry. They should be **watertight**.
- For pieces that are thin and tall, height is recommended to not exceed 100 mm.
- Keep in mind that any **overhang** exceeding 25 degrees will need substantial support structure which could be reduced or eliminated if they were divided and orientated differently.
- **WireCut** is a great command for this purpose. If WireCut didn't work on your model, chances are it isn't watertight and it won't print properly either.

##### Export

Files should be exported as **STL in millimetres**.
- Rhino files or incorrectly scaled STL will not be accepted.
- **Each separated body should be one file** regardless of which plate they may be on, to maximize nesting potential.
	- When relative positioning is important, add a small bridge with a cross section of 0.5-1mm² (depending on strength requirement) directly on the print bed and boolean union all connected bodies.
- For multiple objects, use the Rhino command **RunPythonScript** with the [[./Attachments/Peer 3D Printing Service/BatchExportSTLByObj.py|Batch Export Python Script]] to export all selected files at once.
- Deliver more than one .stl files as a **ZIP**.

#### Filament

| PLA                       |   $/kg | Hex Code                                                     |
| :------------------------ | -----: | ------------------------------------------------------------ |
| Matte Ivory White         |  29.37 | <span style="background: #FFFFFF;">FFFFFF</span>             |
| Matte Charcoal Black      |  29.37 | <span style="background: #000000;color:white;">000000</span> |
| Matte Sakura Pink         |  29.37 | <span style="background: #E8AFCF;">E8AFCF</span>             |
| Matte Lilac Purple        |  29.37 | <span style="background: #AE96D4;">AE96D4                    |
| Basic Bambu Green         |  29.37 | <span style="background: #00AE42;">00AE42                    |
| Marble White              |  44.06 | <span style="background: #F7F3F0;">F7F3F0                    |
| Silk Gold                 |  44.06 | <span style="background: #E5B03D;">E5B03D                    |
| Sparkle Crimson Red       |  44.06 | <span style="background: #792B36;color:white;">792B36        |
| Metal Iron Gray           |  44.06 | <span style="background: #43403D;color:white;">43403D        |
| Breakaway Support         | 101.68 |                                                              |
| PVA Water-soluble Support | 115.24 |                                                              |

| ABS         |  $/kg | Hex Code                                         |
| :---------- | ----: | ------------------------------------------------ |
| Basic White | 36.15 | <span style="background: #FFFFFF;">FFFFFF</span> |

| PETG        |  $/kg | Hex Code                                         |
| :---------- | ----: | ------------------------------------------------ |
| Basic White | 36.15 | <span style="background: #FFFFFF;">FFFFFF</span> |
| Basic Clear | 36.15 |                                                  |

> [!info]
> Other filaments may be available upon request.
> [Bambu Lab Filament](https://ca.store.bambulab.com/collections/pla?skr=yes)


#### Quality Presets

For 1 inch hollow cube with 2 walls:

| Quality Presets   | Layer Height (mm) | Time  | Minimum $ (Time + Filament) |
| :---------------- | :---------------: | :---: | :-------------------------: |
| Extra Fine        |       0.08        | 35:01 |            3.69             |
| Fine              |       0.12        | 24:43 |            2.68             |
| Optimal (Default) |       0.16        | 19:04 |            2.11             |
| Standard          |       0.20        | 15:42 |            1.77             |
| Draft             |       0.24        | 13:10 |            1.44             |
| Extra Draft       |       0.28        | 11:34 |            1.28             |


#### Slicing Options

> [!info]
>  Default value in parenthesis.
>  
>  Recommended settings are marked with ❗.
>  
>  Recommended values are marked with ⭕.

Print Orientation ❗

Layer Height (0.16mm) ❗
- Affects overhang performance

Print Speed

Wall Loops (2) ❗

Wall Generator (Classic)
- Classic ⭕
- Arachne ⭕

Order of Walls (Inner / Outer)
- Inner / Outer
- Outer / Inner
- Inner / Outer / Inner

X-Y Hole Compensation (0mm)

X-Y Contour Compensation (0mm)

Infill Pattern (Grid) ❗
- Concentric
- Rectilinear ⭕
- Grid ⭕
- Line ⭕
- Cubic ⭕
- Triangles
- Tri-hexagon
- Gyroid ⭕
- Honeycomb
- Adaptive Cubic ⭕
- Aligned Rectilinear
- 3D Honeycomb
- Hilbert Curve
- Archimedean Chords
- Octagram Spiral
- Support Cubic ⭕
- Lighting ⭕

Infill Percentage 0-100% (15%) ❗

Support (Normal Automatic) ❗
1. Normal Automatic
2. Normal Manual
3. Tree Automatic
4. Tree Manual

Raft (None)

Brim (Auto) ❗
1. Auto ⭕
2. Outer Brim Only ⭕
3. Inner Brim Only
4. Outer And Inner Brim
5. No Brim ⭕

Fuzzy Skin (None) ❗
- None
- Contour
- Contour And Hole
- All Walls

Surface Pattern (Monotonic)
1. Concentric ⭕
2. Rectilinear
3. Monotonic ⭕
4. Monotonic Line
5. Aligned Rectilinear ⭕
6. Hilbert Curve
7. Archimedean Chords
8. Octagram Spiral

Ironing (Top Surfaces) ❗
1. None ⭕
2. Top Surfaces ⭕
3. Topmost Surface
4. All Solid Layer

Ironing Pattern (Rectilinear)
1. Concentric ⭕
2. Rectilinear ⭕

Thick Bridges (None)

Seam Positions (Aligned)
1. Nearest
2. Aligned
3. Back
4. Random

Scarf Joint Seam (Contour And Hole)
1. None
2. Contour
3. Contour And Hole

### Showcase

![[./Attachments/Peer 3D Printing Service/Showcase-Arjay Asuncion.jpg|400]]
<iframe title="Speckle" src="https://app.speckle.systems/projects/aefb5374cb/models/a8a8bbe12f#embed=%7B%22isEnabled%22%3Atrue%7D" width="800" height="400" frameborder="0"></iframe>
by Arjay Asuncion - 2024

### FAQ

###### *Why is there a setup fee? For each plate?*

This setup fee allows me to take more care optimizing your print file and compensates me for my continued presence. Optimizations can massively reduce your print time and filament, lowering total cost, but each job is different and it takes time. I try my best to provide affordable and environmentally responsible printing service, which is why I offer my time and expertise at a modest fee. You'll always have the option to slice it by yourself and I am pleased to waive the setup fee for such cases, but current success rate for this option is only 0%.
![[./Attachments/Peer 3D Printing Service/2024-04-10T00_15_05.jpg|200]]

%%
### Tiny Tracker

Abida - 3.95

%%