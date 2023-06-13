'use strict'

const openningHours= {
  ["mon"]: {
    open: 12,
    close: 22,
  },
  ["tus"]: {
    open: 11,
    close: 23,
  },
  ["sun"]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

// the big difference between objects and maps that maps thekey can have any type 
// and map are iterable !!!
 const rest=new Map();
 rest.set('name','Classico Italiano ');
 rest.set(1,"Firenze, Italy");
//  the set function return the map itself
 console.log(rest.set(2,"Lisbon, Portugal"));
  rest.set(2,"Lisbon, Portugal")
  .set('open',11)
  .set('close',23)
  .set(true,'We are open')
  .set(false,'We are closed')

  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time=21;
  rest.get(time>rest.get('open')&&time<rest.get('close'));

console.log(rest.has('catagories'));

rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
const arr=[1,2];
rest.set(arr,'test');
rest.get(arr)//tes

rest.set(document.querySelector('h1'),'heading');

// other way of populating new map
const question = new Map([
  ['question','what is the best programming language in the world'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ["correct",3],
  [true,'Correct'],
  [false,'try again'],
])
console.log(question);
// that array that we passed to the map (array of arrays is the same as the array returned by the entries method)
// so we can convert objects to map
const hoursMap=new Map(Object.entries(openningHours));
console.log(question.get('question'));
for(const [key,value] of question){
  if(typeof key == 'number' )console.log(`Answer ${key}: ${value}`);
}

const answer=2;
console.log(question.get(question.get("correct")===answer));

// convert map to an array 
console.log([...question]);
console.log([...question.entries()]);
// methods availabe in map like array
console.log([...question.keys()]);
console.log([...question.values()]);
