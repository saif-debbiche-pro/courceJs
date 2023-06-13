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
const rest1={
  name:'Capri',
  numGuests:20
};
const rest2={
  name:'La Piazza',
  owner:'Giovanni Rossi',
};
// OR assignment operator

rest1.numGuests=rest1.numGuests||10;
rest2.numGuests=rest2.numGuests||10;
// or we can do it like this
rest1.numGuests||=10;
rest2.numGuests||=10;

// same problem with 0 so we fix it like this(with the nullish assignement operator)
rest1.numGuests??=10;
rest2.numGuests??=10;

// AND assignment operator
rest2.owner=rest2.owner && "<ANONYMOUS>";
rest2.owner&&="<ANONYMOUS>";