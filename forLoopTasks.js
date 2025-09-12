//Palimdrome Word Detector
//Palindrome words are like Madam mom civic radar etc

var word = prompt("Enter word");
var reverse = "";
for(i = (word.length - 1);i >= 0;i--){
    reverse += word[i]
}
if(word === reverse){
    console.log("It's a Palindrome")
}else{
    console.log("It's not a Palindrome")

}