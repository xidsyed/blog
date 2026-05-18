---
title: Height of a Tree
date: 2022-07-01T00:00:00.000Z
description: "Solution to the problem: Height of a Tree"
tags:
  - dsadeck
  - binarytrees
---

## Problem Statement

Pattern:

---

```java
public static int height(Node root) {
	if (root == null) return 0;

	int leftHeight = height(root.left);
	int rightHeight = height(root.right);

	return Math.max(leftHeight, rightHeight) + 1;
}
```
