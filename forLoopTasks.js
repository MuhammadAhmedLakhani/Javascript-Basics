//Palimdrome Word Detector
//Palindrome words are like Madam mom civic radar etc

// 

//task2 :Extracting Maximum value from an array

// var numbers = [12,44,61,54,77,89,23];
// var max = 0;

// for(var i = 0;i < numbers.length;i++){
//     if(numbers[i] > max){
//         max = numbers[i]
//     }
// }
 
// console.log(max);


//Task2 : Minimum number extractor

var numbers = [12,44,61,54,7,89,10,23];
var min = numbers[0];

for(var i = 0;i < numbers.length;i++){
    if(numbers[i] < min){
        min = numbers[i]
    }

}
console.log(min)