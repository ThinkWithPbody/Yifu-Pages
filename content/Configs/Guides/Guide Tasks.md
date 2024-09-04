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

### Tasks Page Dataview Setup

```
%%[parent:: [[index]]]%%

> [!blue]+ Active Projects
>  - [[Projects/2024/ICPS_Research/ICPS_Research.md|ICPS_Research]]
> - [[Courses/2024/ARC2013Y-Architectural_Design_Studio_3/ARC2013Y-Architectural_Design_Studio_3.md|ARC2013Y-Architectural_Design_Studio_3]]
> - [[Courses/2024/ARC2047H-Building_Science_Materials_and_Construction_3/ARC2047H-Building_Science_Materials_and_Construction_3.md|ARC2047H-Building_Science_Materials_and_Construction_3]]
> - [[Courses/2024/ARC2023H-Design_Technology_2/ARC2023H-Design_Technology_2.md|ARC2023H-Design_Technology_2]]
> - [[Courses/2024/ARC2017H-Research_Methods/ARC2017H-Research_Methods.md|ARC2017H-Research_Methods]]
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
