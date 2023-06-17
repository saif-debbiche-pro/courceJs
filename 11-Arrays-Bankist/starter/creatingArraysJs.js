'use strict'
console.log([1,2,5,3,64,5])//(6) [1, 2, 5, 3, 64, 5]


// Empty arrays + fill method

const x=new Array(7);//empty array with length 7

x.fill(1);//fill all the array with 1
console.log(x);//(7) [1, 1, 1, 1, 1, 1, 1]

x.fill(2,4);//starting with position 4 fill the array with 2
console.log(x);//(7) [1, 1, 1, 1, 2, 2, 2]

x.fill(6,4,5);//starting with position 4 fill the array with 6 unti 5(5 not included just like slice)
console.log(x);//(7) [1, 1, 1, 1, 2, 2, 2]

// Array.from (the call back function that we pass in same as map method but with empty array)
const y=Array.from({length:7},()=>1);
console.log(y);//(7) [1, 1, 1, 1, 1, 1, 1]

const z=Array.from({length:7},(_,i)=>i+1);
console.log(z);//(7) [1, 2, 3, 4, 5, 6, 7]

const w=Array.from({length:1000},(_,i)=>Math.trunc(Math.random()*1000+1));
console.log(w);//(7) [1, 2, 3, 4, 5, 6, 7]

// other example in the script.js at the end 
