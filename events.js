//onClick event can be applied to all html elements
//but it should be use only on clickable items


// function clickFunction() {
//     alert("clicked")
// }



//---getting file values as images only and displaying them

// function submit() {
//     var file = document.getElementById("file");
//     console.log(URL.createObjectURL(file.files[0]))  //making file link
//                                                     //URL is keyword in javascript

//     var image = document.getElementById("image");
//     image.src = URL.createObjectURL(file.files[0])
//     image.style.display = "block"

// }


//--getting radio input value


// function submit() {
//     var cities = document.getElementsByName("city");

//     for (var city of cities) {
//         if (city.checked) {
//             console.log(city.value)
//         }
//     }


// }



//swaping image on mouse over

var count = 3;
var temImage1 = "";
function imageSwaping(val) {      //getting event passed by brower as parameter



    if (val.type === "mouseover") {
        val.target.src = "https://img.freepik.com/free-photo/scenery-frozen-lake-surrounded-by-forest_181624-14951.jpg?semt=ais_hybrid&w=740&q=80"

    }
    else if (val.type === "mouseout") {
        val.target.src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/calming-nature-wallpaper-free-image.jpeg?w=600&quality=80"
    }




}








