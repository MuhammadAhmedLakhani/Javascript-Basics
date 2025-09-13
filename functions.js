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

var userInput = +prompt("enter your num")

function myString(num) {
    console.log(num.toString())
}

myString(userInput)


