---
title: 1295. Find Numbers with Even Number of Digits
date: 2022-06-06T00:00:00.000Z
description: "Solution to the problem: 1295. Find Numbers with Even Number of Digits"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

[Find Numbers with Even Number of Digits - LeetCode](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

Pattern:

---

## Solution

```java
public int findNumbers(int[] nums) {
	int even = 0;
	for(int i = 0; i < nums.length; i++) {
		if(((int)Math.log10((double)nums[i])+1)%2 == 0 )
			even++;
	}
	return even;
}
```

### Notes

-
