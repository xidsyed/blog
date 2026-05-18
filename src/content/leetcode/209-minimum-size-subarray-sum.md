---
title: 209. Minimum Size Subarray Sum
date: 2022-06-01T00:00:00.000Z
description: "Solution to the problem: 209. Minimum Size Subarray Sum"
tags:
  - dsadeck
  - arrays
  - completed
---

## Problem Statement

Pattern: [Pattern Sliding Window](/pattern-sliding-window/)

---

## Solution

```java
public static int minSubArrayLen(int target, int[] nums) {
	int start = 0, end = 0, min = Integer.MAX_VALUE, currSum = 0;

	// sliding window
	while (end < nums.length) {
		// update currSum
		currSum += nums[end];

		// if currSum >= target
		while(start<= end && currSum >= target){
			// update min
			min = Math.min(min, end-start+1);
			// update sum, slide start forward
			currSum -= nums[start++];
		}
		end++;
	}
	// if el not found
	if (min == Integer.MAX_VALUE) min = 0;
	return min;
}
```

### Notes

- Sliding window : move end forward and update sum
  - while (sum >= target) update min, slide window forward, update sum
