---
Date Created: [[2022-07-19]]
Tags: 
Related: 
Resources: 
---

## Problem Statement


Tags:  #dsadeck  #linkedlist #strings 
Pattern:
Related: 

---

## Solution
``` java
public String FirstNonRepeating (String str){
	int[] vis = new int[26];
	LinkedList<Character> q = new LinkedList<>();
	StringBuilder res = new StringBuilder();
	
	for(int i = 0; i < str.length() ; i++) {
		char ch = str.charAt(i);
		
		// update first-non-repeating q & visited arr
		if(vis[ch-'a'] < 1) q.addLast(ch);
		vis[ch - 'a']++;
		
		// remove q head if it has been repeated
		while(!q.isEmpty() && vis[q.peekFirst() - 'a'] > 1) q.remove();
		
		// append answer
		res.append(q.isEmpty() ? '#' : q.peekFirst());
	}
	
	return res.toString();
}
```

### Notes
- 

