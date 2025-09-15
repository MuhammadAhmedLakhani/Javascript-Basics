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

 var count = 0;
function abc() {
    for(var i = 0; i < 5; i++) {
        console.log(count++)  //post increment
    }
}

abc()
abc()
abc()

//output will be numbers range from 0-14 


