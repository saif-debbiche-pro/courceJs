'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays=["mon",'tue','wed','thu','fri','sat','sun'];
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // 1) ES6 enhanced object literal
  openningHours,
  // 2) ES6 enhanced function literal
 order(){
  console.log("new ES6 way of defining functions in objects")
 }

};

const openningHours= {
  // 3)ES6 computing property names
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

// optional chaining : only if mon exist (not a nullish value(undefined,null)) will continu for open 
// or it return undefined immediately
console.log(restaurant.openningHours.mon?.open)
console.log(restaurant.openningHours?.mon?.open)

// Exemple
for(const day of weekDays){
  console.log(day);
  const open=restaurant.openningHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`)
}

// Methods
console.log(restaurant.order?.() ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.() ?? 'Method does not exist');

// Arrays
const users=[
  {
    name:'saif',
    email:'saif@gmail.com'
  }
]
console.log(users[0]?.name ?? "User array empty ");