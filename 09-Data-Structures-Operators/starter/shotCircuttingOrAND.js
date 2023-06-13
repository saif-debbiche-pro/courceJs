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
// short circuting ( && and || )
// Use Any data type ,return any data type,shot-circutting
// OR operator
// shot-circutting for or operator it means that the first truthy value will be returned other values will not be evaluated
console.log(3 || "saif");// 3
console.log('' || "saif");// saif
console.log(true || 0);// 3 true
console.log(undefined || null);// null

console.log(undefined||0 ||''||'Hello'||23||null) //hello

const gest1=restaurant.numGests==0 || restaurant.numGests?restaurant.numGests:10;
const gests1=restaurant.numGests==0||restaurant.numGests||10;

// nullish coalescing operator ??
restaurant.numGests=0;
const gestCorrect1=restaurant.numGests || 10;
console.log(gestCorrect1);// 10 because 0 is falsy value
const gestCorrect2=restaurant.numGests ?? 10;
console.log(gestCorrect2);//0 because ?? correct that issue(same as || but with nullish values (null,undefined)  not falsy values ('',0..))

// AND operator
// shot-circutting for AND operator it is the oposite of or => the first falsy value will be returned other values will not be evaluated
console.log(0 && 'saif')//0
console.log(7 && 'saif')//saif
console.log(7 && 'saif'&&null&&[])//null
if(restaurant.orderPizza){
  restaurant.orderPizza("mushrooms","spinach");
}
restaurant.orderPizza &&  restaurant.orderPizza("mushrooms","spinach");

