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


Tags:  #dsadeck  #arrays
Pattern: [[Pattern Two Pointer]]
Related: 

---

## Solution
``` java
public static int smallestSubWithSum(int nums[], int n, int x) {
	int start = 0, end = start, minLen = Integer.MAX_VALUE, sum = 0;
	while(end < n) {
		sum += nums[end];
		while(start <= end && sum > x) {
			minLen = Math.min(end-start+1, minLen);
			sum -= nums[start++];
		}
		end++;
	}
	return minLen;
}
```

### Notes
- quite simple

