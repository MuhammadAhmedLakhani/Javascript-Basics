//for loops is use for iterations/repetations of part of code
//loop save time as no need to write repetitive code
//first code block is run when condition is true then increment/updation happens after code block has been run 
//when updation happens lopp started again
//repetations of lopp depend on updation , when no updation then loop ended

//variable initialization ,condition, updation
// for(i = 0; i < 5; i++){
//     console.log(i)        //loop body / code block
// }
// console.log(i);            //loop stops when i = 5 so answer is 5!


//break in loop

//break keyword end the  loop immediatly at the poin it applied


// for(i = 0; i < 5; i++){
//     console.log(i)
//     break                  //break keyword
// }
// console.log(i);





//reverse loop



// var word = prompt("Enter word");
// var reverse = "";
// for(i = (word.length - 1);i >= 0;i--){
//     console.log(word[i])
// }


//nested loop

//in example below console after lopp body will run only after the loop is executed fully as javascript runs line by line

// for(var i = 0;i < 5;i++){
//     console.log(i)
// }
// console.log("Test")


//the outer loop will not run again until inner loop completed
//outer loop will wait for inner loop  to complete its repeatations
//so that it can iterate itself afterwards

// for(var i = 0;i < 5;i++){
//     for(var j = 0;j < 5;j++){
//         console.log(i,j)
//     }
// }

//changing case 

// *c v-2
 
// var name = "aHmEd";

// console.log(name.toUpperCase());  //.toUpperCase method use for capitlizing strings

// console.log(name.toLowerCase())

var title = "muhammad gHous ahmed";
var result = "";
for(var i = 0;i < title.length;i++){
    if(i === 0){
        result += title[i].toUpperCase()
    }
    else if(title[i] == " "){
        result += " " +title.slice(i + 1,i + 2).toUpperCase()
        i++
    }
    else{
        result += title[i].toLowerCase()
    }
}
console.log(result);
