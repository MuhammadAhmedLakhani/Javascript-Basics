

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



var s = new URLSearchParams(window.location.search)

console.log(s.get("a"))

//getting search param of key a
