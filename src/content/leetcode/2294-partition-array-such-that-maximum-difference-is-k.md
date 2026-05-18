---
title: 2294. Partition Array Such That Maximum Difference Is K
date: 2022-06-05T00:00:00.000Z
description: >-
  Solution to the problem: 2294. Partition Array Such That Maximum Difference Is
  K
tags:
  - dsadeck
  - arrays
  - subarrays
---

## Problem Statement

[Partition Array Such That Maximum Difference Is K - LeetCode Contest](https://leetcode.com/contest/weekly-contest-296/problems/partition-array-such-that-maximum-difference-is-k/)

Pattern: [Pattern Sliding Window](/pattern-sliding-window/)

---

## Solution

```java
public int partitionArray(int[] nums, int k) {
	if (nums.length == 1) return 1;

	// sort array
	Arrays.sort(nums);
	int start = 0, end = 1, subArrayCount = 1;
	// sliding window
	while(end < nums.length){
		// if max-min > k
		if(nums[end]-nums[start] > k) {
			// reset start
			start = end;
			// increment count
			subArrayCount++;
		}
		end++;
	}
	return subArrayCount;
}
```

### Notes

- Sort array
- increase window size till `nums[end]-num[start] > k`
  - reset window and increment `subarrayCount`
