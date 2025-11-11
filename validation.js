

// --trim method

//we will need to use trim method to avoid extra space from user counted as value and dodge the validation

//trim removes white space before and after the content 





function getValue() {
    
    var input = document.getElementById("input")
    var name = input.value.trim()
    var input1 = document.getElementById("input1")
    var email = input1.value.trim()
    //validation basic

    if(name.length === 0){
        console.log("please enter name correctly")
        
    }else if(email.length === 0){
            console.log("please entre email correctly")
        }
        else if(!(emailRegex.test(email))){
            console.log('Email is not in right formate')

        }
    else{

        console.log(name,"name")
        console.log(email,"email")
    }

    input.value = ""
    input1.value = ""

}


//if i want to validate email as well there is issues

//email is not empty is ensured by use of trim but it is
//not correctly formatted (like @) it is not handled correctly

//regex is what the real solution for this

//regex is different for differenct purposes like email
//regex make sure that email is in right formate
//rgex is not string but an expression

var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// console.log(emailRegex.test("ahmed23123@gmail.com"))

//returns true if email is in right pattern





