---
title: 169. Majority Element
date: 2022-06-21T00:00:00.000Z
description: "Solution to the problem: 169. Majority Element"
tags:
  - dsadeck
  - arrays
  - arithmetic
---

## Problem Statement

![](https://i.imgur.com/pqyRvcn.png)

Pattern: [Pattern Boyer Moore's Voting Algorithm](/pattern-boyer-moore-s-voting-algorithm/)
Related: [229. Majority Element II](/229-majority-element-ii/)

---

## Solution

```java
public int majorityElement (int[] nums){
	int major = nums[0], count = 1;
	for (int num : nums) {
		// update count
		if(num == major) count++;
		else count--;
		// count = 0 -> reset major
		if (count == 0) {
			major = num;
			count = 1;
		}
	}
	return major;
}
```

### Notes

#### Concept

For an element to be a majority element, it needs to appear more than n/2 times in an array. if more than half an array is made up of a single element, then there is no other element that could appear more times than the majority element. i.e. there can only be one majority element.

One interesting solution would be to sort the array, and pick the middle element, it will always be the majority element. lol.

> [!CONEPT]
> If there is a 'majority' element in the array that appears more times than all the other elements in the array combined, you could keep cancelling out a majority and minority pair, at the end, only the majority element will remain. simply because it appears more times than all the other elements in the array combined

#### Execution

- pick the first element to be majority element, and track its count. decrement only if a 'minority element' appears (any element that is not the same as our supposed majority element)
- if count reaches 0, set the next element as the majority element,and forget about the old one
