---
title: 35. Search Insert Position
description: "Solution to the problem: 35. Search Insert Position"
tags:
  - easy
  - arrays
  - dsadeck
  - binarysearch
---

## Problem Statement

Pattern:

---

## Solution

```java
public int searchInsert(int[] nums, int target) {
	// perform binary search
	int start = 0, end = nums.length - 1, mid;

	while (start <= end) {
		mid = start + (end - start) / 2;

		if (nums[mid] > target) end = mid - 1;
		else if (nums[mid] < target) start = mid + 1;
		else return mid;
	}
	// mid not returned -> el not found
	return start;
}
```

### Notes

- Simple [Binary Search](/binary-search/#floor-ceil) problem. This is a ceiling problem so we return the `start` since it will point to the ceiling at the exit condition
