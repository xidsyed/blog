---
Date Created: [[2022-08-21]]
Tags: 
Related: 
Resources: 
---

## Problem Statement


Tags:  #dsadeck  #strings #stacks 
Pattern: 
Related: 

---

## Solution
``` java
static boolean ispar(String str) {
	// add your code here
	Deque<Character> stack = new LinkedList<>();
	for (char ch : str.toCharArray()) {
		if (ch == '{' || ch == '(' || ch == '[') stack.push(ch);
		else {
			if (stack.isEmpty()) return false;
			char pop = stack.pop();
			if (ch == '}' && pop != '{') return false;
			if (ch == ')' && pop != '(') return false;
			if (ch == ']' && pop != '[') return false;
		}
	}
	return stack.isEmpty();
}
```
TC : $O(n)$
SC : $O(n)$

### Notes
- 



