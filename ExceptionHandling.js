
//try block trys to run the program inside and looks for errors
//if error comes as expected the error will be catched in catch block




// console.log("Hello")
// console.lof("Hi")
// console.log("Hey")


//error in line 9 causing crash of program and no longer runs afterwords

//try catch block solve this issue\

//-try-catch in action

// try block is incomplete without catch block
//if try run and receives error error is saved in err inside catch which can be handeled

// console.log("Hello")

// try{
//     console.lof("Hi")

// }catch(err){
//     console.log(err)
// }
// console.log("Hye")



//---throw

//throw let us place other errors related to validation for instance to be placed inside catch block
//this can be useful if you style your error through sweat alert 
//inorder to not write more code again and again throw is placed inside try catch blcok



var name = "";
try{

    if( name === ""){
        throw "Please enter your name"
    }

}catch(err){
    console.log(err)
}
