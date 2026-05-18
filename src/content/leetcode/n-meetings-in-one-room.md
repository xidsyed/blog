---
title: N meetings in one room
date: 2022-07-15T00:00:00.000Z
description: "Solution to the problem: N meetings in one room"
tags:
  - dsadeck
  - intervals
---

## Problem Statement

Pattern:
Related: [919 · Meeting Rooms II](/leetcode/919-meeting-rooms-ii/)

---

## Solution

```java
static class Interval{
   public int start;
   public int end;
   Interval(int s, int e) {
      this.start = s;
      this.end = e;
   }
}

public int maxMeetings(int[] start, int[] end, int n) {
	ArrayList<Interval> intervals = new ArrayList<>();
	int count = 1;

	for (int i = 0; i < n; i++)
		intervals.add(new Interval(start[i], end[i]));
	intervals.sort((Comparator.comparingInt(o -> o.end)));

	Interval prev = intervals.get(0);
	for(Interval curr : intervals)
		if(curr.start > prev.end) {
			count++;
			prev = curr;
		}

	return count;
}
```

### Notes

- Sort intervals by their `end`.
- increase count, everytime you come across a valid interval i.e. `curr.start > prev.end
- `if(curr.start > prev.end)` will be false for the first element, so count is initialised to `count = 1`
