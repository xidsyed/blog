---
Date Created: [[2022-07-18]]
Tags: 
Related: 
Resources: 
---

## Problem Statement
[Reverse a Linked List in groups of given size. | Practice | GeeksforGeeks](https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1)
Tags:  #dsadeck  #linkedlist 
Pattern: 
Related: 

---

## Solution
``` java
Node successor;

Node reverseN (Node head, int k) {
	if(head.next== null || k == 1) {
		successor = head.next;
		return head;
	}
	
	Node newHead = reverseN (head.next, k-1);
	head.next.next= head;                   // point next to self
	head.next = null;                       // point self to null
	
	return newHead;
}

Node reverse(Node head, int k)
{
	Node dummy = new Node(-1), dummyHead = dummy;
	dummy.next = head; successor = head;
	
	while(dummy != null && successor != null) {
		dummy.next = reverseN(successor, k);
		for (int i = 0 ; i < k && dummy != null; i++) dummy = dummy.next;
	}
	
	return dummyHead.next;
}
```

### Notes
- 

