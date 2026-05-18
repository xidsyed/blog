---
title: 1380. Lucky Numbers in a Matrix
date: 2022-06-09T00:00:00.000Z
description: "Solution to the problem: 1380. Lucky Numbers in a Matrix"
tags:
  - dsadeck
  - arrays
  - matrix
---

## Problem Statement

Pattern:

---

## Solution

```java
public List<Integer> luckyNumbers(int[][] matrix) {
	// min max arrays
	int[] minRow = new int[matrix.length];
	int[] maxColumn = new int[matrix[0].length];
	// fill with appropriate values for comparison
	Arrays.fill(minRow, Integer.MAX_VALUE);
	Arrays.fill(maxColumn, Integer.MIN_VALUE);

	ArrayList<Integer> result = new ArrayList<>();

	// update min for each row and each column
	for (int i = 0; i < matrix.length; i++) {
		for (int j = 0; j < matrix[i].length; j++) {
			minRow[i] = Math.min(minRow[i], matrix[i][j]);
			maxColumn[j] = Math.max(maxColumn[j], matrix[i][j]);
		}
	}

	// see for any given element, is there a match in min and max arrays
	for (int i = 0; i < matrix.length; i++)
		for (int j = 0; j < matrix[i].length; j++)
			if(maxColumn[j]== minRow[i]) result.add(maxColumn[j]);

	return result;
}
```

### Notes

-
