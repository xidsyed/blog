---
title: 121. Best Time to Buy and Sell Stock
date: 2022-06-21T00:00:00.000Z
description: "Solution to the problem: 121. Best Time to Buy and Sell Stock"
tags:
  - dsadeck
  - arrays
---

## Problem Statement

Pattern:

---

## Solution

```java
public int maxProfit (int[] prices){
	int max_price = Integer.MIN_VALUE, maxProfit = 0;
	for (int i = prices.length-1; i >= 0 ; i--) {
		max_price = Math.max(max_price, prices[i]);
		maxProfit = Math.max(maxProfit , max_price - prices[i]);
	}
	return maxProfit;
}
```

```java
	    public int maxProfit (int[] prices){
			int min = Integer.MAX_VALUE, maxProfit = Integer.MIN_VALUE;
			for (int num : prices) {
				// update min stock price so far
				min = Math.min(num, min);
				// max (max so far, profit if sold today)
				maxProfit = Math.max(maxProfit, num - min);
			}
			return maxProfit;
	    }
```

Both are same, do it forwards or backwards
