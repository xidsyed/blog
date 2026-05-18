---
title: GFG Palindromic Array
date: 2022-06-24T00:00:00.000Z
description: "Solution to the problem: GFG Palindromic Array"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

[Palindromic Array | Practice | GeeksforGeeks](https://practice.geeksforgeeks.org/problems/palindromic-array-1587115620/1#)

Pattern:

---

## Solution

```java
for (int num : nums) {
	int temp = num, revNum = 0;
	while(temp != 0) {
		revNum = revNum*10 + temp%10;
		temp /= 10;
	}
	if(revNum != num) return 0;
}

return 1;
```

### Notes

-
