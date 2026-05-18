---
title: Swap Kth nodes from ends
date: 2022-07-19T00:00:00.000Z
description: "Solution to the problem: Swap Kth nodes from ends"
tags:
  - dsadeck
  - linkedlist
---

## Problem Statement

Pattern:
Related: [1721. Swapping Nodes in a Linked List](/leetcode/1721-swapping-nodes-in-a-linked-list/)

---

## Solution

```java
void swap(Node pa, Node pb){
	Node a = pa.next, b = pb.next;
	pa.next = b;
	pb.next = a;

	Node temp = a.next;
	a.next = b.next;
	b.next = temp;
}
//Function to swap Kth node from beginning and end in a linked list.
Node swapkthnode(Node head, int num, int K)
{
	Node newHead = new Node(-1), pa = newHead, pb = newHead, a = head, b = head;
	newHead.next = head;
	int count = 0;
	while(count++ < K) {
		pa = pa.next;
		a=a.next;
	}

	while(a.next!= null) {
		pb = pb.next;
		b = b.next;
	}

	swap(pa, pb);
	return newHead.next;
}
```

### Notes

-
