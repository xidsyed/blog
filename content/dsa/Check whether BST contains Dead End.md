---
Date Created: [[2022-07-30]]
Tags: 
Related: 
Resources: 
---

## Problem Statement


Tags:  #dsadeck  #bst 
Pattern: 
Related: [[1008. Construct Binary Search Tree from Preorder Traversal]]

---

## Solution
``` java
public static boolean isDeadEnd(Node n){return check(n, 0, Integer.MAX_VALUE);}

// (min, max)
public static boolean check (Node root, int min, int max) {
	if(root == null) return false;
	if(root.data == min + 1  && root.data == max-1) return true;
	
	return check(root.left, min, root.data) || check(root.right, root.data, max);
}
```
TC : ` n `
SC : ` h - stack `

