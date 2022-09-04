/*
3. Write a program to find whether a given number is special number or
not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14
 */


"use strict"

function factorial(n){
    let ans = 1;
    while(n!==0){
        ans *= n;
        n--;
    }
    return ans;
}

function isSpecial(n){
    let temp = n;
    let new_no = 0;
    while(temp>0){
        new_no += factorial(temp%10);
        temp = ((temp) - (temp%10))/10;
    }
    return new_no === n;
}

console.log(isSpecial(145))

