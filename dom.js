//there is a global object in javascript called 'document'


// console.log(document.getElementById("main").innerText)

// document.getElementById("main").innerText = "Muhammad Ahmed"

//function can be called through html as well
// function display(){
//     console.log(document.getElementById("form").value)
//


//get/set value thorugh TagName metthod

//c:v1


//through NagName relevent tag across all document is stored in element variable



// var element = document.getElementsByTagName('div')

// console.log(element[2])

//get/set value thorugh TagName metthod

//c:v2

//selecting only relevant particular tag through TagName method with.ID method combination


var relevantElements  = document.getElementById("main") 

relevantElements = relevantElements.getElementsByTagName('div')

console.log(relevantElements[0])

