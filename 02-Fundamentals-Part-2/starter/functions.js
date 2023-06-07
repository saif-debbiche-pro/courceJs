'use strict'

// FUNCTION DECLARATION AND FUNCTION EXPRESSION





// both are the same it all related on personall prefences


// the different between function declaration and function expression ou anonymos function is
// function that defined with function expression we can invoce them before the initialization place
// in the code (hosting process(not for now))
// exemple : we define logger lower in the code but we can call it here
logger()
// but with the expression will make an error
//calcAge2();


// *** the function that didnt return nothing preduce undefined
function logger(){
    console.log("my name is saif");
}


// calling, running,invoking the function
logger();
logger();
logger();



// ways of declaring function in js
// 1) function declaration (with the function keyword)
function fruitProcessor(apples,oranges){
    console.log(apples,oranges)
    const juise =`Juise with ${apples} appels and ${oranges} oranges`
    return juise;
}
const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);


// parameter is the birthYear that we put here(when making the function)
function calcAge1(birthYear){
    return 2037-birthYear;
}
// argement is the value that we put here(when calling the function)
const age = calcAge1(1991);


// 1) function expression or anonymos function (with the function keyword but without the name)
const calcAge2=function (birthYear){
    return 2037-birthYear;
}
const age2=calcAge2(1991);



// ARROW FUNCTION
// Here we start werring about the this keyword(but that for next session)



const calcAge3=birthYear=>2037-birthYear;

console.log(calcAge3(1991));


const yearsUntilRetirement=(birthYear,firstName)=>{
    const age=calcAge3(birthYear);
    const retirement=65-age;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetirement(1991,'Saif'));
console.log(yearsUntilRetirement(1991,'Ali'));