---
title: GFG Smallest Subarray Sum Smaller Than K
date: 2022-06-24T00:00:00.000Z
description: "Solution to the problem: GFG Smallest Subarray Sum Smaller Than K"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

Pattern: [Pattern Two Pointer](/pattern-two-pointer/)

---

## Solution

```java
public static int smallestSubWithSum(int nums[], int n, int x) {
	int start = 0, end = start, minLen = Integer.MAX_VALUE, sum = 0;
	while(end < n) {
		sum += nums[end];
		while(start <= end && sum > x) {
			minLen = Math.min(end-start+1, minLen);
			sum -= nums[start++];
		}
		end++;
	}
	return minLen;
}
```

### Notes

- quite simple
