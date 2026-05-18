---
title: 53. Maximum Subarray
date: 2022-05-13T00:00:00.000Z
description: "Solution to the problem: 53. Maximum Subarray"
tags:
  - easy
  - arrays
  - completed
  - subarrays
  - dsadeck
---

## Problem Statement

[Maximum Subarray - LeetCode](https://leetcode.com/problems/maximum-subarray/submissions/)

Pattern: [Pattern Kadane's Algorithm](/pattern-kadane-s-algorithm/)

---

## Solution

```java
public static int maxSubArray (int[] nums){
	int max  = Integer.MIN_VALUE, currMax = Integer.MIN_VALUE;
	for (int num : nums) {
		if (currMax <= 0) currMax = num;
		else currMax += num;
		max = Math.max(max, currMax);
	}
	return max;
}
```

### Notes

-
