---
title: 2053. Kth Distinct String in an Array
date: 2022-05-19T00:00:00.000Z
description: "Solution to the problem: 2053. Kth Distinct String in an Array"
tags:
  - easy
  - arrays
  - completed
  - dsadeck
---

## Problem Statement

Pattern:

---

## Solution

```java
public static String kthDistinct (String[] arr, int k){
	HashMap hm = new HashMap<String, Integer>();
	// insert into hashmap
	for (String str : arr) {
		int count = 0;
		if(hm.containsKey(str))
			count = (int) hm.get(str);
		hm.put(str, ++count);
	}
	// find kth distinct element
	int count = 0;
	for(String str : arr){
		if((int) hm.get(str) == 1) count++;
		if(count == k) return str;
	}
	// string not found
	return "";
}
```

### Notes

-
