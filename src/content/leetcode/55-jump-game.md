---
title: 55. Jump Game
date: 2022-06-11T00:00:00.000Z
description: "Solution to the problem: 55. Jump Game"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

![](https://i.imgur.com/dAyiQcA.png)

Pattern:

---

## Solution

```java
public boolean canJump(int[] nums) {
	if(nums.length <= 1) return true;
	int limit = nums[0];
	for (int index = 0; index <= limit; index++) {
		if (index == nums.length - 1) return true;
		limit = Math.max(limit, index+nums[index]);
	}
	return false;
}
```

### Notes

-
