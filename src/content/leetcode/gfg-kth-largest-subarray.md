---
title: GFG Kth Largest Subarray
date: 2022-06-02T00:00:00.000Z
description: "Solution to the problem: GFG Kth Largest Subarray"
tags:
  - dsadeck
  - arrays
  - completed
  - subarrays
---

## Problem Statement

[K-th Largest Sum Contiguous Subarray | Practice | GeeksforGeeks](https://practice.geeksforgeeks.org/problems/k-th-largest-sum-contiguous-subarray/1/)

Pattern:[Pattern Sliding Window](/pattern-sliding-window/)

---

## Solution

```java
static class Solution {
	public static int kthLargest(int N, int K, int[] Arr) {
		PriorityQueue<Integer> pq = new PriorityQueue<>(K);
		for (int start = 0; start < N; start++) {
			int currSum = 0;
			for (int end = start; end < N; end++) {
				currSum += Arr[end];
				if(pq.size() < K) pq.add(currSum);
				else if (currSum >= pq.element()) {
					pq.poll();
					pq.add(currSum);
		}   }   }
		return pq.element();
	}
}
```

### Notes

- find all the subarray sums using `currSum`, and push them into a k-sized priorityQueue
- Time: O(n^2logk) Extra Space: O(1)
