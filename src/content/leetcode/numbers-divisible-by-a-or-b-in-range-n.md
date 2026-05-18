---
title: Numbers divisible by a or b in range n
date: 2022-08-26T00:00:00.000Z
description: "Solution to the problem: Numbers divisible by a or b in range n"
tags:
  - dsadeck
  - arithmetic
---

## Problem Statement

Pattern: [Pattern Inclusion Exclusion Principle](/pattern-inclusion-exclusion-principle/)

---

## Solution

Keyword OR

```java
int divisible (int n, int a, int b) {
	int countA = n/a;
	int countB = n/b;
	int countAB = n/(a*b);
	return countA + countB - countAB;

}
```

TC :
SC :

### Notes

-
