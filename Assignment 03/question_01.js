/*
1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
 */

"use strict"

function pattern(){
    let k = 1;
    for(let i =1;i<=4;i++){
        let s = ""
        for(let j = 1;j<=i;j++){
            s += k+" "
            k++;
        }
        console.log(s)
    }
}

pattern()