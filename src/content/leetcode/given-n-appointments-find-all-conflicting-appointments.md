---
title: "Given n appointments, find all conflicting appointments"
date: 2022-07-30T00:00:00.000Z
description: >-
  Solution to the problem: Given n appointments, find all conflicting
  appointments
tags:
  - dsadeck
  - bst
---

## Problem Statement

[Given n appointments, find all conflicting appointments - GeeksforGeeks](https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/)

Pattern:

---

## Approach 1

Create `Points` Datastructure, and sort all the points, and the other point they belong to
Iterate add overlapping interval to a `Set<Interval<Point, Point>`

```java
class Point {
	int val;
	boolean isStart;
	Point other;
}
```

## Approach 2

[Interval Tree - GeeksforGeeks](https://www.geeksforgeeks.org/interval-tree/)

## Solution

```java
<% tp.file.cursor(2) %>
```

TC : `<% tp.file.cursor(3) %>`
SC : `<% tp.file.cursor(4) %>`

### Notes

-
