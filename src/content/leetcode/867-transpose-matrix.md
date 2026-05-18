---
title: 867. Transpose Matrix
date: 2022-06-06T00:00:00.000Z
description: "Solution to the problem: 867. Transpose Matrix"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

Pattern:

---

## Solution

```java
public int[][] transpose(int[][] matrix) {

	int n = matrix.length, m = matrix[0].length;
	int[][] trans = new int[m][n];

	for(int i = 0 ; i <n ; i++)
		for(int j = 0 ; j <m ; j++)
		  trans[j][i] = matrix[i][j];

	return trans;
}
```

### Notes

-
