---
Date Created: [[2022-07-03]]
Tags: 
Related: 
Resources: 
sr-due: 2022-07-06
sr-interval: 3
sr-ease: 250
---

## Problem Statement


Tags:  #dsadeck  #binarytrees 
Pattern: 
Related: 

---

## Solution

``` java
Node last;
Node inorder (Node root) {
	if(root == null) return root;
	
	inorder(root.left);
		// link last to root
		if (last != null) last.right = root;
		// link root to last
		root.left = last;
		// set new last
		last = root;
	inorder(root.right);
	
	return root;
}

//Function to convert binary tree to doubly linked list and return it.
Node bToDLL(Node root)
{
	if(root == null) return root;
	
	// inorder convert BT to DLL
	Node tail = inorder(root);
 
	// get DLL head
	while(tail.left != null) tail = tail.left;
	
	// return dll head
	return tail;
}
```

- 

