---
title: LCA in BST
date: 2022-07-22T00:00:00.000Z
description: "Solution to the problem: LCA in BST"
tags:
  - dsadeck
  - bst
---

## Problem Statement

Pattern:

---

## Solution

```java
Node LCA(Node root, int n1, int n2)
{
	if(n1 > n2) return LCA(root, n2, n1);
	if(root == null) return null;

	if(root.data < n1 && root.data < n2) return LCA(root.right, n1, n2);
	if(root.data > n1 && root.data > n2) return LCA(root.left, n1, n2);
	return root;
}
```

`Ologn`
