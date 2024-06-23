---
tags:
  - guide
share: true
---
[Guide](https://publish.obsidian.md/tasks/Introduction)

[Filters](https://publish.obsidian.md/tasks/Queries/Filters)
[RegEx](https://publish.obsidian.md/tasks/Queries/Regular+Expressions)

### Default Filter
```
NOT done
starts before tomorrow
short mode
sort by priority
sort by status.type
description regex does not match /^$/
NOT (path includes Templater)
NOT (tag includes HideFromTasks)
```

### Due
```
group by due
has due date
(scheduled before next 2 week) OR (no scheduled date)
```
### Scheduled
```
group by scheduled
no due date
scheduled before next 2 week OR no scheduled date
NOT (tag includes shopping)
```
### Shopping
```
tag includes shopping
```
