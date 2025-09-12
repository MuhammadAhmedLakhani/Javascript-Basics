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

// var numbers = [12,44,61,54,7,89,10,23];
// var min = numbers[0];

// for(var i = 0;i < numbers.length;i++){
//     if(numbers[i] < min){
//         min = numbers[i]
//     }

// }
// console.log(min)

//Task4:Finding Missing number in ordered ascending list and apending it as well in same list


// var list = [11,12,14,15,16,18,19,20];

// for(var i = 0;i < list.length;i++){
//     if(list[i + 1] - list[i] > 1){
//         list.splice(i+1,0,list[i] + 1)
//     }
// }
// console.log(list);




//Task 5:Finding Multiple consective Missing numbers in an ordered ascending list and apending them as well in same list


var num = [51,52,55,56,58,60];
var gap = 0;
for(var i = 0;i < num.length;i++){
    if(num[i + 1] - num[i] === 2){
        num.splice(i + 1,0,num[i] + 1)
    }  
    else if(num[i + 1] - num[i] > 2){
        gap = num[i + 1] - num[i]
        for(var j = 1;j < gap;j++){
            num.splice(i + j,0,num[i] + j)
        }
    }
}
console.log(num);


