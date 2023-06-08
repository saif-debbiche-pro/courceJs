'use strict';



// application state
let current=0;
let player=1;
let scorePaley1=0;
let scorePaley2=0;

// values
const scorePlayer_1=document.querySelector("#score--0");
const scorePlayer_2=document.querySelector("#score--1");
const currentPlayer_1=document.querySelector("#current--0");
const currentPlayer_2=document.querySelector("#current--1");

// buttons

const btnNewGame=document.querySelector(".btn--new");
const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold");

// image

const dice=document.querySelector(".dice");

// sections
const player1Section=document.querySelector(".player--0");
const player2Section=document.querySelector(".player--1");


// reset game 
btnNewGame.addEventListener("click",resetGame);

// roll dice
btnRoll.addEventListener('click',function(){
    
    const number=getRandomNumber(6);
    console.log(`dice-${number}.png`);
    dice.src=`dice-${number}.png`
    
    if(number===1){
        current=0;
        changeGame()
    }else{
        current+=number;
        if(player===1){
            currentPlayer_1.textContent=current;
        }else{
            currentPlayer_2.textContent=current;
        }
    }


})

// hold score
btnHold.addEventListener("click",function(){
    changeGame();
})


// functions
// reset the game
function resetGame(){
    scorePlayer_1.textContent=0;
    scorePlayer_2.textContent=0;
    currentPlayer_1.textContent=0;
    currentPlayer_2.textContent=0;
    current=0;
    player=1;
    scorePaley1=0;
    scorePaley2=0;
}
// getRandomNumber
function getRandomNumber(max){
    return Math.trunc(Math.random()*max+1);
}

// change the role
function changeGame(){
    if(player===1){
        scorePaley1+=current;
        scorePlayer_1.textContent=scorePaley1;
        current=0;
        currentPlayer_1.textContent=current;
        player=2;
        player1Section.classList.remove("player--active")
        player2Section.classList.add("player--active")

    }else{
        scorePaley2+=current;
        scorePlayer_2.textContent=scorePaley2;
        current=0;
        currentPlayer_2.textContent=current;
        player=1;
        player2Section.classList.remove("player--active")
        player1Section.classList.add("player--active")

    }
}

