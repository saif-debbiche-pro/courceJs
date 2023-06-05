const age =18;

// strict comparaison bacause it didnt perform type coercion 
// =>true id both values are same type and same content 
if(age===18) console.log('You just became an adult !');

// perform type coercion 
// =>true if values are same 
// ***avoid to use this as mutch as possible
if(age==18) console.log('You just became an adult !');

