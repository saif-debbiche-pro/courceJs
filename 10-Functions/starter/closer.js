'use strict'
// ***closer has priority that the scope chain
// example 1)
let f;
const g=function(){
    const a=23;
    f=function(){
        console.log(a*23);
    }
}
const h=function(){
    const b=777;
    f=function(){
        console.log(b*23);
    }

}
g();
f();//529
console.dir(f);//0: Closure (g) {a: 23}
// Re-assign f function
h();
f();//17871

console.dir(f);//0: Closure (h) {b: 23}

// example 2)

const boardPassengers=function(n,wait){
    const perGroup=n/3;
    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`There are 3 groups,each with ${perGroup} passengers`)
    },wait*1000)
    console.log(`Will start boarding in ${wait} seconds`);
}
// ***prouve that the closer has priority that the scope chain
const perGroup=1000;

boardPassengers(180,3);
