---
title: 46. Permutations
date: 2022-08-10T00:00:00.000Z
description: "Solution to the problem: 46. Permutations"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

Pattern:

---

## Solution

```cpp
vector<vector<int>> ans;
void solve(vector<int> &nums, int t) {
    if (t == nums.size()-1) {
        ans.push_back(nums);
        return;
    }

    for(int i = t; i < nums.size() ; i++) {
        swap(nums[t], nums[i]);
        solve(nums, t+1);
        swap(nums[t], nums[i]);
    }
}


vector<vector<int>> permute(vector<int>& nums) {
    ans.clear();
    solve(nums, 0);
    return ans;
}
```

TC : n!
SC : n!

### Notes

-
