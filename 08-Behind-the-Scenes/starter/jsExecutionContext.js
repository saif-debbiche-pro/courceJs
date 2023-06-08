'use strict'
// 1)the compilation completed
// 2)creation of global execution context(for top-level-code :not inside functions)

const name ="saif"; //top level code
const first=()=>{
    let a=1;
    const b=second();
    a=a+b;
    return a;
}

function second(){
    var c=2;
    return c;
}
// execution context : envirement in witch a piece of js is executed .
// Stores all the necessary information form some code to be executed.
// always there is a unique global context in witch all the top level code execute

// 3)execution the top level code

// 4)exection of functions and waiting for callbacks
// for each function call a execution context is created containing all the information 
// that is necessary to run exactly that function(same for methods)
// all those execution contexts make the call stack
// each execution context contains :
// 1)variable envirement
    // let,const and var declations
    // Functions
    // argements object(argements passed to that function)
// 2)scope chain
// 3)this keyword
// all these are creating during the creating phase of the execution context before executing it
// arrow function have not argements object and this key word 
// but they can use the argements object and the this keyword from theire closest regular function parent
// 1)variable envirement
    // let,const and var declations
    // Functions
    // ***argements of theire closest parent
// 2)scope chain
// 3)***this keyword of theire closest parent