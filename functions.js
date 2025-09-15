//functions are predefined code for a soecific task
//function can be used again and again by just calling them without writing same code again and again
//naming functions have same rules as of variable naming rules
//code inside function will not run until its called


// *c v-1

//keyword name round brackets curly brackets        -->function syntax
// function abc() {
//     console.log(new Date())
// }
// abc();           ///calling function by their name


// *c v-2

//function can be pass value as they can receives them 
//passing value(s) are called arguments
//variable(s) that recieves those passing values are called parameters

               //parameters (can be multiple with comma seprated)
// function myString(num) {
//     console.log(num.toString())
// }

        //arguments (can be multiple with comma seprated)
// myString(32);
// myString(69);


// *c v-3

//functions arguments can be passed through variable as well or through userprompt

// var userInput = +prompt("enter your num")

// function myString(num) {
//     console.log(num.toString())
// }

// myString(userInput)


// *c v-4

// inside functions you can write any code which will run only when function is called

// function abc () {
//     for(var i = 0; i < 5; i++){
//         console.log(i)
//     }
// }

// abc()
// abc()
// abc()

// //output will be numbers range from 0-4 three times

// var count = 0;
// function abc() {
//     for(var i = 0; i < 5; i++) {
//         count++
//         console.log(count)
//     }
// }

// abc()
// abc()
// abc()

//answer will be numbers range from 1-15 as function run 3 times

//  var count = 0;
// function abc() {
//     for(var i = 0; i < 5; i++) {
//         console.log(count++)  //post increment
//     }
// }

// abc()
// abc()
// abc()

//output will be numbers range from 0-14 


//*c v5
//function can pased another functiona as an argument as well


// function foo(notify) {
//     notify("Hello")
// }

// foo(alert);


//*c v6
//functions can be passed an entire array as well


// function abc(a) {
//     console.log(a)
// }


// var arr = ["smit"];

// abc(arr); 

// *c v7

//"return" keyword return vlaue from function

// function checkAttendence(student) {
//     var lastClass = [1234,4535,6677,9933]
//     if(lastClass.indexOf(student) !== -1) {
//         return "Present"
//     } else {
//         return "Absent"
//     }
// }

// console.log(checkAttendence(1234));
// console.log(checkAttendence(1274));
// console.log(checkAttendence(6677));
// console.log(checkAttendence(2933));


//*c v-8

var count = 1;
function foo() {
    for(var i = 0; i < 5; i++) {
        count++
        console.log(count)
        return count
    }
}

console.log(foo());

//output will be 2 and 2 as return halts the lopp imdeediatley just like break



