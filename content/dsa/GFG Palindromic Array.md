---
Date Created: [[2022-06-24]]
Tags: 
Related: 
Resources: 
sr-due: 2022-06-28
sr-interval: 4
sr-ease: 270
---

## Problem Statement
[Palindromic Array | Practice | GeeksforGeeks](https://practice.geeksforgeeks.org/problems/palindromic-array-1587115620/1#)

Tags:  #dsadeck  #arrays
Pattern: 
Related: 

---


## Solution
``` java
for (int num : nums) {
	int temp = num, revNum = 0;
	while(temp != 0) {
		revNum = revNum*10 + temp%10;
		temp /= 10;
	}
	if(revNum != num) return 0; 
}

return 1;
```

### Notes
- 

