console.log('1672. Richest Customer Wealth');

/* You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i-th customer has in the j-th bank.
Return the wealth that the richest customer has. A customer's wealth is the amount of money they have in all their bank accounts.
The richest customer is the customer that has the maximum wealth. */

const accounts = [[1, 2, 3], [3, 2, 1]];
const accounts2 = [[1, 5], [7, 3], [3, 5]];
const accounts3 = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];

const maximumWealth = (accounts) => {
    let max = 0;
    accounts.forEach(account => {
        let sum = 0;
        account.forEach(num => sum += num);
        if (sum > max) max = sum;
    })
    return max;
}

console.log(maximumWealth(accounts));
console.log(maximumWealth(accounts2));
console.log(maximumWealth(accounts3));

console.log('---------Part 2---------');
const testFunc = (x) => {
    x.forEach(num => console.log(num));
    return x;
}
console.log(testFunc(accounts));


console.log('---------Part 3---------');

const testFunc2 = (accounts) => {
    let newAccounts = [];
    accounts.forEach(account => {
        let total = 0;
        account.forEach(item => total += (item * 2));
        newAccounts.push(total);
    })

    return newAccounts;
}
console.log(testFunc2(accounts));