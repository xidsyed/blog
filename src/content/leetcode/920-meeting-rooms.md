---
title: 920. Meeting Rooms
date: 2022-07-15T00:00:00.000Z
description: "Solution to the problem: 920. Meeting Rooms"
tags:
  - dsadeck
  - intervals
---

## Problem Statement

Pattern:

---

## Solution

```java
public boolean canAttendMeetings(List<Interval> intervals) {
	// Write your code here
	intervals.sort(Comparator.comparingInt(i -> i.end));
	Interval prev = new Interval(-1, -1);
	for(Interval curr : intervals) {
		if(curr.start < prev.end) return false;
		prev = curr;
	}
	return true;
}
```

### Notes

- if there is any overlap return false
- else return true
