'use strict'

for(let i=1 ; i<=10 ;i++){
    console.log("lifting weights repetition ");
}

// looping through arrays :
const friends=['saif','ali','jamel']; 

for(let i=0 ; i<friends.length ;i++){
console.log(friends[i]);
}

// continue and break
// continue is used to pass one iteration and break used to pass through the hole loop


// console.log('-----ONLY STRINGS---------')
for(let i=0 ; i<friends.length ;i++){
    if(typeof friends[i]!=='string'){
        continue;
    }
    console.log(friends[i]);
    }

    // console.log('-----JUST UNTIL WE FOUND A NUMBER---------')
for(let i=0 ; i<friends.length ;i++){
    if(typeof friends[i]==='number'){
        break;
    }
    console.log(friends[i]);
    }


// looping backwords 

for(let i=friends.length-1;i>=0;i--){
    console.log(friends[i]);
}


// while loop in js
for(let i=1 ; i<=10 ;i++){
    console.log("lifting weights repetition ");
}


let i=0;

while( i<=10){
    console.log("lifting weights repetition "); 
    i++;
}