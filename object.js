///object is special data type used for storing multiple information of same subject/person
//its a combination of key value pair
//value can of any data type including array or even object as well(nested object)






// var student = {
//     name: "Ahmed",
//     email:"xyz@gmail.com",
//     number:123141342,
//     active:true,
//     classDays:["tues","thurs","fri"],
//     school:{
//         name: "SMIT"
//     }
// }

// console.log(student.name)    //acessing b=value
// console.log(student.school.name) //acessing nested value
// console.log(student.classDays[student.classDays.length - 1]) 
//accesiing array last value inside object



//adding values in object

//new properties can be added in object with assignment operator(=)


// student.rollNum = 34234;      //added new pair

// student.school.location = "Bahadurabad" //added in nested object

// student.classDays.push("sunday")   //added to array value

// console.log(student)


//----deleting key-value pair

//through use of 'delete' keyword use can remove particular 
// value and its  key



// delete student.school //whole school object deleted

// delete student.classDays // whole array removes
// console.log(student)  


//---in keyword

//it let to check whether a particular key is present in object or not
//return true if present and false if absent

//check only key not value (important)

// console.log("name" in student)  //return true

// console.log("lastname" in student)  //return false


//----functions in objects
//ther is slight difference in syntac as no name present as name is actually key of that funcrtion

//this function has acesiblity of all other key:value pairs of objects

//it helps in building logix which uses object other key value pair values

//part of OOP (abstraction)

// var student = {
//     name: "Ahmed",
//     email:"xyz@gmail.com",
//     number:123141342,
//     active:true,
//     classDays:["tues","thurs","fri"],
//     school:{
//         name: "SMIT"
//     },
//     getData:function (){
//         console.log(`${student.name} (${student.school.name})`)
//     }
// }


// student.getData()

//--this keyword


// 'this' keyword gives 'undefined' when called globally but instead
//of undefined it gives global object call windows

//as we normally use javascript in non strict mode it prevents undefines and replace it with window object

//window contain all information about every method builin or user generated about javascript


// console.log(this)  //window object printed

//but when inside function this console, it looks for from where the function is called
//if the function is called globally independent of anything
// it givrd undefined which is also handled by javascript in to window onject



// function todo(){
//     console.log(this)
// }


// todo()  //function is called globlally



//--functiosn inside object v2 (with this keyword)
//when function is called from object (not globally it )
//this keyword get the same object as value from which it is called

// var student = {
//     name: "Ahmed",
//     email:"xyz@gmail.com",
//     number:123141342,
//     active:true,
//     classDays:["tues","thurs","fri"],
//     school:{
//         name: "SMIT"
//     },
//     getData: function (){
//         console.log(this.school.name) //gives "smit"
//     }
// }




// student.getData()  //calling function through object



//--constractor function

//it helps in generating data efiiciently by not creatin objects again and again
//since data will contain same keys just values change , constractor function let us gives values and no need to repeat code again and again
//the first letter of constructor function is always capital 
//we create object rheough constructor function
//'new' keyword is added to make a object as without new when function called this will have a window object as value 
//constructor function make blueprint of object to be produced

// function MakeData(name,email,number){
//     this.name = name;
//     this.email = email;
//     this.number = number;
// }


// var data = [
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
// ]

// console.log(data)

//--factory function for making object
//its not an efficient way as making objects of same properties again and agin repeating
//you can add method in constructor function as well

// function student(name,email,number){
//     return {
//         name : name,
//         email : email,
//         number :number
//     }
// }


// console.log(student("Asad","asad@gmail.com",23232323))

// function MakeData(name,email,number){
//     this.name = name;
//     this.email = email;
//     this.number = number;
//     this.getInfo = function () {
//         return this.name
//     }
// }


// var data = [
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
// ]

// console.log(data)


//--prototype in objects


//the same method is part of every object generated
//which is not a good practice
//in prototype reference/copy is passed/shared  while regeneratig objects

//linke array methods are placed in prototype

//code gets optimized

// function MakeData(name,email,number){
//     this.name = name;
//     this.email = email;
//     this.number = number;
// }

// MakeData.prototype.getInfo = function (){
//     return this.name
// }





// var data = [
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
//     new MakeData("Ahmed","muhammadahmed@gmail.com",1232234232),
// ]

// console.log(data)


//--finding key in object

//when you give the key inside square brakets with object instead of finding that same key the key behaves link a variable which can be passed value from user


// var student = {
//     name:"Ahmed"
// }

// var n = "name"


// student[a]

// //'a' behaves like variable

//--for in loop

//"for key in obj" loop is loop for objects

//it runs and fetch the first key object inside key variable

//loop runs until object has keys



// var names = {
//     n1:"Ahmed",
//     n2:"Ahad",
//     n3:"Ghous"
// }


// for( key in names){
//     console.log(key)  //getting all keys of object
// }



// for(key in names) {
//     console.log(names[key]) //geeting all values
// }



//---objects by-reference

//In javascript object stores by reference(not by value)

//reference means that each object has an specific id which is storeed instead of value
//v-1

// var obj = {
//     name:"Ghous"
// }

// var obj1 = obj;

// var obj2 = obj1;
// obj2.name = "Ahmed"

// console.log(obj,obj1,obj2)


//v-2

function updateArr(arr){
    arr[1].name = "Ahmed"
    return arr
}

var obj = {
    name:"Ghous"
}

var result = updateArr([obj,obj,obj])

console.log(result)




