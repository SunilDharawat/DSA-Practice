// ## Learn Basic Maths by using some of problems 

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

// Problem No 03. Check if a number is Palindrome or Not
// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// Optimal Approach

function checkPalindrome(num){
    let revNum=0; let temp = num;
    while(num > 0){
        let extDigit = num % 10;
        revNum = (revNum * 10) + extDigit ;
        num = Math.floor(num / 10); 
    }
    if(temp === revNum){
        return true;
    }
    else {
        return false;
    }
}
// const res = checkPalindrome(121);
// console.log(res);

// Time Complexity => O(N) - Depends on Num (Number of iteration)
// Space Complexity => O(1) - Only revNum getting change

// Problem No 04. Find GCD of two numbers
// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// Brute Force Approach

function findGCD(num1, num2){
    let commonFact =1;
    for(let i=1; i<=Math.min(num1,num2); i++){
        if(num1%i === 0 && num2%i === 0){
            commonFact=i;
        }
    }
    return commonFact;
}
// const res = findGCD(20,15);
// console.log(res);
// Time Complexity => O(min(num1,num2)) - iterates from 1 to minimum of num1 and num2
// Space Complexity => O(1) - Only fixed amount of memory is required

// Better Approach 

function findGCDNum(n1, n2){
    for(let i= Math.min(n1, n2); i>0; i--){
        if( n1%i ===0 && n2%i ===0){
            return i;
        }
    }
    return 1;
}
// const res = findGCDNum(9,133);
// console.log(res);

// Time Complexity => O(min(num1,num2)) - iterates from 1 to minimum of num1 and num2 
// (same but here we gona check in reverse order)
// Space Complexity => O(1) - Only fixed amount of memory is required

// Optimal Approach
// Eudclidean Algorithm

function findGCDNumber(n1, n2){
   while(n1>0 && n2>0){
    if(n1>n2){
        n1=n1%n2;
    }
    else {
        n2=n2%n1;
    }
   }
   if(n1 ===0 ){
    return n2;
   } 
   return n1;
} 
// const res = findGCDNumber(15,20);
// console.log(res);

// Time Complexity => O(min(num1,num2)) - iterates from 1 to minimum of num1 and num2
// Space Complexity => O(1) - Only fixed amount of memory is required

// Problem No. 05 Check if a number is Armstrong Number or not
// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

function calPower(extDigit, num){
    let res=1;
    let count = 0;
    while(num > 0){
        count++;
        num = Math.floor(num/10);
    }
    for(let i=1; i<=count; i++){
        res = res * extDigit;
    }
    return res;
}

function checkArmstrongNum(num){
    let result = 0; temp = num;
    while(num > 0){
        let extDigit = num % 10;
        result = result + calPower(extDigit, temp);
        num = Math.floor(num/10);
    }
    if(result === temp){
        return true;
    }else{
        return false;
    }
}
// const res = checkArmstrongNum(10);
// console.log(res);
// Time Complexity - O(n), N number of input
// Space Complexity - O(1) Constant amount of additional memory for the reversed number

// Instead of this code we can write like this

function checkArmstrongNumber(n){
    let ln = String(n).length;
    let sum=0;
    let temp = n;
    while(n > 0){
        let extDigit = n % 10;
        sum = sum + Math.pow(extDigit, ln);
        n = Math.floor(n/10);
    }
    return sum === temp ? true : false;
}
// const res = checkArmstrongNumber(155);
// console.log(res);

// Problem No. 06 Print all Divisors of a given Number
// Problem Statement: Given an integer N, return all divisors of N.

function divisorInteger(num){
    let arr = [];
    let sqrtN = parseInt(Math.sqrt(num)); 
    // console.log(sqrtN); output = 3
    for(let i =1; i<=sqrtN; i++){
        if(num % i === 0){
            arr.push(i);
        }
        if(i !== num/i){
            // console.log(num/i);
            arr.push(num/i);
        }
    }
    return arr.sort((a,b)=> a-b); // sorting array
}
// const res = divisorInteger(12);
// console.log(res);

// Time Complexity - O(sqrt(n)) n is number input
// Space Complexity - O(2*sprt(n)) we are store divisor input to return so the length of arr is 2*sqrt(n)

// Problem No. 07 Check if a number is prime or not
// Problem Statement: Given an integer N, check whether it is prime or not.
// A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

function checkPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i=2; i<num; i++){
       if(num % i === 0){
        return false;
       }
    }
    return true;
}
// const res = checkPrime(13);
// console.log(res);

// Time Complexity - O(n) n is the input number as we itreate from 2 to number
// Space Complexity - O(1) fixed amount of space used

// Efficient Approach
function checkPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
       if(num % i === 0){
        return false;
       }
    }
    return true;
}
const res = checkPrime(13);
console.log(res);
// Time Complexity - O(sqrt(n)) n is the input number as we itreate from 2 to sqrt(n)
// Space Complexity - O(1) fixed amount of space used