'use strict'
// exemple of all what we have seen

// global scope (calcAge,firstName)
function calcAge(birthYear){
     // parent scopes the global scope(calcAge,firstName)
     console.log(firstName);//saif
    // calc age function scope (age,printAge)
    const age=2037-birthYear;
    function printAge(){
        // grand parent scope :the global scope(calcAge,firstName)
        // parent scope : calc age function scope(age,printAge)
        // printAge scope (output)
        const output =`${firstName} You are ${age} , born in ${birthYear}`;
        console.log(output);//saif You are 38 , born in 1999
        if(birthYear>=1981 && birthYear<=1996){
            var millenial=true;
            const str = `Oh , and you're a millenial,${firstName}`;
            console.log(str);
        }else{
            const str = `Oh , and you're not a millenial,${firstName}`;
            console.log(str);//Oh , and you're not a millenial,saif
        }
        // console.log(str) => error
        console.log(millenial); //true
    }
    printAge();
   
    return age;
}

const firstName="saif";
calcAge(1999);