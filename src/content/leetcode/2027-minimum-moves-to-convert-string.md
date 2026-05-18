---
title: 2027. Minimum Moves to Convert String
date: 2022-09-25T00:00:00.000Z
description: "Solution to the problem: 2027. Minimum Moves to Convert String"
tags:
  - dsadeck
  - strings
---

## Problem Statement

Pattern:

---

## Solution

```java
public int minimumMoves(String s) {
	int steps = 0, i = 0, len = s.length();
	while (i < len) {
		if (s.charAt(i) == 'X') { steps++; i+=2; }
		i++;
	}
	return steps;
}
```

TC : $O(n)$
SC : $O(1)$

### Notes

- This is a very simple slightly unintuitive greedy approach problem just like [Police and Thieves](/leetcode/police-and-thieves/)
- You can visualise this as iterating forwards, by the left end of a 3 element long underline/bar. and with every single `step` we take, we try to take out the maximum number of `X's` we can without leaving out a single one!
