---
title: GFG Median of 2 Sorted Arrays of Same Size
date: 2022-06-24T00:00:00.000Z
description: "Solution to the problem: GFG Median of 2 Sorted Arrays of Same Size"
tags:
  - dsadeck
  - arrays
  - mergesort
---

## Problem Statement

Pattern:
Related: [4. Median of Two Sorted Arrays](/leetcode/4-median-of-two-sorted-arrays/)

---

## Solution

```java
public int getMedian (int[] nums1, int[] nums2){
	int i1 = 0, i2 = 0, n = nums1.length;
	int p1 = 0, p2 = 0; // prev state of i1 and i2, before termination condition is reached
	while(i1 < n && i2 < n && i1 + i2 < n) {
		p1 = i1 ; p2 = i2;
		if(nums1[i1] < nums2[i2]) i1++;
		else if(nums2[i2] < nums1[i1]) i2++;
		else i1++;
	}
	return (nums1[p1] + nums2[p2]) / 2;
}
```

### Notes

- O(n) solution
- For an O(log(min(n, m))) solution for all sizes of arrays. checkout: [4. Median of Two Sorted Arrays](/leetcode/4-median-of-two-sorted-arrays/)
-
