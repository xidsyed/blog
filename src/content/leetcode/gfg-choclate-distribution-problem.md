---
title: GFG Choclate Distribution Problem
date: 2022-06-24T00:00:00.000Z
description: "Solution to the problem: GFG Choclate Distribution Problem"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

Pattern: [Pattern Sliding Window](/pattern-sliding-window/)

---

## Solution

```java
public long findMinDiff (ArrayList<Integer> nums, int n, int m)
{
	Collections.sort(nums);
	int start = 0, end = start + m - 1;
	long minDiff = Long.MAX_VALUE;

	while(end < n) {
		minDiff = Math.min(minDiff, (long) (nums.get(end) - nums.get(start)));
		end++; start++;
	}

	return minDiff;
}
```

### Notes

- sort, sliding window.
