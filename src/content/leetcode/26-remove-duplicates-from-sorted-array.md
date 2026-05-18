---
title: 26. Remove Duplicates from Sorted Array
date: 2022-05-12T00:00:00.000Z
description: "Solution to the problem: 26. Remove Duplicates from Sorted Array"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

Pattern: [Pattern Ghost Array](/pattern-ghost-array/)
Related: [80. Remove Duplicates from Sorted Array II](/80-remove-duplicates-from-sorted-array-ii/) [27. Remove Element](/leetcode/27-remove-element/)

---

## Solution

```java
public int removeDuplicates(int[] nums) {
	// init index
	int index =0;
	// get next element array
	for (int num : nums) {
		// if first el of array or el > last el inserted -> insert element
		if(index == 0 || num > nums[index-1]) nums[index++] = num;
	}
	return index;
}
```

### Notes

- Only add to result array if next element is larger than last element
- A naive appraoch to this problem is to manaully shift elements forward everytime an element gets repeated.
  - dw i did that too. find on intellij
