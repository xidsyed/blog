---
Date Created: [[2022-08-11]]
Tags: 
Related: 
Resources: 
---

## Problem Statement


Tags:  #dsadeck  #strings 
Pattern: 
Related: 

---

## Solution
``` java
static void dp(char[] s, int n, StringBuilder sb) {
	if(n <= 0) {
		System.out.println(sb.reverse());
		sb.reverse();
		return;
	}
	
	dp(s, n-1, sb.append(s[n-1]));
	if(sb.length() > 0) sb.delete(sb.length()-1, sb.length());
	dp(s, n-1, sb);
}

// region MAIN
public static void main(String[] args) {
	dp("Something".toCharArray(), "Something".length(), new StringBuilder());
}
```
TC : $2^n$
SC : $2^n$


### Notes
- can be optimised with memoisation




