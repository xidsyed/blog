---
Date Created: [[2022-06-24]]
Tags: 
Related: 
Resources: 
---

## Problem Statement
[Find minimum number of merge operations to make an array palindrome - GeeksforGeeks](https://www.geeksforgeeks.org/find-minimum-number-of-merge-operations-to-make-an-array-palindrome/)

Tags:  #dsadeck  #arrays
Pattern: 
Related: 

---

## Solution
``` java
public int minMerges(int[] nums) {  
   int merges = 0;  
   int start = 0, end = nums.length - 1;  
   while (start <= end) {  
      if (nums[start] < nums[end]) {  
         start++;  
         nums[start] += nums[start - 1];  
         merges++;  
      } else if (nums[end] < nums[start]) {  
         end--;  
         nums[end] += nums[end + 1];  
         merges++;  
      } else {  
         start++;  
         end--;  
      }  
   }   return merges;  
}
```

### Notes
- 
