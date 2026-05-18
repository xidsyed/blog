---
title: 632. Smallest Range Covering Elements from K Lists
date: 2022-06-05T00:00:00.000Z
description: "Solution to the problem: 632. Smallest Range Covering Elements from K Lists"
tags:
  - dsadeck
  - linkedlist
  - heap
---

## Problem Statement

Pattern:
Related : [Smallest Distinct Window](/leetcode/smallest-distinct-window/)

---

## Solution

```java
class Node {
	List<Integer> list;
	int index;

	public boolean hasNext () {return (list.size() > index+1);}

	public int get() {
		return list.get(index);
	}

	Node(List<Integer> list) {
		this.list = list;
		this.index = 0;
	}
}

public int[] smallestRange(List<List<Integer>> nums) {
	// create pq of Node
	PriorityQueue<Node> pq = new PriorityQueue<>(
		Comparator.comparingInt(Node::get)
	);

	// add node heads to pq
	for (List<Integer> list : nums) {
		Node node = new Node(list);
		pq.add(node);
		System.out.println(node.list.get(node.index));
	}

	int currMax = 0, currMin, max = Integer.MAX_VALUE, min = 0;

	// get currMax by emptying temp PQ
	PriorityQueue<Node> temp = new PriorityQueue<>(pq);
	while (!temp.isEmpty()) {
		Node node = temp.poll();
		currMax = node.get();
	}

	// while pq not empty -> minimise range
	while (!pq.isEmpty()) {
		// update currMin from node
		Node node = pq.poll();
		currMin = node.get();

		// check if currRange < Range
		if ((currMax - currMin) < (max - min)) {
			// update range
			max = currMax;
			min = currMin;
		}

		// if next el exists in node
		if (node.hasNext()) {
			// reinsert incremented node into pq
			node.index++;
			pq.add(node);

			// update currMax, if newElement > currMax
			currMax = Math.max(currMax, node.get());
		}
		// pointer cannot be incremented, and shortest ranges have been exhausted!
		else break;
	}
	return new int[]{min, max};
}

```

### Notes

- This question is [23. Merge k Sorted Lists](/leetcode/23-merge-k-sorted-lists/) with a twist

  > [!CONCEPT]
  > Heads of K Lists in a priority queue. Then track `min` and `max`, till the priority queue is empty, minimise `currMax - currMin`

- In that question, we funnel k sorted linked lists through a minheap, and empty that minheap into a sorted array
  - The algorithm started by adding a pointer to the start of each of the K sortedarrays in a priority queue. And extract the smallest one while incrementing its pointer/index
  - Same here, Except
    - We keep track of the largest and smallest elements inside the minheap which gives us our range `range = currMax - currMin`
    - Our goal is to minimise this `range`, find the combination of `currMin` and `currMax` which gives us the answer
    - So we update `min` and `max` when we find a smaller range
