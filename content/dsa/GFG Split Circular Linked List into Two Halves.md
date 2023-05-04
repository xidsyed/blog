---
Date Created: [[2022-06-26]]
Tags: 
Related: 
Resources: 
sr-due: 2022-06-30
sr-interval: 4
sr-ease: 270
---

## Problem Statement
[Split a Circular Linked List into two halves | Practice | GeeksforGeeks](https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1#)

Tags:  #dsadeck  #linkedlist 
Pattern: 
Related: 

---

## Solution
``` java
public void splitList (ListNode head){
	ListNode fast = head, slow = head;
	
	while(fast.next!= head && fast.next.next != head) {
		fast = fast.next.next;
		slow = slow.next;
	}
	// slow now points to mid
	
	// in case there's even no. of els in list
	while(fast.next != head) fast = fast.next;
	// fast now points to tail
	
	ListNode mid = slow, tail = fast, head2 = mid.next;
	
	// make both circular
	mid.next = head;
	tail.next = head2;
}
```

### Notes
- Circular linked list are in a way not circular at all, since you know then end, when `curr.next == head`
- Now just find [[876. Middle of the Linked List]] and slow will point to floor of mid, and `fast` will point to `tail` if LL is Odd, if its even, `while(fast.next != head) fast = fast.next` should give u the tail
- connect both tails, to heads


