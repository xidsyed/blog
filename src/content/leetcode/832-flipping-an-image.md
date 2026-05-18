---
title: 832. Flipping an Image
date: 2022-06-06T00:00:00.000Z
description: "Solution to the problem: 832. Flipping an Image"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

[Flipping an Image - LeetCode](https://leetcode.com/problems/flipping-an-image/)

Pattern:

---

## Solution

```java
public int[][] flipAndInvertImage(int[][] A) {
	int n = A.length;
	for (int[] row : A)
		for (int i = 0; i * 2 < n; i++)
			if (row[i] == row[n - i - 1])
				row[i] = row[n - i - 1] ^= 1;
	return A;
}
```

### Notes

`row[i] = row[n - i - 1] ^= 1`

can be rewritten as,

`row[i] = row[n - i - 1] = row[n - i - 1] ^ 1`

can be rewritten as, executed in sequence,

`row[n - i - 1] = row[n - i - 1] ^ 1`  
`row[i] = row[n - i - 1]`

a ^= b equals a = a ^ b  
bit manipulation by XOR: [https://en.wikipedia.org/wiki/XOR_gate](https://en.wikipedia.org/wiki/XOR_gate)
