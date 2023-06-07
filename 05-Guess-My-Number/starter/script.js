'use strict';
// to select element from the page in js
console.log(document.querySelector(".message"));

// to get text from an element  we use textContent
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent="correct number";
// document.querySelector(".number").textContent=13;
document.querySelector(".score").textContent=10;

// to get value from input field we use value
document.querySelector(".guess").value=23;



function getRandomNumber(min,max){
    return Math.floor(Math.random()*max+min+1);
}









let score =20;
const highScore=0;
const start=true;
const theNumber=getRandomNumber(0,15);


const input=document.querySelector(".guess");
const btnCheck=document.querySelector(".check");
const scoreSpan=document.querySelector(".score");
const highScoreSpan=document.querySelector(".highscore");
const messageP=document.querySelector(".message");
const numberLbl=document.querySelector(".number")


// to make js interract with events (mouse click,mouse mouving,...)key pressin the page we need to use a eventListener 
btnCheck.addEventListener('click',function(e){
    if(Number(input.value)===theNumber){

        messageP.textContent="good you get the right answer !"
        scoreSpan.textContent=0;
        numberLbl.textContent=theNumber;
        // to change the style 
        // *** all these styles are inline styles 
        document.querySelector("body").style.backgroundColor="green";
        // always we pass strings as values 
        numberLbl.style.width="30rem";


        if(Number(highScoreSpan.textContent)<score){
            highScoreSpan.textContent=score;
        }

    }else{
        score--;
        scoreSpan.textContent=score;
        if(Number(input.value)>theNumber){
            messageP.textContent="to Hight"
        }
        
        if(Number(input.value)<theNumber){
            messageP.textContent="to Low"
        }
    }

})
