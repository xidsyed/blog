---
title: 796. Rotate String
date: 2022-08-10T00:00:00.000Z
description: "Solution to the problem: 796. Rotate String"
tags:
  - dsadeck
  - strings
---

## Problem Statement

[Rotate String - LeetCode](https://leetcode.com/problems/rotate-string/)

Pattern:

---

[Interview question: Check if one string is a rotation of other string - Stack Overflow](https://stackoverflow.com/questions/2553522/interview-question-check-if-one-string-is-a-rotation-of-other-string)

## Solution

```java
boolean isRotation(String s1,String s2) {
    return (s1.length() == s2.length()) && ((s1+s1).indexOf(s2) != -1);
}
```

TC : $n*m$
SC : $O(n)$

## Rabin Karp

[Rabin Karp](/leetcode/rabin-karp/#solution)
