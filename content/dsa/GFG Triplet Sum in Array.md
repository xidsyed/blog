---
Date Created: [[2022-06-24]]
Tags: 
Related: 
Resources: 
sr-due: 2022-07-05
sr-interval: 11
sr-ease: 270
---

## Problem Statement


Tags:  #dsadeck  #arrays #arithmetic 
Pattern: [[Pattern Two Pointer]]
Related: [[15. 3Sum]]

---

## Solution
``` java
public boolean find3Numbers(int[] nums, int n, int k) {
	Arrays.sort(nums);
	for (int start = 0; start < n-2; start++) {
		int mid = start+1, end = n-1;
		while(mid < end) {
			int sum = nums[start] + nums[mid] + nums[end];
			if(sum < k) mid++;
			else if(sum > k) end--;
			else return true;
		}
	}
	return false;
}
```

### Notes
- for start -> n -2
	- mid = start +1 end = n-1
	- if `sum > k` end--
	- if `sum < k` start++


