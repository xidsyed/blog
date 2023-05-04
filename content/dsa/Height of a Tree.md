---
Date Created: [[2022-07-01]]
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


``` java
public static int height(Node root) {
	if (root == null) return 0;
	
	int leftHeight = height(root.left);
	int rightHeight = height(root.right);
	
	return Math.max(leftHeight, rightHeight) + 1;
}
```

