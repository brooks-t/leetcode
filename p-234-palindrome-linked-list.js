// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
const problemTitle = document.getElementById('problemTitle');
problemTitle.innerHTML = '234. Palindrome Linked List';

const isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast) {
        slow = slow.next;
    }
    slow = reverse(slow);
    fast = head;
    while (slow) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
}

head = [1, 2, 2, 1];
head2 = [1, 2];

const funcTest = (head) => {
    for (let i = 0; i < head.length / 2; i++) {
        if (head[i] !== head[head.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(funcTest(head));
console.log(funcTest(head2));
