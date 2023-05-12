console.log('2236. Root Equals Sum of Children');

/* You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.*/

const root = [10, 4, 6];
const root2 = [1, 2, 10];

const rootEqualsSumOfChildren = (root) => {
    const sum = root[1] + root[2];
    return root[0] === sum;
    }

// trying a slightly different approach
const rootEqualsSumOfChildren2 = (root) => (root[0] === root[1] + root[2]);

console.log(rootEqualsSumOfChildren(root));
console.log(rootEqualsSumOfChildren(root2));

console.log('---------Part 2---------');

console.log(rootEqualsSumOfChildren2(root));
console.log(rootEqualsSumOfChildren2(root2));

// the correct solution is below - I misunderstood the initial problem - Treenodes are objects, not arrays I think. Need to revisit this one.
// const checkTree = root => root.val === (root.left.val + root.right.val);