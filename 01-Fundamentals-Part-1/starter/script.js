let js='amazing';
if(js='amazing'){
  alert('JS is Fun')
}
console.log(40+8+23-10);


// variable devlaration

let firstName="Saif";

// ***js has dynamic typing (we do not have to manually define the data type because  
// js automatcly define the type of a value when it stored in a varable => the value 
// that has a type not the variable =>variables just store values taht have a type  )

//*** not a problem in js if we store an INT in avariable and than in the same variable we store a String
let hello ="hello";
hello =25;



//VALUES IN JS ( 2 TYPES )

//PRIMITEVS
// 1)Number
    let age =23; //or 23.0 (same in js we haven't floats and ints we have just numbers)
// 2)Strings
    let lastName="debbiche"; // or 'debbiche' (double or single quotes are allowd in js)
// 3)Boolean
    let isGood=true
// 4)Undefined
    let children //indefined is the value taking by variable that is not yes defined(empty value)
// 5)Null
    //also mean empty value
// 6)Symbol
    // /define a variable that is unique and can not change
// 7)BigInt
    //large integers than the number typr can hold 

// we can show the type of the value using typeof operator
console.log(typeof children);
//**** dont forget that the type of null return object (bug that never fixed)
console.log(typeof null);


//declaring variables in JS

//we use let for variables that we can change
let myAge =13;
age =31;

// we use cont to declare variables that should not change
const birthYear=1991;
//birthYear=1990; not allowd
// const job; not allowd
// *** we have to declare variables as const when we can and only with let if there is a 
// chance to change the variable in the future

// *** when we assign a variable without declaring it JS will not declare it
// in the current scope it will just add a property on the global object 
myName="saif";



// OPERATORS
// Arithmatic operators
const ageSaif =2037-1999;
console.log(ageSaif);
const ageAli =2037-2001;
// we can pass multiple parameters to the console.log function
console.log(ageAli,ageSaif);
// 2**2 it is 2 to the power of 2 = 2*2*2
console.log(ageAli*2,ageAli/10,2**2);

// concat strings 
console.log(firstName + ' '+lastName);

// dont forget the typeof operator

// Assignment operators
// x will be 15 because the + operrator is executed before the = operaor

let x=10+5;

x+=10; //x=x+10
x*=10; //x=x*10
x-=10; //x=x-10
x/=10; //x=x+10
x++; //x=x+1
x--; //x=x-1

// Comparison operators

console.log(age>ageAli);//>,<,<=,>=
console.log(age==ageAli);
console.log(age===ageAli);
const isFullAge=ageAli >= 18;

//  operator percedence order in js
let y,z;
y=z=10/2-5+15;// first / then - then + , then we start with  the right =  
