
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

console.log(localStorage)

localStorage.setItem("email","adad@gmail.com") //setting new key-value

console.log(localStorage)

console.log(localStorage.getItem("email"))

//receiving data from local storage


localStorage.removeItem("email")

console.log(localStorage)

//removing key from local storage