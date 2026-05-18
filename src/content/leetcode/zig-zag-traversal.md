---
title: Zig Zag Traversal
date: 2022-07-03T00:00:00.000Z
description: "Solution to the problem: Zig Zag Traversal"
tags:
  - dsadeck
  - binarytrees
---

## Problem Statement

[Binary Tree Zigzag Level Order Traversal - LeetCode](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

Pattern:

---

## Solution

Reverse if level is odd

```java
public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
	List<List<Integer>> res = new ArrayList<>();
	if(root == null) return res;

	Queue<TreeNode> q = new LinkedList<TreeNode>();
	q.add(root);
	int levelCount = 0;
	while (!q.isEmpty()) {
		int size = q.size();
		ArrayList<Integer> level = new ArrayList<>();
		levelCount++;
		while(size-- > 0) {
			TreeNode node = q.poll();
			level.add(node.val);
			if(node.left != null) q.add(node.left);
			if(node.right != null) q.add(node.right);
		}
		if(levelCount%2 == 0) Collections.reverse(level); // reverse if level even
		res.add(level);
	}
	return res;
}
```

### Notes

- Slight modification to [Binary Tree](/leetcode/binary-tree/#iterative-return-arraylist)
