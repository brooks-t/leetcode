// redo of 21. Merge Two Sorted Lists: https://leetcode.com/problems/merge-two-sorted-lists/
// ITERATIVE SOLUTION

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeTwoLists = (list1, list2) => {
    const prev = new ListNode(-Infinity);
    let curr = prev;

    while (list1 != null && list2 != null) {
        if(list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    curr.next = list1 == null ? list2 : list1;
    return prev.next;
}

console.log(mergeTwoLists([1,2,4], [1,3,4]));
