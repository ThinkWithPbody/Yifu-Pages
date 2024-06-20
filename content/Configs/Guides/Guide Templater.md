---
tags:
  - guide
share: true
---
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
`[[<% createdFileDisplay %>]]`
`<% tp.file.cursor() %>`

## Date

[Date Module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html)
[ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
[moment.js String Format](https://momentjs.com/docs/#/parsing/string-format/)

## Examples

[Templates Showcase](https://github.com/SilentVoid13/Templater/discussions/categories/templates-showcase)
[zachyoung Templater snippets](https://zachyoung.dev/posts/templater-snippets)
[Christian's Templater Templates](https://github.com/chhoumann/Templater_Templates)

## Templates

## Due
```
group by due
has due date
(scheduled before next 2 week) OR (no scheduled date)
```
## Scheduled
```
group by scheduled
no due date
scheduled before next 2 week OR no scheduled date
NOT (tag includes shopping)
```
## Shopping
```
tag includes shopping
```
