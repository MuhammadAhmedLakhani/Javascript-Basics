
//Date is a constructor function whcih gives the date object


// *c v-1

// var date = new Date(); //gives todays date object
// // var days = ["sun","mon","tues","wed","thur","fri","sat"]
// console.log(days[date.getDay()]);

// console.log(date.getDate())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// *c v-2

var date = new Date(); 

var total = date.getTime() // gives milliseconds from 1 jan 1970 till today

var birthDate = new Date("21 sep 1999");  //gives Date object of specified date 


var dif = total - birthDate.getTime();

var birtYears = dif / 1000 / 60 / 60 / 24 / 30 / 12 
console.log(Math.round(birtYears))
