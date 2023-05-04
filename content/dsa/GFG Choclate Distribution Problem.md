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
Pattern: [[Pattern Sliding Window]]
Related: 

---

## Solution
``` java
public long findMinDiff (ArrayList<Integer> nums, int n, int m)
{
	Collections.sort(nums);
	int start = 0, end = start + m - 1;
	long minDiff = Long.MAX_VALUE;
	
	while(end < n) {
		minDiff = Math.min(minDiff, (long) (nums.get(end) - nums.get(start)));
		end++; start++;
	}
	
	return minDiff;
}
```

### Notes
- sort, sliding window.


