---
title: 744. Find Smallest Letter Greater Than Target
date: 2022-06-05T00:00:00.000Z
description: "Solution to the problem: 744. Find Smallest Letter Greater Than Target"
tags:
  - dsadeck
  - arrays
  - binarysearch
---

## Problem Statement

Pattern: [Binary Search](/binary-search/#floor-ceil)

---

## Solution

```java
public char nextGreatestLetter (char[] letters, char target){
	int start = 0, end = letters.length-1, mid;
	while(start <= end){
		mid = start + (end-start)/2;
		if(target >= letters[mid]) start = mid+1;
		else end = mid-1;
	}
	// wrap around
	return letters[start % letters.length];
}
```

### Notes

- simple binary search but we return first, because after convergence, it will always point to the next/greater element. - ceiling binary search
- also `if(target >= letters[mid])` cuz even if target is found we want the greater element.
