'use strict'

console.log(this);//the window object

const calcAge=function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
}
calcAge();//this = undefined


const calcAgeArrow=(birthYear)=>{
    console.log(2037-birthYear);
    console.log(this);
}
calcAgeArrow();//this = window =>because arrow function does not have a this its own keyword so it takes the this keyword of
               // its parent scope => this keyword of the global scope witch is window

const saif={
            birthYear:1999,
            calcAge:function(){
                console.log(this);            
            }
        }
saif.calcAge();//this=saif

const ali={
    year:2017
}
ali.calcAge=saif.calcAge;
ali.calcAge();

const f=saif.calcAge;
f();//this=undefined

// when we should and evoid usinf this keyword
const jamel={
    fistName:"jamel",
    birthYear:1999,
    calcAge:function(){
        console.log(this);
        const isMillenial=function(){
            console.log(this.birthYear>=1981&&this.birthYear<=1996);
        }
        isMillenial();

    },
    greet:()=>console.log(`Hey ${this.firstName}`)
}
jamel.greet();//hey undefined (because arrow function didnt take there own this they take the this of the parent scope in this case window )
// so as a best practice neve ever use arrow function as a methods
jamel.calcAge()//error : can not read property year of undefined ,the better solotion of this is to use an arrow function

