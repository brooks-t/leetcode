// 21. Merge Two Sorted Lists: https://leetcode.com/problems/merge-two-sorted-lists/description/
// You are given the heads of two sorted linked lists, list1 and list2. Merge the two lists in one sorted list. The list should be made by splicing together the nodes of the first two lists.

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = (list1, list2) => {
    const dummyHead = new ListNode(-Infinity);
    let current = dummyHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = list1 || list2;

    return dummyHead.next;
}

console.log(mergeTwoLists());