---
tags:
  - guide
share: true
---
status: string = TODO, IN_PROGRESS, DONE, CANCELLED

For active projects:
```
LIST
FROM "Projects" and #project and !#navigation
WHERE !completion AND status != "DONE" AND status != "CANCELLED"
SORT status, due
```

```
file.inlinks AS "Mentions"
```

```
\-
```
= date(2024-06-19T10:00) - date(2024-06-19T09:00)

release-date:: 2024-06-18T12:00
```
\- until release!!
```
P-1DT-12H-58M-17.079S until release!!


[How to achieve a hierarchical Dataview list without bullets but maintaining indentation](https://forum.obsidian.md/t/how-to-achieve-a-hierarchical-dataview-list-without-bullets-but-maintaining-indentation/66011)
