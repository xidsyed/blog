---
Date Created: [[2022-05-13]]
Tags: 
Related: 
Resources: 
sr-due: 2022-06-09
sr-interval: 4
sr-ease: 270
---

## Problem Statement
[Smallest sum contiguous subarray | Practice | GeeksforGeeks](https://practice.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1/#)

Tags:  #easy #arrays #completed #subarrays #dsadeck 
Pattern: [[Pattern Kadane's Algorithm]]

---

## Solution
``` java
public static int smallestSumSubArray(int a[], int size) {
	int minSum = Integer.MAX_VALUE, currMinSum = 0;
	for (int i = 0; i < size; i++) {
		if (currMinSum > 0) currMinSum = a[i];
		//if (currMinSum > 0) currMinSum = 0; // if smallest subArray can be empty
		else currMinSum += a[i];
		minSum = Math.min(minSum, currMinSum);
	}
	return minSum;
}
```

### Notes
- Reset sum to the next element everytime `currSum` reaches 0
	- update `minSum` on every iteration


