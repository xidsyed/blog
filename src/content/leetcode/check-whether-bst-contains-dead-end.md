---
title: Check whether BST contains Dead End
date: 2022-07-30T00:00:00.000Z
description: "Solution to the problem: Check whether BST contains Dead End"
tags:
  - dsadeck
  - bst
---

## Problem Statement

Pattern:
Related: [1008. Construct Binary Search Tree from Preorder Traversal](/leetcode/1008-construct-binary-search-tree-from-preorder-traversal/)

---

## Solution

```java
public static boolean isDeadEnd(Node n){return check(n, 0, Integer.MAX_VALUE);}

// (min, max)
public static boolean check (Node root, int min, int max) {
	if(root == null) return false;
	if(root.data == min + 1  && root.data == max-1) return true;

	return check(root.left, min, root.data) || check(root.right, root.data, max);
}
```

TC : `n`
SC : `h - stack`
