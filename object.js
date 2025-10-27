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

function todo(){
    console.log(this)
}


todo()  //function is called globlally


