'use strict'
// collection of unique values
// set accept an iterable (Array,String ...)
const nameSet=new Set("saif")//['s','a','i','f']
const ordersSet=new Set([
"Pasta",
"Pizza",
"Pizza",
"Risotto",
"Pasta",
"Pizza"
])
// when we pass any iterable that contain duplicate values to the set it just drop the duplicate values 
console.log(ordersSet); 
// sets are also iterables but a set still very different from an array
// 1) its elements are unique
// 2) the order of elements in a set is irrelevant (no indexes for a set) and we cant retrieve values from it like set[0],set[1]

// to get the size of a set(size NOT length)
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));//true
ordersSet.add("Garlic Bread");//"Garlic Bread" is added
ordersSet.add("Garlic Bread");//it is ignored because it is alrady in the set (no duplicate values)
ordersSet.delete("Risotto");
console.log(ordersSet);

// retrieve values from a set
 
for (const order of ordersSet) console.log(order);

// Example
const staff =['Waiter',"Chef",'Waiter','Manager','Chef','Waiter'];
const staffUnique=[...new Set(staff)];
console.log(staffUnique);//(3) ['Waiter', 'Chef', 'Manager']

console.log(new Set().size);