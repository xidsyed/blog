---
Date Created: [[2022-08-21]]
Tags: 
Related: 
Resources: 
---

## Problem Statement


Tags:  #dsadeck  #arrays 
Pattern: 
Related: [[31. Next Permutation]]

---

## Solution
``` java
public static void swap(int[] x, int a, int b) {
	int t = x[a];
	x[a] = x[b];
	x[b] = t;
}

private static int getSuccessor(int[] nums, int pre) {
	int i = nums.length - 1, minIdx = i, minVal = Integer.MAX_VALUE;
	while (i > pre) {
		if (nums[i] < minVal && nums[pre] < nums[i]) {
			minIdx = i;
			minVal = nums[i];
		}
		i--;
	}
	return minIdx;
}

private static int getPredecessor(int[] nums) {
	int pre = nums[nums.length - 1];
	for (int i = nums.length - 2; i >= 0; i--) {
		if (nums[i] < pre) return i;
		pre = nums[i];
	}
	return -1;
}


static List<Integer> nextPermutation(int N, int[] nums) {
	ArrayList<Integer> res = new ArrayList<>();
	for (int num : nums) res.add(num);
	if (N < 2) return res;
	
	// find predecessor
	int pre = getPredecessor(nums);
	// if no predecessor return sorted array
	if (pre == -1) {
		Collections.sort(res);
		return res;
	}
	// find successor to predecessor
	int succ = getSuccessor(nums, pre);
	
	swap(nums, pre, succ);                      // swap
	Arrays.sort(nums, pre + 1, N);  // sort
	
	for (int i = 0; i < N; i++) res.set(i, nums[i]);
	return res;
}
```
TC : $nlogn$
SC : 

### Notes
- 



