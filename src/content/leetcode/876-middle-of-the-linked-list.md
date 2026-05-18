---
title: 876. Middle of the Linked List
date: 2022-06-25T00:00:00.000Z
description: "Solution to the problem: 876. Middle of the Linked List"
tags:
  - dsadeck
  - linkedlist
---

## Problem Statement

Pattern:

---

## Solution

```java
public static ListNode getMid (ListNode head) {
	ListNode slow = head, fast = head;
	//fast = fast.next; // increment fast to get floor of mid

	while (fast!= null && fast.next!=null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	// when fast / fast.next becomes null, slow would have reached floor of mid
	return slow;
}
```

### Notes

- this question asks for ceil of mid, but if we wanted floor of mid we'de have uncommented `fast = fast.next;`
- used in merge sorting linked lists : [148. Sort List](/148-sort-list/) etc.
