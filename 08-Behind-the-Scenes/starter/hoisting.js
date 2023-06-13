'use strict'
// hoisting :make some variables accessible in the code before they are actualy declared
// before execution ,code scanned for variables declaration ,and for each variable ,a new property is created
// in the variable envirement object 


// hoisting variables
console.log(me);//undefined (variables declared with var are hoisting and there values be undefined)
//console.log(job);//error :cant access job before initialization (declared with let : in the TDZ(temporal dead zone))
//console.log(year);//error :cant access year before initialization(declared with const : in the TDZ)



var me="saif";
let job="engineere";
const year=1999;

// hoisting functions

console.log(addDecl(5,6));//11
console.log(addExpr(5,6));//error :cant access addExpr before initialization(declared with const : in the TDZ)
console.log(addArrow(5,6));//error :cant access addArrow before initialization(declared with const : in the TDZ)


function addDecl(a,b){
    return a+b;
}

const addExpr=function(){
    return a+b;
}
const addArrow=(a,b)=>a+b;

// mistakes can be done by using var 
if(!numProducts) deleteShoppingCart();//All products are deleted

var numProducts=10;

function deleteShoppingCart(){
    console.log('All products are deleted')
}


// one other small difference between var,const and let
// window is the global object for js in the browser
// var will add a property to the window object named x in this case
var x=1;
// let and const wil not add a property to the window object
let y=2;
var z=3;