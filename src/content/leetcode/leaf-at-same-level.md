---
title: Leaf at same level
date: 2022-07-06T00:00:00.000Z
description: "Solution to the problem: Leaf at same level"
tags:
  - dsadeck
  - binarytrees
---

## Problem Statement

Pattern:
Related: [Balance Binary Tree](/leetcode/balance-binary-tree/)

---

## Solution

```java
class Solution
{
	// perfect node has both left and right children
    boolean isPerfectNode (Node node) {return node.left!=null &&node.right!=null;}

    int height (Node root) {
        if(root == null) return 0;

        int left = height(root.left);
        int right = height(root.right);

        if (left == -1 || right == -1) return -1;
        if (isPerfectNode(root) && left != right) return -1;

        return Math.max(left, right) + 1;
    }

    boolean check(Node root) {return height(root) != -1;}
}
```
