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
  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  orderDelivery:function({startIndex=1,mainIndex=0,address,time='20:00'}){
    `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
   
  }

};
// we need to provide the exactly same name of the object properties names
const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);//Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// if we need to change the property names that we declare
const {name:restaurantName,openingHours:hours,categories:tags}=restaurant;
console.log(restaurantName,hours,tags);
// default values
const {menu=[],starterMenu: starters = []}=restaurant;
console.log(menu,starters)//[] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a=111;
let b=999;
const obj={a:23,b:7,c:14};
// {a,b}=obj;error because when we start a line with { js expect a bloc of code
({a,b}=obj);//so we need to put them inside ()

// Nested objects
const {fri:{open:o,close:c}}=openingHours;
console.log(o,c);//11 23

restaurant.orderDelivery({
  time:'22:30',
  address:'Via del Sole,21',
  mainIndex:2,
  startIndex:2
})
restaurant.orderDelivery({
  address:'Via del Sole,21',
  startIndex:2
})