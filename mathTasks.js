//------Task 1 : heads and tails game 

var toss = Math.ceil(Math.random() * 2)


var player1 = +prompt("Wekcome Player1 please choose heads (press 1) or tails(press 2)")
var player2;

if(player1 === 1){
    player2 = 2
}
else if(player1 === 2){
    player2 = 1
}
else{
    alert("please enter either 1 or 2 only")
}

if(toss === player1){
    alert("Congragulations player1 you have won the toss!")
}
else if(toss === player2){
    alert("Congragulations player2 you have won the toss!")
}
else{
    alert("make sure your input are correct")
}