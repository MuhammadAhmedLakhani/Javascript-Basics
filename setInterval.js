// var count = 0;
// function counter(){

//     count++
//     console.log(count)

// }


// var id = setInterval(counter,1000)

// console.log(id,"id")

// function stopTimer(){
//     clearInterval(id)
//     console.log("stop function running")

// }

function increment(){

    



}

var count = 10;
function move(){

    console.log("moving")
    count += 10;

    var car = document.getElementById("move")

    
    car.style.left = count + "px" 

}

var id = setInterval(move,300)

function stop(){

    clearInterval(id)
}
