var count = 0;
function counter(){

    count++
    console.log(count)

}


var id = setInterval(counter,1000)

console.log(id,"id")

function stopTimer(){
    clearInterval(id)
    console.log("stop function running")

}