---
Date Created: [[2022-09-24]]
Tags: 
Related: 
Resources: 
---

## Problem Statement
[Remove Consecutive Characters | Practice | GeeksforGeeks](https://practice.geeksforgeeks.org/problems/consecutive-elements2306/1)
Remove adjacent duplicates recursively

Tags:  #dsadeck  #strings
Pattern: 
Related: 

---

## Solution
``` java
public char add (StringBuilder sb, String s, int i) {
	if(i == s.length()) return '#';
	
	char next = add(sb, s, i+1);
	char curr = s.charAt(i);
	if (curr != next) sb.append(curr);
	
	return curr;
}

public String removeConsecutiveCharacter(String S){
	StringBuilder sb = new StringBuilder();
	add(sb, S, 0);
	return sb.reverse().toString();
} 
```
TC : $O(n)$
SC : $O(n)$




