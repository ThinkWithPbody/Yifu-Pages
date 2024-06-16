---
tags:
  - guide
share: true
---
```
dataview
TABLE due AS "Due", status as Status
FROM "Projects" AND #project AND !#navigation
WHERE !completion AND (status != "done")
SORT due
SORT completion DESC
```

```
file.inlinks AS "Mentions"
```
