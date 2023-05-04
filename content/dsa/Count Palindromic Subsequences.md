---
Date Created: [[2022-08-27]]
Tags: 
Related: 
Resources: 
sr-due: 2022-08-29
sr-interval: 2
sr-ease: 250
---

## Problem Statement


Tags:  #dsadeck  #strings
Pattern: 
Related: 

---

## Solution
``` java
long MOD = (long) Math.pow(10,9) + 7;
Long[][] cache;


long dp (char[] str, int l, int r) {
	if (l > r) return 0;
	if (l == r) return 1;
	if (cache[l][r] != null) return cache[l][r];
	
	if(str[l] == str[r]) 
		return cache[l][r] = (dp(str, l+1, r) % MOD + dp(str, l, r-1) % MOD + 1) % MOD;
	return cache[l][r] = (dp(str, l+1, r) % MOD + dp(str, l, r-1) % MOD - dp(str, l+1, r-1) % MOD) % MOD;
}

long countPS(String str)
{
	cache = new Long[str.length()+1][str.length()+1];
	long ans = dp(str.toCharArray(), 0, str.length()-1);
	return ans < 0 ? ans + MOD : ans;
}
```
TC :  $n^2$
SC : $n^2$

### Notes
- [DP C++ Clear solution explained - LeetCode Discuss](https://leetcode.com/problems/count-different-palindromic-subsequences/discuss/272297/DP-C%2B%2B-Clear-solution-explained)


## Distinct Palindromic Subsequences (HARD)
[Count Different Palindromic Subsequences - LeetCode](https://leetcode.com/problems/count-different-palindromic-subsequences/)
[Working of the solution](https://leetcode.com/problems/count-different-palindromic-subsequences/discuss/272297/DP-C++-Clear-solution-explained/952331)


