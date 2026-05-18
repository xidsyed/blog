---
title: 6095. Strong Password Checker II
date: 2022-06-11T00:00:00.000Z
description: "Solution to the problem: 6095. Strong Password Checker II"
tags:
  - dsadeck
  - strings
---

## Problem Statement

![](https://i.imgur.com/p0fMluK.png)

Pattern:

---

## Solution

```java
public boolean strongPasswordCheckerII (String password){
	boolean charLen = false, lowerCase = false, upperCase = false, digit = false,
		specialChar = false, adjacentChars = false;

	String specialChars = "!@#$%^&*()-+";
	char[] chars = password.toCharArray();

	int index = 0;
	if (chars.length >= 8) charLen = true;
	for(char ch : chars) {
		if (ch >= 'a' && ch <= 'z') lowerCase = true;
		if (ch >= 'A' && ch <= 'Z') upperCase = true;
		if (ch >= '0' && ch <= '9') digit = true;
		if (specialChars.indexOf(ch) != -1) specialChar = true;
		if (index > 0 && chars[index-1] == ch) adjacentChars = true;
		index++;
	}

	return charLen && lowerCase && upperCase && digit && specialChar && !adjacentChars;
}
```

### Notes

-
