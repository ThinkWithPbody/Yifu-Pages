---
tags:
  - guide
share: true
---
## Date

[Date Module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html)
[ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
[moment.js String Format](https://momentjs.com/docs/#/parsing/string-format/)

## Examples

[Templates Showcase](https://github.com/SilentVoid13/Templater/discussions/categories/templates-showcase)
[zachyoung Templater snippets](https://zachyoung.dev/posts/templater-snippets)
[Christian's Templater Templates](https://github.com/chhoumann/Templater_Templates)

## Templates

`<% tp.file.cursor() %>`

### Rename Move
```
<%*
let filename = tp.file.title;
if (filename.startsWith("Untitled")) {
	filename = await tp.system.prompt("Course Title [code-title]", "ARC0000Y-Course Title");
	filename = filename.replace(/[^a-zA-Z0-9\/-]+/g, "_");
	await tp.file.rename(filename);
};
await new Promise(resolve => setTimeout(resolve, 1000));
const filepath = "Courses/" + tp.date.now("YYYY") + "/" + filename;
await tp.file.move(filepath + "/" + filename);
await tp.file.rename(filename);
const tag = "#" + filepath;

let words = await filename.split("-");
let code = words[0];
let title = words.slice(1).join("-");
_%>
```

### File Link Display
```
`<%*
const fileName = "This is the name of a file";
const existing = tp.file.find_tfile(fileName);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile("template-name"), fileName)).basename;
}
_%>`
```
`[[<% createdFileDisplay %>]]`