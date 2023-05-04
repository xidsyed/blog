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
Node inorderPredecessor(Node node, int key) {
	Node pre = null;
	
	while(node != null) {
		if(key <= node.data) node = node.left;
		else {
			pre = node;
			node = node.right;
	}   }
	
	return pre;
}

Node inorderSuccessor(Node node, int key) {
	Node succ = null;
	
	while(node != null) {
		if(key >= node.data) node = node.right;
		else {
			succ = node;
			node = node.left;
	}   }
	
	return succ;
}
```

### Notes
- 

