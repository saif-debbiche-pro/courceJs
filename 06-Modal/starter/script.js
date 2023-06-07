'use strict';

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModal=document.querySelector(".close-modal");
// ***if we select multiple elements that have the same class with
// the querySelector it will select only the first one
// so to select multiple elements we use querySelectorAll 
const btnShowModal=document.querySelectorAll(".show-modal");

for(let i=0 ;i<btnShowModal.length ;i++){
    btnShowModal[i].addEventListener("click",function(){
        // we use the classList property to ad and remove classes
        // if we need to remove multiple classes we can just pass them in 
        // argements exemple remove("class1","class2"...)
       modal.classList.remove("hidden"); 
       overlay.classList.remove("hidden"); 
    })
}
btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);
function closeModal(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden"); 
}

// now we want to lesson to esc keyword event wich is a global event
// so we add the event listener to the document
// there is 3 events to listen to the keyboard
// keydown
// keyup
// keypress

document.addEventListener("keydown",function(e){
    if(!modal.classList.contains("hidden") && e.key.toLowerCase()==="escape" ){
        closeModal()
    } 
})