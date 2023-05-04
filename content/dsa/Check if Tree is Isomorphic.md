---
Date Created: [[2022-07-13]]
Tags: 
Related: 
Resources: 
sr-due: 2022-07-17
sr-interval: 4
sr-ease: 270
---

## Problem Statement


Tags:  #dsadeck  #binarytrees 
Pattern: 
Related: 

---

## Solution
``` java
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


