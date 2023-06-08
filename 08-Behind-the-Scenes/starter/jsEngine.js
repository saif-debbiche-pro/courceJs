'use strict';
// the engine contain the call stack and the heap memory 
// javascript engine is simply a computer programme that executr js code 
// every browser has his own js engine(google ,node ->v8 engine)
// compilation :the entire source code is converted to machine code before execution
// interpretation :interpter runs through the source code and executes it line by line
// js is not longer interpreted language 
// it is now a mix of interpretation and compilation (just-in-time compilation)=>compile all the code to machine code 
// all at ones and then execute it right a way
// parsing ,compilation  and optimization happen in a diffirent threads in the negine that we have no access to them 
// so our code execute in a single seperate thread