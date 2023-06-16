'use strict';

// 1)default parametres (flightNum,numPassengers=0,price=numPassengers*15)
// 2)skip argements when colling functions (('LH123',undefined,10))
// 3)passing argements  (values VS references)
// 4)first-class and higher-order functions 
// 5)this keyword (call,apply and bind(with is more important that call and aply))
// 6) Immediatly invoked functions(functions run once and disappear)


// 1)default parametres
const bookings=[];

const createBooking=function(flightNum,numPassengers=0,price=numPassengers*15){
    const booking={
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');//{flightNum: 'LH123', numPassengers: 0, price: 0}
createBooking('LH123',12);//{flightNum: 'LH123', numPassengers: 12, price: 180}

// 2)skip argements when colling functions
createBooking('LH123',undefined,10);//{flightNum: 'LH123', numPassengers: 0, price: 10}

// 3)passing argements  (values VS r eferences)
const flight='LH234';
const saif={
    name:"saif debbiche",
    passport:123456789
}


const checkIn=function(flightNum,passenger){
    flightNum="LH999";
    passenger.name="Mr. "+passenger.name;

    if(passenger.passport===123456789){
        alert('check in');
    }else alert("wrong passport !")
}


// same as 
// const flightNum=flight
// const passenger=saif
checkIn(flight,saif);
console.log(flight);//LH234
console.log(saif);//{name: 'Mr. saif debbiche', passport: 123456789}

// 4)first-class and higher-order functions 
// first-class  
    // first-class functions means that functions are trieted as values(store them ,passe them to other functions ,return them ...)
    // function are just other type of objects
    // scine function are objects they have also some methods
// higher-order functions
    // a function that receives another function as an argement ,or return a new function or both
    // the higher-order functions will call the callback functions (callback functions are the functions that we pass them
    // as parametres to the higher-order functions)
// exemples
const oneWord=function(str){
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord=function(str){
const [first,...others]= str.split(' ');
return [first.toUpperCase(),...others].join(' ');
}

// Higher-order function
const transformer=function(str,fn){
    const strf='Transformed string is : '
    return strf+fn(str);
}
console.log(transformer('JavaScript is the best !',upperFirstWord));//JAVASCRIPT is the best !
console.log(transformer('JavaScript is the best !',oneWord));//Transformed string is : javascriptisthebest!

const high5=function(){
    console.log("Hi");
}
document.body.addEventListener("click",high5);

const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey=greet("Hey");
greeterHey("saif");//Hey saif
// OR
greet("Hey")("saif")//Hey saif

const greetArrow=(greeting)=>(name)=> console.log(`${greeting} ${name}`);

// 5)this keyword (call,apply and bind(with is more important that call and aply))

// preparing the example
const lufthansa={
    airline:'Ludthansa',
    iataCode:'LH',
    bookings:[],
    book(fligtNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${fligtNum}`)
        this.bookings.push({flight:`${this.iataCode}${fligtNum}`,name})
    } 
} 
lufthansa.book(239,'saif debbiche');//saif debbiche booked a seat on Ludthansa flight LH239
lufthansa.book(635,'mouhamed debbiche');//mouhamed debbiche booked a seat on Ludthansa flight LH635
console.log(lufthansa);//{airline: 'Ludthansa', iataCode: 'LH', bookings: Array(2), book: ƒ}
const eurowings={
    name:'Eurowings',
    iataCode:"EW",
    bookings:[]
}
const book =lufthansa.book;

// book(23,'jamel salem'); //error because this=undefined
// how to tell js explecitly what the this key word should be when calling a function
// 1)with call method
book.call(eurowings,23,"saif debbiche");//this = eurowings 
console.log(eurowings);//{name: 'Eurowings', iataCode: 'EW', bookings: Array(1)}

book.call(lufthansa,234,"jalel hamed");//this = lufthansa 
console.log(lufthansa);//{airline: 'Ludthansa', iataCode: 'LH', bookings: Array(3), book: ƒ}
// 2)with aply method(does the same as call method but different syntaxe)
const flightData=[528,"kamel hamed"]
book.apply(eurowings,flightData)//this=eurowings
// not so used in modern js because we can use call and  if we have an array of argements we use the spread operator
book.call(eurowings,...flightData)//this=eurowings

// 3)bind method (will not call the function it will just return a new function with this keyword is the object that pass into it )

const bookEW=book.bind(eurowings);
bookEW("23","salim");
const bookLH=book.bind(lufthansa);
bookLH("25","adel");

// with the bind method we can also make the function that will the bind method returns
// it always called with some argements that we specified (predefined values to the function parametres)
// exemple 
const bookEW28=book.bind(eurowings,28)//bookEW23 will allways be called with 28 as fligtNum ;
bookEW28("salem");
bookEW28("kamel");

// with event listener
lufthansa.planes=300;
lufthansa.byPlane=function(){
    console.log(this);
    this.planes++;

    console.log(this.planes);

}
document.querySelector(".buy").addEventListener('click',lufthansa.byPlane)//this = the button(event listner)
document.querySelector(".buy").addEventListener('click',lufthansa.byPlane.bind(lufthansa));//this will always be lufthansa 

// Partail application (preset parametes)
const addTax=(rate,value)=>value+value*rate;
console.log(addTax(0.1,200))//220

const addVAT=addTax.bind(null,.23);//same as addVAT=value=>value+value*0.23
console.log(100);//123

const fact=function(rate ,value){
    if(rate||rate===0){
        console.log("f1");
        return value=>value+value*rate;
    }
    if(value||value===0){
        console.log("f2");
        console.log(`value : ${value} rate : ${rate}` );
        return rate=>value+value*rate;
    }
    
    console.log("f3");
    return (rate,value)=>value+value*rate;
}
const calcTax=fact(0.23);
console.log(calcTax(100));//123
console.log(calcTax(200));//246
const calcTax2=fact(null,100);
console.log(calcTax2(0.23));//123

// 6) Immediatly invoked functions (functions run once and disappear)

// IIFE (Immediatly Invoked Functions Expression)
(function (){
    console.log('this will never run again');
})()//this will never run again
(()=>console.log('this will never run again'))//this will never run again

{
    const isPrivate=23;
    var notPrivate=46;
}
// console.log(isPrivate)//error(undefined)
console.log(notPrivate)//46