---
title: 215. Kth Largest Element in an Array
date: 2022-05-13T00:00:00.000Z
description: "Solution to the problem: 215. Kth Largest Element in an Array"
tags:
  - easy
  - arrays
  - tbdone
---

## Problem Statement

Pattern: [Pattern Order Of Statistics](/pattern-order-of-statistics/)

---

## Code

```java
public static int findKthLargestLib (int[] nums, int k) {
	PriorityQueue<Integer> pq = new PriorityQueue<>();
	int index = 0;
	while(k-- > 0) {
		pq.add(nums[index++]);
	}
	for(;index < nums.length;index++) {
		if(nums[index] >= pq.peek()) {
			pq.remove();
			pq.add(nums[index]);
		}
	}
	return pq.peek();
}

```

### Notes

- Make a minHeap of size k of the largest elements of an array.
- The root will be the answer!

## Quick Select Solution

[Quick Sort](/quick-sort/)

```java
public static int findKthLargestLib (int[] nums, int k) {
	PriorityQueue<Integer> pq = new PriorityQueue<>();
	int index = 0;
	while(k-- > 0) {
		pq.add(nums[index++]);
	}
	for(;index < nums.length;index++) {
		if(nums[index] >= pq.peek()) {
			pq.remove();
			pq.add(nums[index]);
		}
	}
	return pq.peek();
}

```

### Notes

- Make a minHeap of size k of the largest elements of an array.
- The root will be the answer!

## Kth largest element in an infinite Array / Stream

https://www.google.com/amp/s/www.geeksforgeeks.org/kth-largest-element-in-a-stream/amp/

#heap
