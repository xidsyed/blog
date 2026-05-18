---
title: 378. Kth Smallest Element in a Sorted Matrix
date: 2022-05-13T00:00:00.000Z
description: "Solution to the problem: 378. Kth Smallest Element in a Sorted Matrix"
tags:
  - easy
  - arrays
  - tbdone
  - dsadeck
---

## Problem Statement

Pattern:

---

## Solution

```java
public int kthSmallest(int[][] matrix, int k) {
	// prepare min-heap
	int n = matrix.length, m = matrix[0].length;
	PriorityQueue<int[]> pq =
		new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
	for (int i = 0, j = 0; i < n ; i++)
		pq.add(new int[] {matrix[i][j], i, j});

	// get kth element
	int ans = -1;
	for (int i = 0 ; i < k ; i++) {
		int[] arr = pq.poll();
		ans = arr[0];
		int row = arr[1], col = arr[2];
		// reinsert into priority queue
		if(col+1 < m) pq.add(new int[]{matrix[row][col+1], row, col+1});
	}
	return ans;
}
```

### Notes

- pointer to the start of all rows in a priority queue, get the kth element
