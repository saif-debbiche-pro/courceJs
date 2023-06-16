'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES




/////////////////////////////////////////////////
// beside push ,unshift,pop,shift,includes,indexOf we have :
// 1) slice (like in Strings)
// 2) splice 
// 3)reverse (return the same array reversed => change theexisting array and return it)
// 4)CONCAT (return new array and does not mutate any array)
// 5)JOIN 
// 6)at 
// 7)forEach method (no break no continue),it work with (arrays ,maps,sets...)



// 1) slice (like in Strings)
let arr=['a','b','c','d','e'];
console.log(arr.slice(2))//Array(3) ["c" ,"d" ,"e"]
console.log(arr.slice(2,4))//4 is not included
console.log(arr.slice(-2))
console.log(arr.slice(1,-2))//from 1 => mines the last 2  
console.log(arr.slice())//make copy from the array like [...arr]

// 2) splice (same as slice but change the original array and the socond argement is how may element shoud be deleted not until when we delete)
console.log(arr.splice(2));//(3) ['c', 'd', 'e']
console.log(arr);//(2) ['a', 'b'] so arr loses the part that was extracted from element 2 until the end ('c','d','e')=>arr contain only('a','b")
console.log(arr.splice(-1));//remove the last element (same as pop but pop return the element 
// that we deleted but splice return an array containt that element)
// console.log(arr.pop());//the element that we deleted
console.log(arr);

// 3)reverse (return the same array reversed => change theexisting array and return it)
arr=['a','b','c','d','e'];
console.log(arr.reverse());//(5) ['e', 'd', 'c', 'b', 'a']
console.log(arr);//(5) ['e', 'd', 'c', 'b', 'a']

// 4)CONCAT (return new array and does not mutate any array)
const arr2=['g','h','d','f','q']
const letters=arr.concat(arr2);//same as [...arr,arr2]


// 5)JOIN 
console.log(letters.join(("-")));


// 6)at 
const arr3=[23,11,64];
console.log(arr[0]);
// same as
console.log(arr.at(0));

// if we want the last element of an array
console.log(arr[arr.length-1]);
// OR
console.log(arr.slice(-1)[0]);
// OR
console.log(arr.at(-1));


// 7)forEach method (no break no continue),it work with (arrays ,maps,sets...)
// with arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// for(const mov of movements){
for(const [i,mov] of movements.entries()){
  if(mov>0){
    console.log(`Movement ${i} You desposited ${mov}`);
  }else{
    console.log(`Movement ${i} You withdrew ${Math.abs(mov)}`);
  }
}
// OR
console.log("---------FOR EACH -------------------")
movements.forEach(function(mov,i,array){
  if(mov>0){
    console.log(`Movement ${i} You desposited ${mov}`);
  }else{
    console.log(`Movement ${i} You withdrew ${Math.abs(mov)}`);
  }
})
// function printHello(a){
//   console.log('hello'.repeat(a));
// }

// printHello(5,6);
// printHello(5);
// printHello("a","b");

// with maps


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}:${value}`)
});

// with sets

const currenciesUnique=new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value,key,set){
  console.log(`${key}:${value}`)//key=value(set can not have indexes)
})