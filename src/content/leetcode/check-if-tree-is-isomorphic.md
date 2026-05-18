---
title: Check if Tree is Isomorphic
date: 2022-07-13T00:00:00.000Z
description: "Solution to the problem: Check if Tree is Isomorphic"
tags:
  - dsadeck
  - binarytrees
---

## Problem Statement

Pattern:

---

## Solution

```java
boolean isIsomorphic(Node root1, Node root2)
{
	// code here.
	if(root1 == null && root2 == null) return true;
	if(root1 == null || root2 == null) return false;

	if(root1.data != root2.data) return false;

	return (isIsomorphic(root1.left,root2.left) && isIsomorphic(root1.right,root2.right)) ||
   (isIsomorphic(root1.left,root2.right) && isIsomorphic(root1.right,root2.left));
}
```

### Notes

- either corresponding left and right nodes of a node have to be the same
- or opposite corresponding left and right nodes of a node have to be the same
