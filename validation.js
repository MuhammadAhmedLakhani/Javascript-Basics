

// --trim method

//we will need to use trim method to avoid extra space from user counted as value and dodge the validation

//trim removes white space before and after the content 





function getValue() {
    
    var input = document.getElementById("input")
    var name = input.value.trim()

    //validation basic

    if(name.length === 0){
        console.log("please enter name correctly")
    }else{

        console.log(name)
    }

    input.value = ""
}




