//private window forms which is made and can be controlled by javascript
//open is a method found in global object(window)

//this will open a blank window of maximum size

//this window has its own DOM so can get and set  data

// --open method

//v-1

// var w = window.open()

// console.log(w)

//here w will be null if popup blocks from creating new window

//v-2

// you can also open particular url link in new window

// var newWindow = window.open()

// newWindow.location.assign("https://facebook.com")

//opening facebook on new window


//v-3

//you can also open local file path in seprate window


// lWindow = window.open("browser.html")

// //you can also define name of this specific window to avoid confusion


// nWindow = window.open("localStorage.html","localWindow")

//--setting style

// you can set basic stylying of new window as well
//linke width height and position(absolute)

var bWindow = open("browser.html","browser","width=600px,height=500px,left = 500px,top=200px ")



