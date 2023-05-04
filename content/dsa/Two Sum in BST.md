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
HashSet<Integer> set = new HashSet<>();

public boolean findTarget(TreeNode root, int k) {
	if(root == null) return false;
	
	boolean left = findTarget(root.left, k);
	if(set.contains(k-root.val)) return true;
	set.add(root.val);
	boolean right = findTarget(root.right, k);
	
	return left || right;
}
```

``` java
final int s = 10000;
boolean[] vis = new boolean[s*2+2];

public boolean findTarget(TreeNode root, int k) {
	if(root == null) return false;
	
	boolean left = findTarget(root.left, k);
	if(Math.abs(k-root.val) <= s && vis[k-root.val+s]) return true;
	vis[root.val+s] = true;
	boolean right = findTarget(root.right, k);
	
	return left || right;
}
```


# Solution with O(h) space
#todoleetcode 
