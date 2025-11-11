

// --trim method

//we will need to use trim method to avoid extra space from user counted as value and dodge the validation

//trim removes white space before and after the content 





function getValue() {

    var input = document.getElementById("input")
    var name = input.value.trim()
    var input1 = document.getElementById("input1")
    var email = input1.value.trim()
    var input2 = document.getElementById("input2")
    var number = input2.value.trim()
    var choices = document.getElementsByName("city")
    var checkFlag = false;
    //radio validation

    for(var i = 0; i < choices.length; i++) {
        if(choices[i].checked === true ){
            checkFlag = true
        }
    }

    //validation basic

    if (name.length === 0) {
        console.log("please enter name correctly")

    }else if (email.length === 0) {
        console.log("please entre email correctly")
    }
    else if (number.length === 0) {
        console.log("please entre number correctly")
    }
    else if (!(emailRegex.test(email))) {
        console.log('Email is not in right formate')

    }
    else if (checkFlag === false ) {
        console.log('Radio button not checked')

    }
    else if (!(pakPhoneNumberRegex.test(number))) {
        console.log("num regex")
        console.log('Number is not in right formate')

    }
    else {

        console.log(name, "name")
        console.log(email, "email")
        console.log(number, "number")
    }

    input.value = ""
    input1.value = ""
    input2.value = ""

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

//--pak number regex

var pakPhoneNumberRegex = /^((\+92)|(0092)|(0))?(3)([0-6]{1})([0-9]{8})$/;


