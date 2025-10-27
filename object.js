///object is special data type used for storing multiple information of same subject/person
//its a combination of key value pair
//value can of any data type including array or even object as well(nested object)






var student = {
    name: "Ahmed",
    email:"xyz@gmail.com",
    number:123141342,
    active:true,
    classDays:["tues","thurs","fri"],
    school:{
        name: "SMIT"
    }
}

// console.log(student.name)    //acessing b=value
// console.log(student.school.name) //acessing nested value
// console.log(student.classDays[student.classDays.length - 1]) 
//accesiing array last value inside object



//adding values in object

//new properties can be added in object with assignment operator(=)


student.rollNum = 34234;      //added new pair

student.school.location = "Bahadurabad" //added in nested object

student.classDays.push("sunday")   //added to array value

console.log(student)