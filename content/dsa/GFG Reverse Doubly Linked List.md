---
Date Created: [[2022-06-27]]
Tags: 
Related: 
Resources: 
sr-due: 2022-07-01
sr-interval: 4
sr-ease: 270
---

## Problem Statement


Tags:  #dsadeck  #linkedlist 
Pattern: 
Related: 

---

## Solution
``` java
public static Node reverseDLL(Node  head)
{
    //Your code here
    Node prev = null;
    
    while (head != null) {
        // store next
        Node next = head.next;
        
        // swap prev & next
        head.next = prev;
        head.prev = next;
                    
        // increment prev & head                        
        prev = head;
        head = next;
    }
    return prev;
    // return last node
}
```

### Notes
- 

