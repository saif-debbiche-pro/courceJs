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