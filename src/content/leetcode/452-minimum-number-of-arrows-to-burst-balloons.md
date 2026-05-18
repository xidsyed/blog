---
title: 452. Minimum Number of Arrows to Burst Balloons
date: 2022-07-15T00:00:00.000Z
description: "Solution to the problem: 452. Minimum Number of Arrows to Burst Balloons"
tags:
  - dsadeck
  - intervals
  - greedy
---

## Problem Statement

Pattern: [Pattern Activity Selection Problem](/pattern-activity-selection-problem/)
Related: [435. Non-Overlapping Intervals](/leetcode/435-non-overlapping-intervals/)

---

## Solution

```java
    public int findMinArrowShots (int[][] points){
        Arrays.sort(points, Comparator.comparingInt(a -> a[1]));
        long prevEnd = Long.MIN_VALUE;
        int count = 0;
        for (int[] curr : points) {
            if(prevEnd < curr[0]){  // curr is overlapping
                count++;
                prevEnd = curr[1];
            }
        }
        return count;
    }
```

### Notes

- sort intervals by their `end`s
- every time you come across a non-overlapping element increment `count`
