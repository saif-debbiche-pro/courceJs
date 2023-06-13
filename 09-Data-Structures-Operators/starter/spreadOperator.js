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
  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
  }

};
// we use the spread operator whenever we would otherwise write multiple values seperated by commas
// it is usefull when we create arrays and when we need to pass elements to a function
// spread operator work on all iterables (arrays,strings,maps,sets) but not objects
// spread operator
// without spread
const arr=[7,8,9];
const badNewArr=[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);//(5) [1, 2, 7, 8, 9]

// with spread
const newArr=[1,2,...arr];
console.log(newArr);//(5) [1, 2, 7, 8, 9]


console.log(...newArr);//1 2 7 8 9
// same as
console.log(1, 2, 7, 8, 9);//1 2 7 8 9

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);//(4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// copy array
const mainMenuCopy=[...restaurant.mainMenu];
// Join 2 arrays
const menu=[...restaurant.starterMenu,...restaurant.mainMenu]

// exemples of Strings
const str='Saif';
const letters=[...str,' ','S.'];
console.log(letters);//(6) ['S', 'a', 'i', 'f', ' ', 'S.']
// console.log(`${...str} Debbiche`); //not going to work because ${...str} does not expect values seperated by ,

// with function parametrs
const ingredients=['a','b','c']
restaurant.orderPasta(...ingredients);

// objects (scine 2018)
const newRestaurant={...restaurant,founder:"debbiche",foundedIn:2008}

const restaurantCopy={...restaurant};