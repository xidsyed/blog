---
title: 1161. Maximum Level Sum of a Binary Tree
date: 2022-07-01T00:00:00.000Z
description: "Solution to the problem: 1161. Maximum Level Sum of a Binary Tree"
tags:
  - dsadeck
  - binarytrees
---

## Problem Statement

Pattern:
Related: [BT Sum at Kth Level](/leetcode/bt-sum-at-kth-level/)

---

## Solution

```java
public int maxLevelSum (Node root){
	int level = 0, sum = 0, maxSum = Integer.MIN_VALUE, maxLevel = level;
	Queue<Node> q = new LinkedList<>();
	q.add(root);

	while(!q.isEmpty()) {
		int size = q.size(); sum = 0; level++;

		while (size-- > 0) {
			Node node = q.poll();
			sum += node.val;
			if(node.left != null)q.add(node.left);
			if(node.right != null)q.add(node.right);
		}

		// update maxSum maxLevel
		if(sum > maxSum) {
			maxSum = sum;
			maxLevel = level;
		}
	}
	return maxLevel;
}
```

### Notes

- same as [BT Sum at Kth Level](/leetcode/bt-sum-at-kth-level/), except you keep track of maxSum, and return its level
