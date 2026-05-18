---
title: 1832. Check if the Sentence Is Pangram
date: 2022-06-06T00:00:00.000Z
description: "Solution to the problem: 1832. Check if the Sentence Is Pangram"
tags:
  - dsadeck
  - arrays
  - strings
---

## Problem Statement

Pattern:

---

## Solution

```java
public boolean checkIfPangram (String sentence){
	boolean[] charPresent = new boolean[26];

	// mark all chars present as true
	for (char c : sentence.toCharArray()) {
		charPresent[c-'a'] = true;
	}

	// check if  charPresent is false
	for(boolean bool : charPresent)
		if (!bool) return false;

	return true;
}
```

### Notes

-
