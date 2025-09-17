//onClick event can be applied to all html elements
//but it should be use only on clickable items


// function clickFunction() {
//     alert("clicked")
// }



//---getting file values as images only and displaying them

function submit() {
    var file = document.getElementById("file");
    console.log(URL.createObjectURL(file.files[0]))  //making file link
                                                    //URL is keyword in javascript
    
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(file.files[0])
    image.style.display = "block"

}

