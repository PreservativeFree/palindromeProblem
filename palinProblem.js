const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let doesMatch = false;
const isPalindrome = function(myString) {
    let newString = myString;
    newString.toLowerCase();
    let myArray = newString.split("");
    let revArray = newString.split("");
    revArray.reverse();
    for(let i = 0; i <myArray.length; i++) {
        if(myArray[i] === revArray[i]) {
            doesMatch = true;
        } else {
            doesMatch = false;
            return doesMatch;
        }
    }
    return doesMatch;
}

reader.question("Enter a word: ", function(input) {
    doesMatch = isPalindrome(input);
    if(doesMatch) {
        console.log("Word is a Palindrome!")
    } else {
        console.log("This word is not a Palindrome");
    }

    reader.close();
});