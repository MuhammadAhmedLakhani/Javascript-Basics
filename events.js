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

// var count = 3;
// var temImage1 = "";
// function imageSwaping(val) {      //getting event passed by brower as parameter



//     if (val.type === "mouseover") {
//         val.target.src = "https://img.freepik.com/free-photo/scenery-frozen-lake-surrounded-by-forest_181624-14951.jpg?semt=ais_hybrid&w=740&q=80"

//     }
//     else if (val.type === "mouseout") {
//         val.target.src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/calming-nature-wallpaper-free-image.jpeg?w=600&quality=80"
//     }




// }


//expanding text onmouseover method


// var p = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi asperiores nulla qui, quia cumque, minus architecto aperiam eaque doloribus eligendi enim placeat accusamus esse impedit doloremque earum est vero! Sapiente fuga asperiores numquam animi suscipit ratione est, dolore commodi obcaecati aspernatur nulla sunt consequatur non vero repellat cupiditate totam dolorem reprehenderit incidunt explicabo magni accusantium unde. Porro nobis est atque at esse odio veritatis laboriosam! Consequatur, error dicta! Ratione temporibus repellendus eos maiores qui laboriosam sint. Est iure maxime veniam iusto impedit accusantium repellendus quos atque, quas, voluptatum ipsum amet corporis a totam animi laudantium repudiandae commodi perferendis quam vel mollitia. Animi commodi quis iusto itaque sunt laboriosam, repudiandae, culpa asperiores eligendi hic tempore error eum. Vitae sunt quaerat molestias labore deleniti veniam provident corrupti repudiandae distinctio. Molestias iste iure quisquam, fugit accusantium nequei!";



// var shortText = p.slice(0, 50) + "...";

// console.log(shortText)

// var pElement = document.getElementById("text")

// pElement.innerHTML = shortText

// function expand(value) {

//     console.log(value.type)

//     if (value.type === "mouseout") {

//         pElement.innerHTML = shortText
//         pElement.style.backgroundColor = "white"


//     }else if(value.type === "mouseover"){
//         pElement.innerHTML = p;

//         pElement.style.backgroundColor = "purple"

//     }




// }



// function cityDisplay() {

//     var zipCode = document.getElementById("zip");
//     var city = document.getElementById("city");
//     console.log(zipCode.value)

//     switch (zipCode.value) {
//         case "1":
//             city.value = "Karachi"
//             break
//         case "2":
//             city.value = "Lahore"
//             break
//         case "3":
//             city.value = "Islamabad"
//             break

//     }




// }



//Geeting input value when  enter is pressed



function sendMessage() {
    if(event.keyCode === 13){
        var val = document.getElementById("message").value;

        console.log(val)
    }
}

