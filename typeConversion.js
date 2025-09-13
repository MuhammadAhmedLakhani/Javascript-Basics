//---string datatype to number conversion

//parseInt() method
// removes decimal number and convert from string to number datatype

// console.log(parseInt("23.34343"))

// //parseFloat() method
// //Does not removes decimal number and convert from string to number datatype

// console.log(parseFloat("23.34343"))

// //Number() method
// //doesnot removes decimal number and convert from string to number datatype and it is the recommended choice for string conversion

// console.log(parseFloat("63.58343")) 



//------Number data type to string conversion

// console.log(typeof(3.142.toString()))

//----toFixed() method
//round off when above .5 value and ignore if below .5
// you can also control num of decimal places want to show

// var num = 3.2141924;

// console.log(num.toFixed())     //ignoring decimals

// var num = 7.5322141924;

// console.log(num.toFixed())     //rounding decimals to give answer = 8

var num = 4.6893232;

console.log(num.toFixed(2)); //show result in 2 decimal places
