// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
let us=[5,87,4,84,46,5,4,8,56]
 umesh = us.filter((us)=>{
    return us%2==0 
 })
console.log(umesh)

// // 1.Write a JavaScript function to check if a given string is a palindrome.
// let umesh1= "malayalam"

// 4.Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
// 	I am a frontend developer
let text1= "I am a frontend developer"
console.log(text1.split(""))



function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}
console.log(sentenceCase('I am a frontend developer'));
