---
title: GFG Reverse Doubly Linked List
date: 2022-06-27T00:00:00.000Z
description: "Solution to the problem: GFG Reverse Doubly Linked List"
tags:
  - dsadeck
  - linkedlist
---

## Problem Statement

Pattern:

---

## Solution

```java
public static Node reverseDLL(Node  head)
{
    //Your code here
    Node prev = null;

    while (head != null) {
        // store next
        Node next = head.next;

        // swap prev & next
        head.next = prev;
        head.prev = next;

        // increment prev & head
        prev = head;
        head = next;
    }
    return prev;
    // return last node
}
```

### Notes

-
