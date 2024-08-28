// Problem No 01. Count digits in a number
// Problem Statement: Given an integer N, return the number of digits in N.

// Brute Force Approach

function countDigits(num){
    let count =0;
    while(num > 0){
        count++;
        num=Math.floor(num/10);
    }
    return count;
}
// const res = countDigits(12345688888880);
// console.log(res);
// Time Complexity => O(N) - Depends on Num (Number of iteration)
// Space Complexity => O(1) - Only Count getting change

// Optimal Approach
function countDigits(num){
    let count = Math.floor(Math.log10(num)+1);
    return count;
}
// const res = countDigits(10);
// console.log(res);
// Time Complexity => O(1) - Simple arithmetic operations in constant time
// Space Complexity => O(1) - Only Count getting change

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Problem No 02. Reverse Digits of a Number
// Problem Statement: Given an integer N return the reverse of the given number.

// Optimal Approach
function reverseNumber(num){
    let revNum=0;
    while(num > 0){
        let extDigit = num % 10;
        revNum = (10*revNum)+extDigit;
        num = Math.floor(num/10);
    }
    return revNum;
}
// const res = reverseNumber(9877);
// console.log(res);
// Time Complexity => O(N) - Depends on Num (Number of iteration)
// Space Complexity => O(1) - Only revNum getting change