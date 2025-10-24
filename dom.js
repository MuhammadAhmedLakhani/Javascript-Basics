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

// var main = document.getElementById("main")
// console.log(main.hasAttribute("class"))

//return true in thsi example


//---getAttribute method 

//gives the value of a particular attribute which can be altered dynamically through setAttribute method


// var main  =  document.getElementById("main")

// var id = main.getAttribute("id") ;

// console.log(id)

//--setAttribute method
//it sets the particular attribute 
//it require two value, one is attribute name and second is its value

// var main =  document.getElementById("main")

// main.setAttribute("id","newID")

// console.log(main)

//one warning here that it set the attribute from previous value as well mean its not add new value but remove previous value and if you want to add both previou and new then pass both ones


//---attributes method
//gives the list of all attributes of targeted element
//since result is an array which can be indexed for a partular value

// var main = document.getElementById("main");

// console.log(main.attributes[1])


//---createElement method

//it is use for creating html elements through javascript

// var div = document.createElement("div")

// console.log(div)


//---appendChild method

//the html element created through createElement method is apty and to add content inside it we need this method

//it applies to parent element and child elelment is passed in arguments



// var div = document.createElement("div")
// var h1 = document.createElement("h1")

// div.appendChild(h1)
// console.log(div)


//---createTextNode method
//it is use for creating text node to add text inside newly created
//html tag like paragrapgh

// var p = document.createElement("p")

// var text = document.createTextNode('paragrapgh text added dynamically through javascript')


// p.appendChild(text)

// console.log(p)

//---passing of HTML throught javascript

//c:v1


// var div = document.createElement("div");

// div.setAttribute("id","main");
// div.setAttribute("class","c1");
// var childDiv = document.createElement("div") 

// childDiv.setAttribute("id","child")

// div.appendChild(childDiv)

// var h1 = document.createElement("h1")

// var h1Text = document.createTextNode("Hello World")

// h1.appendChild(h1Text)



// var h2 = document.createElement("h2")

// var h2Text = document.createTextNode("Good Morning")

// h2.appendChild(h2Text)

// childDiv.appendChild(h1)
// childDiv.appendChild(h2)

// var childDiv1 = document.createElement("div")
// var textDiv1  = document.createTextNode("Good Night")

// childDiv1.appendChild(textDiv1)
// div.appendChild(childDiv1)

// console.log(div)

// //replacing harcode html with this newly created with help of javascript


// var main = document.getElementById("main")

// main.appendChild(div)     // replacing dynamically


// ---passing of HTML throught javascript

//the previous method was too long and old way
//using backticks -> `` it  is easy to add html through Javacript
//c:v2


var div = document.createElement("div")

div.innerHTML = `<div id="main" class="c1">
    <div id="child"><h1>Hello World</h1>
        <h2>Hello Muslim World</h2></div>
    <div>
        Good Night
    </div>

</div>`


var main = document.getElementById("main")

main.appendChild(div)










