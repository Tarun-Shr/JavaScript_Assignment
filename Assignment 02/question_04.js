/*
4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
 */

"use strict"

function isPrime(n){
    let result = true
    for (let i = 2; i*i <= n ; i++) {
        if(n%i === 0){
            result = false
        }
    }
    return result
}

function factorial(n){
    let result = 1;
    for (let i = 1; i <= n ; i++) {
        result *= i;
    }
    return result
}

function prime(low, high){
    for (let i = low; i <= high ; i++) {
        if(isPrime(i)){
            console.log("Factorial of prime factor %d in range %d and %d is %d",i,low,high,factorial(i))
        }
    }
}

prime(1, 100)