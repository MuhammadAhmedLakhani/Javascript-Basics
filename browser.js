

//Inside 'window' global object there is alot of data related to
//browser
//like there is an object called 'location' which has values and methods

//'href' in location refers to url of page (in our case filepath)

// console.log(window.location.href)

//getting the file path in our case as href value

// window.location.href =  "https://facebook.com"


//replacing the href value to facebook url


// location = "https://instagram.com"

//short way to update location href
//note:you can acess location object directly as well


//--search parametrer are really important
//they are present in search key as string containing multiple parameters
//each parameter is saved as key-value par and seprated ny && 
//nonstructor function URLSearchParams is used to process hte string
//as it provides methods for further processing of search params
//in .get 



// var s = new URLSearchParams(window.location.search)

// console.log(s.get("a"))

// //getting search param of key a


//---location methods

//assign update the location to given one
// location.assign("https://www.facebook.com")

// //reload just reload the page
// //if true is passed it is hard reload (catche removed)
// //if false passed it is soft reload by default is is soft reload
// location.reload(true)

// //replace is same as assign but 
// //in replace it doesnot maintain history when backspace is pressed

// location.replace()





function localStorage () {
    location = "localStorage.html"

}


function forward () {
    history.forward()
}

// history.back()