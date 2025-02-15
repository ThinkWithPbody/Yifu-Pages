---
tags:
  - guide
title: Guide Tasks
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

### Tasks Page Dataview Setup

```
%%[parent:: [[index]]]%%

> [!blue]+ Active Projects
>  - [[Projects/2024/ICPS_Research/ICPS_Research.md|ICPS_Research]]
> - [[Projects/2025/ARC2048H_Visits/ARC2048H_Visits.md|ARC2048H_Visits]]
> - [[Courses/2025/ARC2014Y/ARC2014Y.md|ARC2014Y]]
> - [[Courses/2025/LAN3801H/LAN3801H.md|LAN3801H]]
> - [[Courses/2025/ARC2046H/ARC2046H.md|ARC2046H]]
> - [[Courses/2025/ARC2048H/ARC2048H.md|ARC2048H]]
> 

> [!yellow]+ Due
> ```tasks
> has due date
> (scheduled before next 2 week) OR (no scheduled date)
> ```

> [!pink]+ Scheduled
> ```tasks
> no due date
> scheduled before next 2 week OR no scheduled date
> NOT (tag includes shopping)
> ```

> [!green]+ Shopping
> ```tasks
> tag includes shopping
> ```

```
