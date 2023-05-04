---
Date Created: [[2022-07-29]]
Tags: 
Related: 
Resources: 
---

## Problem Statement


Tags:  #dsadeck  #linkedlist 
Pattern: 
Related: 

---

## Solution
``` java
ListNode merge(ListNode a, ListNode b) {
	if(a == null) return b;
	if(b == null) return a;

	ListNode smaller, larger;

	smaller = (a.val <= b.val) ? a : b;
	larger = (b.val >= a.val) ? b : a;

	smaller.next = merge(smaller.next, larger);
	return smaller;
}
```
TC : ` O(n+m) `
SC : ` O(n+m) - stack`  

### Notes
- 


