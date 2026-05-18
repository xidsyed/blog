---
title: Merge 2 Sorted Linked Lists
date: 2022-07-29T00:00:00.000Z
description: "Solution to the problem: Merge 2 Sorted Linked Lists"
tags:
  - dsadeck
  - linkedlist
---

## Problem Statement

Pattern:

---

## Solution

```java
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

TC : `O(n+m)`
SC : ` O(n+m) - stack`

### Notes

-
