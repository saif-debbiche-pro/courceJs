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


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const displayMovements=function(movements){
  containerMovements.innerHTML="";
  movements.forEach((mov,i) => {
    
    // const movRow=document.createElement('div');
    // movRow.classList.add("movements__row");
    // const movType=document.createElement('div');
    // movType.classList.add("movements__type");
    // if(mov<0){
    //   movType.classList.add("movements__type--withdrawal");
    //   movType.textContent=i+" withdrawal";
    // }else{
    //   movType.classList.add("movements__type--deposit");
    //   movType.textContent=i+" deposit";
    // }
    // movRow.append(movType);

    // const movDate=document.createElement('div');
    // movDate.classList.add("movements__date");
    // movDate.textContent="24/01/2037";
    // movRow.append(movDate);
    
    // const movValue=document.createElement('div');
    // movValue.classList.add("movements__value");
    // movValue.textContent=mov;
    // movRow.append(movValue);

    // containerMovements.append(movRow);
    // OR with template literal
    const html=` <div class="movements__row">
    <div class="movements__type movements__type--${mov<0?'withdrawal':'deposit'}">
       ${i+1} ${mov<0?'withdrawal':'deposit'}
    </div>
    <div class="movements__date">24/01/2037</div>
    <div class="movements__value">${mov}</div>
  </div>
  </div>`
  containerMovements.insertAdjacentHTML('afterbegin',html);
    
  });
}
displayMovements(account1.movements);

// map 
const user ='Steven Thomas Williams';
const mkUserName=function(accounts){4

   accounts.forEach((acc)=>{
    
    const userWords=acc.owner.split(' ');
    acc.username=userWords.map((word)=>word.at(0).toLowerCase()).join('');
  })
  
}
mkUserName(accounts);
console.log(accounts);