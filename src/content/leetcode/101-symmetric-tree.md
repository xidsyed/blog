---
title: 101. Symmetric Tree
date: 2022-07-02T00:00:00.000Z
description: "Solution to the problem: 101. Symmetric Tree"
tags:
  - dsadeck
  - binarytrees
---

## Problem Statement

Pattern:

---

## Solution

```java
public boolean compare (TreeNode A, TreeNode B){
	if(A == null && B == null) return true;     // both null
	if(A == null || B == null) return false;    // one of them null

	if(A.val != B.val) return false;

	return compare(A.left, B.right) && compare(A.right, B.left);
}

public boolean isSymmetric(TreeNode root) {
	if(root == null) return false;
	return compare(root.left, root.right);
}
```

### Notes

- since symetric `compare(A.left, B.right) && compare(A.right, B.left)` - mirror images
