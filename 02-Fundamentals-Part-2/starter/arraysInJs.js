'use strict'


// *** arrays in js can hold values of different types

const friends=['saif','ali','jamel'];
console.log(friends);

const years =new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[1]);


console.log(friends.length);
console.log(friends[friends.length-1]);
friends[2]="adel";
console.log(friends);

const saif=["saif",1999,2037-1999,friends];
console.log(saif);

// Basic array methoths in js


// add element

// start with friends=['saif','ali','jamel']
// *** push return the length of the Array
friends.push('jalel');//add to the end of the array
console.log(friends);//(4) ['saif', 'ali', 'adel', 'jalel']

// *** unshift return the length of the Array
friends.unshift('kamel');//add to the start of the array
console.log(friends);//(5) ['kamel', 'saif', 'ali', 'adel', 'jalel']


// remove element

// *** pop return the removed element 
friends.pop();//remove element from the end of the array
console.log(friends);//(4) ['kamel', 'saif', 'ali', 'adel']

// *** shift return the removed element 
friends.shift();//remove element from the start of the array
console.log(friends);//(3) ['saif', 'ali', 'adel']

// ather methods

// friends now is ['saif', 'ali', 'adel']

console.log(friends.indexOf('ali'))// 1
console.log(friends.indexOf('manel'))// -1

// *** includes check for strict equality (===)
console.log(friends.includes("salim"))//false
console.log(friends.includes("ali"))//true

