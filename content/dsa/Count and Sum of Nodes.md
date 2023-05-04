---
Date Created: [[2022-06-30]]
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
// Count Nodes O(n)
public static int countNodes (Node root) {
	if(root == null) return 0;
	
	int left = countNodes(root.left);
	int right = countNodes(root.right);
	
	return right + left + 1;
}

// Sum Nodes O(n)
public static int sumNodes (Node root) {
	if(root == null) return 0;
	
	int leftSum = sumNodes(root.left);
	int rightSum = sumNodes(root.right);
	
	return leftSum + rightSum + root.val;
}
```

### Notes
- 