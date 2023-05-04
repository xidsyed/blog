---
Date Created: [[2022-06-24]]
Tags: 
Related: 
Resources: 
sr-due: 2022-06-27
sr-interval: 3
sr-ease: 250
---

## Problem Statement


Tags:  #dsadeck  #arrays 
Pattern: [[Pattern Sliding Window]]
Related: 

---

## Solution
``` java
public int minSwap(int[] nums, int n, int k) {
	int good = 0;
	for (int num : nums) if (num <= k) good++;
	if(good == 0) return 0;
	
	// sliding window of size 'good'
	int bad = 0, start = 0, end = good - 1;
	// find how many bad
	for (int i = start; i <= end; i++) if(nums[i] > k) bad++;
	
	// init minBad
	int minBad = bad;
	start++;end++;
	
	while(end < n) {
		if(nums[start-1] > k) bad--;    // check dropped element
		if(nums[end] > k) bad++;        // check picked element
		minBad = Math.min(minBad, bad); // update minBad
		start++; end++;                 // sliding window fwd
	}
	return minBad;
}
```

### Notes
- the no. of 'good' elements in the array (elements less than eq to k), will be the size of our sliding window
- we need to move this window through the array and find the windows with least number of 'bad' elements (elements greater than k)


