---
title: Smallest sum contiguous subarray
date: 2022-05-13T00:00:00.000Z
description: "Solution to the problem: Smallest sum contiguous subarray"
tags:
  - easy
  - arrays
  - completed
  - subarrays
  - dsadeck
---

## Problem Statement

[Smallest sum contiguous subarray | Practice | GeeksforGeeks](https://practice.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1/#)

Pattern: [Pattern Kadane's Algorithm](/pattern-kadane-s-algorithm/)

---

## Solution

```java
public static int smallestSumSubArray(int a[], int size) {
	int minSum = Integer.MAX_VALUE, currMinSum = 0;
	for (int i = 0; i < size; i++) {
		if (currMinSum > 0) currMinSum = a[i];
		//if (currMinSum > 0) currMinSum = 0; // if smallest subArray can be empty
		else currMinSum += a[i];
		minSum = Math.min(minSum, currMinSum);
	}
	return minSum;
}
```

### Notes

- Reset sum to the next element everytime `currSum` reaches 0
  - update `minSum` on every iteration
