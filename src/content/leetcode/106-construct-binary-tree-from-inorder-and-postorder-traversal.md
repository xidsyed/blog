---
title: 106. Construct Binary Tree from Inorder and Postorder Traversal
date: 2022-07-13T00:00:00.000Z
description: >-
  Solution to the problem: 106. Construct Binary Tree from Inorder and Postorder
  Traversal
tags:
  - dsadeck
  - binarytrees
---

## Problem Statement

Pattern:
Related: [105. Construct Binary Tree from Preorder and Inorder Traversal](/leetcode/105-construct-binary-tree-from-preorder-and-inorder-traversal/)

---

## Solution

```java
int[] preOrder;
int[] postOrder;
int[] inOrder;
int index;

// find position of rootVal in inorder arr
int posInorder(int start, int rootVal) {
	while (inOrder[start] != rootVal)start++;
	return start;
}

TreeNode buildPost(int inStart, int inEnd) {
	if(index < 0 || inStart > inEnd) return null;

	TreeNode root = new TreeNode(postOrder[index--]);
	int pos = posInorder(inStart, root.val);

	root.right = buildPost(pos + 1, inEnd);
	root.left = buildPost(inStart, pos-1);

	return root;
}

TreeNode buildTree(int[] inOrderArr, int[] postOrderArr) {
	postOrder = postOrderArr;
	inOrder = inOrderArr;
	index = postOrder.length-1;
	return buildPost(0, inOrder.length-1);
}
```

### Notes

- to understand this, understand [105. Construct Binary Tree from Preorder and Inorder Traversal](/leetcode/105-construct-binary-tree-from-preorder-and-inorder-traversal/)
