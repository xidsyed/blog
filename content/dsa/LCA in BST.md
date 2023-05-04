---
Date Created: [[2022-07-22]]
Tags: 
Related: 
Resources: 
---

## Problem Statement


Tags:  #dsadeck  #bst 
Pattern: 
Related: 

---

## Solution
``` java
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

 