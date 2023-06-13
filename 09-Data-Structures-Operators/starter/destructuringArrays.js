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

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  }

};

// without destructuring
const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];
// with destructuring
const [x,y,z]=arr;
console.log(x,y,z);//2 3 4


const [first , second]=restaurant.categories;
console.log(first , second);//Italian Pizzeria
const [first1 , , third]=restaurant.categories;
console.log(first1 , third);//Italian Vegetarian

// if we want to switch variables in array
let [main,secondary]=restaurant.categories;

[secondary,main]=[main,secondary];
console.log(main,secondary);//Pizzeria Italian


console.log(restaurant.order(2,0));//(2) ['Garlic Bread', 'Pizza']
// receve 2 return values from a function
const [starter,paincipal]=restaurant.order(2,0);
console.log(starter,paincipal);//Garlic Bread Pizza
// destructuring nested arrays
const nested=[2,4,[5,6]];
// const [i,,j]=nested;
// console.log(i,j);//i=2 j=(2) [5, 6]
const [i,,[j,k]]=nested;
console.log(i,j,k)//2 5 6

// default values
const [p,q,r]=[8,9];
console.log(p,q,r);//8 9 undefined
const [w=1,n=1,v=1]=[8,9];
console.log(w,n,v);//8 9 1