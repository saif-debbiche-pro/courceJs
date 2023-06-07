'use strict'

// *** the result of trying to access a property that does not exist in an object is undefined


const saif={
    firstName:'saif',
    lastName:"debbiche",
    age:2037-1999,
    job:"engineer",
    friends:['ali','kamel','adel']
}

console.log(saif);

console.log(saif.firstName);
console.log(saif['firstName']);


const nameKey="Name"
console.log(saif['first'+nameKey]);
console.log(saif['last'+nameKey]);


saif.location="Tunisia";
saif['twitter']="@saifdebbihe"

const saif2={
    firstName:'saif',
    lastName:"debbiche",
    age:2037-1999,
    job:"engineer",
    birthYear:1999,
    friends:['ali','kamel','adel'],
    // any function attached to an object called a method
    // calcAge:function(birthYear){
    //     return 2037-birthYear;

    // }

    // calcAge:function(){
    //     return 2037-this.birthYear;
        
    // }


    calcAge:function(birthYear){
        this.age= 2037-this.birthYear;
        return this.age;
    }
}
console.log(saif2.calcAge(1999));