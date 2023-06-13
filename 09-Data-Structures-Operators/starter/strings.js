'use strict'
// Sammary :
    // 1)some basics (basics+methods(indexOf,lastIndexOf))
    // 2)slice method
    // 3)transform strings(toLowerCase,toUpperCase,trim)
    // 4)replacing (replace,replaceAll )
    // 5)Booleans methods(includes,startsWith)
    // 6)split method
    // 7)the join method (oposite of split)
    // 8)Padding (padStart,padEnd)
    // 9)Repeate 

//  1)some basics
const airline='TAP Air Portugal';
const plane='A320';
// Strings are primitive types (imposibal to mutate them) 
// Strings are etirable
console.log(plane[0]);//A
console.log(plane[1]);//3
console.log(plane[2]);//2
console.log('B737'[2]);//3
console.log(airline.length);//16
console.log(airline.indexOf('r'));//6
console.log(airline.lastIndexOf('r'));//10
// case sensetive
console.log(airline.indexOf('protogal'));//10

// 2)slice method

// start to extract at position 4
console.log(airline.slice(4));//Air Portugal
// always the length is (end-begin) , and the end index is not included
console.log(airline.slice(4,7));//Air

// selecting first word
console.log(airline.slice(0,airline.indexOf(" ")));//TAP
// selecting last word
console.log(airline.slice(airline.lastIndexOf(" ")+1));//Portugal


// extracting from the end

console.log(airline.slice(-2));//al
console.log(airline.slice(1,-1));//AP Air Portuga

const checkMiddleSeat=function(seat){
    return seat.slice(-1)==='B'|| seat.slice(-1)==='E';
}
console.log(checkMiddleSeat('11B'));

// 3)transform strings
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


// real exemples
function fixPassangerName(name){
    return name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase();
}
console.log(fixPassangerName("SAif"));//Saif
console.log(fixPassangerName("sAif"));//Saif

// comparring emails

const email='hello@saif.com';
const loginEmail='Hello@Saif.com\n';

const lowerEmail=loginEmail.toLowerCase();
const tromEmail=lowerEmail.trim();//delete spaces
console.log(tromEmail);
// or
console.log(loginEmail.toLowerCase().trim());

// replacing
const priceGB='288,50DT';
const priceUS=priceGB.replace("DT","$").replace(",",'.');
console.log(priceUS);//288.50$
const announcement ="All passengers come to boarding door 23,Boarding door 23";
console.log(announcement.replace('door',"gate").replace("door","gate"));//All passengers come to boarding gate 23,Boarding gate 23
// OR
console.log(announcement.replaceAll('door',"gate"));//All passengers come to boarding gate 23,Boarding gate 23

// Booleans
const plane2='A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));

// 6)split method
console.log('a+very+nice+string'.split('+'));//(4) ['a', 'very', 'nice', 'string']
console.log('saif debbiche'.split(' '));//(2) ['saif', 'debbiche']
const [firstName,lastName]='saif debbiche'.split(' ');
const name='Mr '+'saif debbiche'.split(' ')[0]+" "+'saif debbiche'.split(' ')[1].slice(0,1).toUpperCase()+'saif debbiche'.split(' ')[1].slice(1);
console.log(name);//Mr saif Debbiche

// the join method (oposite of split)
const newName=['Mr',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);//Mr saif DEBBICHE

const capitalizeName=function(name){
    const nameArr=name.split(' ');
    let newName='';
    for(const n of nameArr){
        newName+=n.slice(0,1).toUpperCase()+n.slice(1)+" ";
    }
    console.log(newName);
    return newName;
}
const passenger='saif debbiche ben mouhamed';
capitalizeName(passenger);//Saif Debbiche Ben Mouhamed 

// Padding
const message ="Go to gate 23!";
console.log(message.padStart(25,'+'));//+++++++++++Go to gate 23!
console.log(message.padStart(25,'+').padEnd(35,'+'));//+++++++++++Go to gate 23!++++++++++

const maskCredCard=function(number){
    const str=number + '';
    const last=str.slice(-4);
    return last.padStart(str.length,'*');

}
console.log(maskCredCard(432585455856965525));//**************5500
console.log(maskCredCard('25265155252235888'));//*************5888

// Repeate
const message2="Bad waether... All Departues Deplayed...";
console.log(message2.repeat(5));//Bad waether... All Departues Deplayed...Bad waether... All Departues Deplayed...Bad waether... All Departues Deplayed...Bad waether... All Departues Deplayed...Bad waether... All Departues Deplayed...
