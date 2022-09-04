/*
2. Write a program to find whether a given number is armstrong number or
not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
 */

"use strict"

function isArmstrong(n){
    let temp = n;
    let new_no = 0;
    while(temp>0){
        new_no += (temp%10)*(temp%10)*(temp%10);
        temp = ((temp) - (temp%10))/10;
    }
    return new_no === n;
}

console.log(isArmstrong(153))
