'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza:function(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};

// the rest used in destructuring and with functions
// 1)destructuring
// the rest operator used in destructuring to collect the rest elements in an array or object

// the rest operator has the same syntaxe as the spread operator but does the oposite 
// the spread operator unpackan array (or object ) while rest pack elements to an array ot to an object
//the spread operator is used when we would otherwize write values seperated by , 
//the rest pattern is used when we would otherwize write variable names seperated by , 
// spread (RIGHT side of = )
const arr=["lazania","chiken",...restaurant.mainMenu];

// rest (LEFT side of = )
const [a,b,...others]=[1,2,3,4,5]
console.log(a,b,others);//1 2 (3) [3, 4, 5]

const [pizza,,risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu]
// the rest collect all other elements after the last element selected it didnt incluede any skipped elements (the rest elements)
// it should be always the last element
// it also gonna be only one rest operator in any destructuring assignment
console.log(pizza,risotto,otherFood);//Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects

const {sat,...weekdays}=restaurant.openingHours;
console.log(sat,weekdays);//{open: 0, close: 24} {thu: {…}, fri: {…}}


// functions (rest parametters)
// does the oposite of spread in functions

const add=function(...numbres){//we use rest here to pack the parameters  (23 , 5 , 8)=>(numbres= [23 , 5 , 8] ) 
  console.log(numbres);
  let sum=0;
  if(numbres.length===0) return sum
  for(let i=0;i<numbres.length;i++) sum+=numbres[i];
  return sum;
}
add(1,2,3);//(3) [1, 2, 3]
add(1,2);//(2) [1, 2]
add(1,2,3,4,5,6,7);//(7) [1, 2, 3, 4, 5, 6, 7]

console.log(add(1,2,3,4,5,6,7));// 28
const arrNumbres=[23,5,8];
console.log(add(...arrNumbres));//we use spread here to spread argements ([23 , 5 , 8]) => (23 , 5 , 8)

restaurant.orderPizza('mushroom','onion','olives','spinach');//mushroom (3) ['onion', 'olives', 'spinach']

restaurant.orderPizza('mushroom');//mushroom []