/*
1. Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene.
 */

"use strict"

function typeOfTriangle(a,b,c){
    console.log("Triangle with sides %d, %d and %d is ",a,b,c)
    if(a===b && b===c){
        console.log("Equilateral Triangle\n")
    }else if(a===b || b===c || c===a){
        console.log("Isosceles Triangle\n")
    }else{
        console.log("Scalene Triangle\n")
    }
}

typeOfTriangle(10, 12, 8)
typeOfTriangle(10, 10, 8)
typeOfTriangle(8, 8, 8)