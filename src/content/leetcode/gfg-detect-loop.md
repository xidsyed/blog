---
title: GFG Detect Loop
date: 2022-06-25T00:00:00.000Z
description: "Solution to the problem: GFG Detect Loop"
tags:
  - dsadeck
  - linkedlist
---

## Problem Statement

Pattern:

---

## Solution

```java
public static boolean detectLoop(Node head){
	Node slow = head, fast = head;
	while(slow != null && fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
		if(slow == fast) return true;
	}
	return false;
}
```

## How do we know fast and slow pointer meet

**Floyds Algorithm**

- When slow pointer enters the loop, the fast pointer must be inside the loop. Let fast pointer be distance k from slow.
- Now if consider movements of slow and fast pointers, we can notice that distance between them (from slow to fast) increase by one after every iteration. After one iteration (of slow = next of slow and fast = next of next of fast), distance between slow and fast becomes k+1, after two iterations, k+2, and so on. **At some point, the distance will become k + n, and since the list is circular, they will coincide!!**

continue on [142. Linked List Cycle II](/142-linked-list-cycle-ii/)
