//------Task 1 : heads and tails game 

// var toss = Math.ceil(Math.random() * 2)


// var player1 = +prompt("Wekcome Player1 please choose heads (press 1) or tails(press 2)")
// var player2;

// if(player1 === 1){
//     player2 = 2
// }
// else if(player1 === 2){
//     player2 = 1
// }
// else{
//     alert("please enter either 1 or 2 only")
// }

// if(toss === player1){
//     alert("Congragulations player1 you have won the toss!")
// }
// else if(toss === player2){
//     alert("Congragulations player2 you have won the toss!")
// }
// else{
//     alert("make sure your input are correct")
// }


//-----Task 2:Ramdom password generator


var capital = "OABCDEFGHIKKLMNOPQRSTUVWXYZ";
var small = capital.toLocaleLowerCase();
var num = "0123456789";
var special = "0!@#$%^&*";
var password = "";
for(var i = 1;i < 4;i++){
    password  += capital[Math.ceil(Math.random() * 26)]
}
for(var i = 1;i < 4;i++){
    password  += small[Math.ceil(Math.random() * 26)]
}
password += num[Math.ceil(Math.random() * 9)]
password += special[Math.ceil(Math.random() * 8)]


console.log(password)   //generated password contaning 3 uppercase 3 lowercase and 1 number and 1 special character




