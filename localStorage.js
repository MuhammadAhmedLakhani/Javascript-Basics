
// *)local storage is common space for storing data
// *)data saved in format of object(key and value)
// *)you can control local storage with javascript

// *)data is stored in inside tab and browser(tab specific)
// *)limit is 10 mb
// *)accepts data in string type only in value
// *)"localStorage" objectis present in window which is global object
// *)localStorage has methods in prototype like:
// getItems, setItems , removeItems, clear etc
// 


// --v1

// console.log(localStorage)

// localStorage.setItem("email","adad@gmail.com") //setting new key-value

// console.log(localStorage)

// console.log(localStorage.getItem("email"))

// //receiving data from local storage


// localStorage.removeItem("email")

// console.log(localStorage)

// //removing key from local storage


//---v2 (setting object)

// since localStorage only stores in string we need to convert object into dtring

//JSAON.stringify method is used to convert object into strings

//for making it again as object when want to access the object JSON.parse is needed to convert object from string to object


var obj = {
    name :"Ghous"
}

localStorage.setItem("student",JSON.stringify(obj))

//setting object in local storage

console.log(localStorage)


console.log(localStorage.getItem("student"))

//here the object received but in string type


console.log(JSON.parse(localStorage.getItem("student")))

//CONVERTS THE OBJECT FROM STRING to object 




