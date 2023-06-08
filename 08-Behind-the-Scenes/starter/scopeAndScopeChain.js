
// ***dont forget in js when we talk about variables function are included because in js they are variables

// scope for function is the same as there variable envirement

// scoping :how our program's variables organized and accessed (where a variable live)
// lexical scoping:scoping is controlled by placement of function and blocks in the code
// scope :space or envirement in witch a certain variable is declared (variable envirement for functions) the 
// global scope ,function scope,and block scope
// scope or variable:region of our code where a certain variable can be accessed
 
// there are 3 different scopes :
// 1)global scope (accessible everywhere):
 const var1="hello";
 const var2=5;
 const var3=[];
 function iCreateMyOwnScope(imAvailableInThisFunctionScoppe){
// 2)function scope = envirement variables for  functions:
    //  envirement variables
        // let,const and var declations
            const a=10; 
        // Functions
            const f1=function(){

            }
        // argements object(argements passed to that function)
            // just imAvailableInThisFunctionScoppe 
            console.log(imAvailableInThisFunctionScoppe);
 }

 
 if(var2==5){
    var imNotBlockScoped;//will be function scoped to the current function or to the global scope(in our case the global scope)
    // 3)block scope (starting with ES6 =>only variables declared with let and const accessible inside block(block scoped)) :
    const name="saif";
    const lastName="debbiche";
}

