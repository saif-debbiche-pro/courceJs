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


const displayMovements=function(movements,sort=false){
  containerMovements.innerHTML="";
  const movs=sort?movements.slice().sort((mov1,mov2)=>mov1-mov2):movements;
  movs.forEach((mov,i) => {
   


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
    <div class="movements__value">${mov}£</div>
  </div>
  </div>`
  containerMovements.insertAdjacentHTML('afterbegin',html);
    
  });
}



const calcDisplayBalance=function(acc){
  acc.balance=acc.movements.reduce((acc,curr)=>acc+=curr,0);
  labelBalance.textContent=`${acc.balance} EUR`;
  

}


const clacDisplaySummary=function(account){
  const incomes=account.movements.filter(mov=>mov>0).map(mov=>mov).reduce((acc,curr)=>acc+=curr,0);
  labelSumIn.textContent=`${incomes}£`;
  const out=Math.abs(account.movements.filter(mov=>mov<0).reduce((acc,curr)=>acc+=curr,0));
  labelSumOut.textContent=out;
  const interest=account.movements.filter(mov=>mov>0).map(deposit=>deposit*account.interestRate/100).filter(int=>int>=1).reduce((acc,int)=>acc+int);
  labelSumInterest.textContent=`${interest}£`;
}



// map 
const user ='Steven Thomas Williams';
const mkUserName=function(accounts){

   accounts.forEach((acc)=>{
    
    const userWords=acc.owner.split(' ');
    acc.username=userWords.map((word)=>word.at(0).toLowerCase()).join('');
  })
  
}
mkUserName(accounts);
console.log(accounts);

const updateUI=function(acc){
  
    // Display mouvement
    displayMovements(acc.movements);
    // Display balance
    calcDisplayBalance(acc);
    // Display summary
    clacDisplaySummary(acc);
}


// Event handler
let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    // Display UI and message
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;
    // clear input fields
    inputLoginUsername.value=inputLoginPin.value='';//because = operator start from right to left
    inputLoginPin.blur();
    // update UI
    updateUI(currentAccount);
  }
})
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const recieverAcc=accounts.find(acc=>acc.username===inputTransferTo.value);
  // clear input fields
  inputTransferAmount.value=inputTransferTo.value="";
  if(amount>0 &&recieverAcc&& currentAccount.balance>=amount&&recieverAcc?.username!==currentAccount.username){
  //  Doing the transfer
    recieverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    // update UI
    updateUI(currentAccount);
  }
   
})
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  if(amount>0&&currentAccount.movements.some(mov=>mov>=0.1*amount)){
    // add the movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value="";
})






btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(inputCloseUsername.value===currentAccount.username&&Number(inputClosePin.value)===currentAccount.pin){
    accounts.splice(accounts.findIndex(acc=>acc.firstname===currentAccount.firstname),1)
    // Hide UI
    containerApp.style.opacity=0;
  }
  inputCloseUsername.value=inputClosePin.value="";
})
let sortedState=false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sortedState);
  sortedState=!sortedState;
})


// Array.from
labelBalance.addEventListener('click',function(){
  // const movementsUI=Array.from(document.querySelectorAll('.movements__value'));
  // console.log(movementsUI);//(8) [div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value]
  // console.log(movementsUI.map(el=>Number(el.textContent.replace('£',''))));
  // OR
  const movementsUI=Array.from(document.querySelectorAll('.movements__value'),el=>Number(el.textContent.replace('£','')));
  console.log(movementsUI);//(8) [1300, 70, -130, -650, 3000, -400, 450, 200]

  // OR (in place of Array.from)

  const arr=[...document.querySelectorAll('.movements__value')]


})
