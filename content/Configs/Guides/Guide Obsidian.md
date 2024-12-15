---
tags:
  - guide
share: true
---
[Markdown Cheatsheet](https://rentry.org/how)
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Styles

Body
**Bold**
_Italic_
~~Strikethrough~~

## Formats

- Bullet Point
- Bullet Point
	- Nested Bullet Point
1. Numbered List
2. Numbered List
	1. Nested Numbered List
- [x] Checkbox  [completion:: 2024-01-01]
- [p] Pro
- [c] Con
- [I] Idea
	Reason
>Quote
>Multi line

This[^1] is a simple[^2] footnote[^note].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
  Referenced footnote will appear at the bottom of the page in Reading View.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.

Break Line
___

## Callouts

> [!white] Default Callouts
> 
> > [!note]
>
> > [!quote]
>
> > [!info]
>
> > [!question]
>
> > [!success]
>
> > [!failure]
>
> > [!warning]
>
> > [!danger]
> 
> > [!todo]
>
> > [!important]
> 
> > [!abstract]
>
> > [!example]

> [!white] Custom Callouts
> 
> > [!white]
> 
> > [!grey]
> 
> > [!black]
> 
> > [!blue]
> 
> > [!yellow]
> 
> > [!pink]
> 
> > [!green]

## References

Reference to a [[./Guides|File]]
Reference to a [[Guide Obsidian#Heading 1|Heading]]
Reference to a [[../../../2024-01-01#^025433|Paragraph]]
Inline Reference![[Guide Obsidian#Styles|Configs/Guides/Guide Obsidian > Styles]]
## Shortcuts

Ctrl = Enable Hover Preview On Links
Ctrl + E = Toggle Source Mode
Alt + E = Templater
Alt + Q = QuickAdd
Ctrl + Alt + A = Emoji Toolbar
Ctrl + Alt + T = Modify Task
Ctrl + Drag + Drop = Embed /  Transclude
[Multiple Cursors](https://help.obsidian.md/Editing+and+formatting/Multiple+cursors)
