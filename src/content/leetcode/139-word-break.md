---
title: 139. Word Break
date: 2022-08-21T00:00:00.000Z
description: "Solution to the problem: 139. Word Break"
tags:
  - dsadeck
  - strings
---

## Problem Statement

Pattern:

---

## Solution

```java
Boolean[] cache;
HashSet<String> dict;

public boolean dp(String S, int start) {
	if(start >= S.length()) return true;
	if(cache[start] != null) return cache[start];

	int end = start;
	while(end < S.length()){
		if(dict.contains(S.substring(start, end+1)) && dp(S, end + 1))
			return cache[start] = true;
		end++;
	}

	return cache[start] = false;
}

public boolean wordBreak(String s, List<String> wordDict) {
	cache = new Boolean[s.length()+1];
	dict = new HashSet<>();
	for(String str : wordDict) dict.add(str);

	return dp(s, 0);
}
```

TC : $n^2$
SC : $n^2$

### Notes

- This can be further optimised by iterating over the dictionary, since the dictionary size is lower, the Time complexity $n^2$ would be lower.
