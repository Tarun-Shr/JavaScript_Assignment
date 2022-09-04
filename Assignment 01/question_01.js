//
// 1. Write a program to find whether a given year is a leap year or not.
//
"use strict"


function isLeapYear(year){
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

const year = 2000
console.log(isLeapYear(year))









/*

Not every four years is a leap year.
The rule is that if the year is divisible by 100 and not divisible by 400, leap year is skipped.
The year 2000 was a leap year, for example, but the years 1700, 1800, and 1900 were not.
The next time a leap year will be skipped is the year 2100

 */
