/*
3. Write a program to find the factorial of a number.
 */

"use strict"

function factorial(n){
    let ans = 1
    for (let i = 1; i <= n ; i++) {
        ans *= i;
    }
    return ans;
}

console.log('Factorial of 5 is %d',factorial(5))