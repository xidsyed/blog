---
title: 268. Missing Number
date: 2022-05-12T00:00:00.000Z
description: "Solution to the problem: 268. Missing Number"
tags:
  - easy
  - arrays
  - completed
  - dsadeck
---

## Problem Statement

Pattern: [Pattern 1-n range array](/pattern-1-n-range-array/)

---

## Solution

```java
class Solution {
	public void swap(int[] x, int a, int b) {
		int t = x[a];
		x[a] = x[b];
		x[b] = t;
	}

	public int missingNumber(int[] nums) {
		int n = nums.length, ans = n;

		// cycle sort
		for (int i = 0; i < n; i++)
			while (nums[i] != i) {
				// if final no.
				if (nums[i] == n) break;
				swap(nums, i, nums[i]);
			}

		// scan for el not matching index
		for (int i = 0; i < n; i++) {
			if (nums[i] != i)
				ans = i;
		}
		return ans;
	}
}
```

### Notes

- Cna also bee done with self-freq array
