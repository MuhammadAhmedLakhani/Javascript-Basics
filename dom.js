//there is a global object in javascript called 'document'


// console.log(document.getElementById("main").innerText)

// document.getElementById("main").innerText = "Muhammad Ahmed"

//function can be called through html as well
// function display(){
//     console.log(document.getElementById("form").value)
//


//----get/set value thorugh TagName metthod

//c:v1


//through NagName relevent tag across all document is stored in element variable



// var element = document.getElementsByTagName('div')

// console.log(element[2])

//----get/set value thorugh TagName metthod

//c:v2

//selecting only relevant particular tag through TagName method with.ID method combination


// var relevantElements  = document.getElementById("main") 

// relevantElements = relevantElements.getElementsByTagName('div')

// console.log(relevantElements[0])


//-----selecting element by childNodes method

// c:v1

//when DOM manipulate it converts the entire document in tree like structure called Document Object Model where each element is organiae as a particular node
// any node can be acessed through childNodes method




// console.log(document.childNodes)  //getting child node of whole docuement

//c:v2


// console.log(document.childNodes[1].childNodes[2].childNodes[3])

//getiing div with id= "main through childNode combination"


//---junk artifacts

//junk artifacts are space before or  after start of tag use for formatting of code for readiblity purposes
// Junk artifacts are noisy and make loading of webpage slower for browseer

console.log(document.childNodes[1].childNodes[1])

//displaying junk artifact '#text'
