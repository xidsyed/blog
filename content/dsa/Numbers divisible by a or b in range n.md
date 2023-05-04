---
Date Created: [[2022-08-26]]
Tags: 
Related: 
Resources: 
---

## Problem Statement


Tags:  #dsadeck  #arithmetic 
Pattern: [[Pattern Inclusion Exclusion Principle]]
Related: 

---

## Solution
Keyword OR
``` java
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



