---
title: 98. Validate BST
date: 2022-07-20T00:00:00.000Z
description: "Solution to the problem: 98. Validate BST"
tags:
  - dsadeck
  - bst
---

## Problem Statement

Pattern:

---

## Iterative Inorder Stack Solution

```java
public boolean isValidBST (TreeNode node){
	Deque<TreeNode> stack = new LinkedList<>();
	TreeNode prev = null;
	while(node!= null || !stack.isEmpty()) {
		if(node != null) {
			stack.push(node);
			node = node.left;   // go left
		} else {
			node = stack.pop(); // visit node
			if(prev != null && prev.val >= node.val) return false;
			prev = node;
			node = node.right;  // go right
		}
	}
	return true;
}
```

### Notes

- [Iterative Traversals of BT](/leetcode/iterative-traversals-of-bt/#inorder)

## Range Solution

leetcode solution
