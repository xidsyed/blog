---
title: Smallest Distinct Window
date: 2022-08-31T00:00:00.000Z
description: "Solution to the problem: Smallest Distinct Window"
tags:
  - dsadeck
  - strings
---

## Problem Statement

Pattern:
Related: [632. Smallest Range Covering Elements from K Lists](/leetcode/632-smallest-range-covering-elements-from-k-lists/)

---

## Solution

```java
public int getInterval (Integer[] indices) {
	int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
	for (Integer index : indices) {
		if(index != null) {
			if(index == -1) return -1;      // interval not ready
			min = Math.min(min, index);
			max = Math.max(max, index);
		}
	}
	return max-min+1;
}

public int findSubString(String str) {
	// Your code goes here
	Integer[] indices = new Integer[256];
	for(char ch : str.toCharArray()) indices[ch] = -1;

	// find minimum interval
	int min = Integer.MAX_VALUE;
	for (int i = 0 ; i < str.length() ; i++) {
		indices[str.charAt(i)] = i;
		int interval = getInterval(indices);
		if (interval != -1)  min = Math.min(min, interval);
	}
	return min;
}
```

TC : $O(n)$
SC : $O(n)$

### Notes

- Hashmap in this problem was causing collisions
