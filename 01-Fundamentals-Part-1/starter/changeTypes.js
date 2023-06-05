//type conversion (when we manualy change convert from one type to an other)
const inputYear='1991';
console.log(inputYear+18);// 199118
// we can use Number to convert String to Number
console.log(Number(inputYear)+18)//2009
// if we try with a string that can not be converted to number we get NaN
// *** we get NaN each time an operation with numbers fails to result a Number
console.log(Number("saif"))//NaN =>invalid number

// we can use String to convert Number to String
console.log(String(23));



//type coercion (when js automaticly conver ecemple when we concat a string with a number)
// + operator with String and number will result a String
console.log("I'am "+23+" years old")
// - operator with String and number or 2 Strings will result a Number
console.log("23"-10-"3") // 10
// * operator with String and number or 2 Strings will result a Number
console.log("23"*"2") // 46
// / operator with String and number or 2 Strings will result a Number
console.log("46"/"2") // 23

// exemples 
let n='1'+1;
n=n-1;
console.log(n);// 10
console.log('10'-'4'-'3'-2+'5')// '15'
