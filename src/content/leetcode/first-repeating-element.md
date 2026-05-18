---
title: First Repeating Element
date: 2022-05-13T00:00:00.000Z
description: "Solution to the problem: First Repeating Element"
tags:
  - easy
  - arrays
  - completed
  - hashmap
  - dsadeck
---

## Problem Statement

Pattern: [Frequency](/frequency/)

---

## Solution

```java
class Solution {
    // freqArr approach
    public static int firstRepeated (int[] arr, int n){
        int[] freqArr = new int[1_000_000];
        Arrays.fill(freqArr, -1);
        int minIdx = Integer.MAX_VALUE;

        for (int i = 0; i < n; i++) {
            int val = arr[i];
            // val is being repeated
            if(freqArr[val] != -1)
                minIdx = Math.min(minIdx, freqArr[val]); // update minIdx
            freqArr[val] = i;
        }
        // if minIdx unchanged
        if(minIdx == Integer.MAX_VALUE) return -1;

        return minIdx+1; // 1-based indexing
    }

    // hashMap
    public static int firstRepeated2 (int[] arr, int n){
        HashMap<Integer, Integer> hm = new HashMap<>();
        int minIdx = Integer.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            int val = arr[i];
            if(hm.containsKey(val))
                minIdx = Math.min(hm.get(val), minIdx);
            hm.put(val, i);
        }
        if(minIdx == Integer.MAX_VALUE) return -1;
        return minIdx+1;
    }
}
```

### Notes

-
