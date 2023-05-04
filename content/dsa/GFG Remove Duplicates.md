---
Date Created: [[2022-06-25]]
Tags: 
Related: 
Resources: 
sr-due: 2022-06-29
sr-interval: 4
sr-ease: 270
---

## Problem Statement


Tags:  #dsadeck  #arrays
Pattern: 
Related: 

---

## Solution
``` java
// O(1) space
public ListNode removeDuplicates (ListNode head){
	ListNode next = head, node = head;
	next = next.next;
	while(next != null) {
		while(next != null && next.val == node.val) next = next.next ;  // increment next till diff from node
		node.next = next;   // add next to node
		node = node.next;   // increment node
	}
	return head;
}

// O(n) space
public ListNode removeDuplicatesUnsorted (ListNode head){
	ListNode next = head, node = head;
	Set<Integer> set = new HashSet<>();
	
	// add first val and increment
	set.add(next.val);
	next = next.next;
	
	while(next != null) {
		// if next is unique
		if(!set.contains(next.val)) {   
			set.add(next.val);
			node.next = next;   // add to node
			node = node.next;   // increment node
		}
		next = next.next;       // increment next
	}
	node.next = next;           // set last node to null
	return head;
}
```

### Notes
- Sorted
	- run next pointer fwd, if it is not same as head, add to head
- Unsorted
	- run next pointer fwd, if it is not in set add to head
	

