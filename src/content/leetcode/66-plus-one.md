---
title: 66. Plus One
date: 2022-06-09T00:00:00.000Z
description: "Solution to the problem: 66. Plus One"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

Pattern:

---

## Solution

```java
public int[] plusOne(int[] digits) {
		int n = digits.length;
	for(int i=n-1; i>=0; i--) {
		if(digits[i] < 9) {
			digits[i]++;
			return digits;
		}

		digits[i] = 0;
	}

	int[] newNumber = new int [n+1];
	newNumber[0] = 1;

	return newNumber;
}
```

### Notes

-
