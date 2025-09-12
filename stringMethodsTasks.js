
//Task1:Finding third Specific word from a string containing multiple specific words

//draft

// var str = "Saylani SMIT SMIT Sas SMIT ada SMIT";
// var count = 0;
// for(var i = 0;i < str.length;i++){
//     if(str.slice(i,i+4) === "SMIT"){
//         count += 1
//     }
//     if((str.slice(i,i+4) === "SMIT") && count === 3){
//        str = str.slice(0,i) + "Saylani" + str.slice(i + 4)       
//     }
// }

// console.log(str);


//right way

var str = "Saylani SMIT SMIT Sas SMIT ada SMIT";

var word  = "SMIT";

var rep = "Saylani";

var count = 0;

for(var i = 0;i < str.length;i++){
    find = str.slice(i,i + word.length)
    if(find === word){
        count++

        if(count === 3){
            str = str.slice(0,i) + rep + str.slice(i + word.length)
        }
    }
}

console.log(str)











