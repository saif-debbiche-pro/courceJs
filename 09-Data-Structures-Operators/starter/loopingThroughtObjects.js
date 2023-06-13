'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours= {
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
}
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  orderPizza:function(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};
// Object.keys return an array contains the keys of the object
const properties=Object.keys(openingHours);



for(const day of properties){
    console.log(day);//thu fri sat
}

// Object.values return an array of the values of an object
const values=Object.values(openingHours);
console.log(values);

// Object.entries return an array with each element is an array containing the key and the value of that element in the original array
const entries=Object.entries(openingHours)
console.log(entries);
for (const x of entries){
  const [day,{open,close}]=x;

  console.log(`On ${day} we open at ${open} and colose at ${close}`);
}