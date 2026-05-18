---
title: 435. Non-Overlapping Intervals
date: 2022-06-15T00:00:00.000Z
description: "Solution to the problem: 435. Non-Overlapping Intervals"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

Pattern:

---

## Solution

```java
public int eraseOverlapIntervals(int[][] intervals) {
	Arrays.sort(intervals, Comparator.comparingInt(a -> a[1]));
	int prevEnd = Integer.MIN_VALUE, count = 0;
	for (int[] curr : intervals) {
		if(prevEnd > curr[0]){      //curr is overlapping
			count++;
		} else prevEnd = curr[1];   // curr is non-overlapping
	}
	return count;
}
```

### Notes

bascically the inverse of [452. Minimum Number of Arrows to Burst Balloons](/leetcode/452-minimum-number-of-arrows-to-burst-balloons/)
`prevEnd` denotes the end of the last **non-overlapping** interval. if any interval overlaps with this interval remove it (increase count), until you find the next **non-overlappping element**
