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

//c:v1

//junk artifacts are space before or  after start of tag use for formatting of code for readiblity purposes
// Junk artifacts are noisy and make loading of webpage slower for browseer

// console.log(document.childNodes[1].childNodes[1])

//displaying junk artifact '#text'


//----nodeType method 

//nodeType methos is use for findin whether a node is junk artifact or not
//if it return '1' it means not junk and if return '3' it means junk artifact


// var main = document.getElementById("main")

// console.log(main.childNodes[0].nodeType)

//---firstChild method


//it select immediate child of parent element

// console.log(document.childNodes[1].firstChild)


//---lastChild Method

//selects last child of parent node\



// var main = document.getElementById("main");

// console.log(main.childNodes[1].lastChild)

//accessing last child of first div of parent div with id = "main"



//---parentNode method

//acessing parent mode

// var child = document.getElementById("child");

// var parent = child.parentNode

// console.log(parent)

///geeting parent div with id main through method   


//---nodeName method

//it return name of element but in uppercase eg 'H1'

// var main = document.getElementById("main");

// element = main.childNodes[1].firstChild

// console.log(element.nodeName)

//return target element tag name

//---getting length of eleemnt

//.length gives length of targeted elements of docuement which is array if multiple as in this case

// var elements = document.getElementsByTagName("div")

// console.log(elements.length)


//---DOM Attributes
//html element attrbites can be setup with DOM attribites methods dynamically


//---hasAttribite method

//it returns true is given attribute is present

var main = document.getElementById("main")
console.log(main.hasAttribute("class"))

//return true in thsi example





//c:v1











