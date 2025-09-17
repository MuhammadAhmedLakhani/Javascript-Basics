

//while loop is same as for loop
//while loop is used when number od iterations in not known

// var i = 0;
// while(i < 5) {
//     console.log(i)    while loop depicting for loop
//     i++;
// }



var flag = true;
var count = 0;
while(flag) {
    count +=5;
    console.log(count)
    if(count > 100){
        flag = false
    }
}