// Some interview problems...

// 1. Given a string, reverse each word in a sentence.
var str = "This is a string";
console.log("Original String:", str);
var reverse = str.split(" ").map((word) => word.split("").reverse().join(""));
console.log("Reversed String:", reverse.join(" "));

// 2. How to check if an object is an array or not?
var arr = [1, 2, 3, 4];
console.log("typeof arr:", typeof arr); // will give object since arrays are considered objects in js
console.log("Is array or not:", Array.isArray(arr)); // it will check if it is an array or not

// 3. How to empty an array in js? But do not reset it to a new array and do not loop to pop values.
// method 1: using splice to change array itself
var arr2 = [12, 13, 14, 15];
console.log("Before deleting:", arr2);
arr2.splice(0, arr2.length);
console.log("After deleting:", arr2);
// method 2: change the length of array
var arr3 = [10, 20, 30, 40, 50];
console.log("Before deleting:", arr3);
arr3.length = 0;
console.log("After deleting:", arr3);

// 4. How would you check if a number is an integer?
var num = 432;
console.log("Is integer:", Number.isInteger(num)); // method 1
console.log("Is integer:", num % 1 === 0); // method 2
console.log(num % 1);

// 5. Make this work:
// duplicate([1, 2, 3, 4, 5]) ==> [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
function duplicate(arr) {
  // return [...arr, ...arr]; // method 1
  return arr.concat(arr); // method 2
}

console.log(duplicate([1, 2, 3, 4, 5]));

// 6. Write a JS function to reverse a number.
// method 1: using a loop and reversing
// function reverseNum(num) {
//   let reversed = 0;

//   while(num != 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return reversed;
// }

// method 2: converting to string and then reversing
function reverseNum(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseNum(54321));

// 7. Write a JS functions that checks whether a passed string is palindrome or not
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
var str = "ababa";
console.log(`${str} isPalindrome:`, isPalindrome(str));

// 8. Write a JS function that returns a passed string with letters in alphabetical order.
function sortString(str) {
  return str.split("").sort().join("");
}

console.log(sortString("mississippi"));

// 9. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function firstLetterUpper(str) {
  return str
    .split(" ")
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(" ");
}
var str = "i want to do this kind of thing";
console.log(firstLetterUpper(str));

// 10. Write a JS function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns - object, function, boolean, string, number, and undefined.
function getType(val) {
  if(val === null)
    return "null";
  if(Array.isArray(val))
    return "array";
  if(typeof val === "object")
    return "object";
  if(typeof val === "undefined")
    return "undefined";
  if(typeof val === "function")
    return "function";
  return typeof val;
}

var val = [1, 2];
console.log(`typeof ${val} is`, getType(val));

// 11. Write a JS function to get the number of occurrences of each letter in specified string.
function occurrencesOfLetters(str) {
  const result = {};

  str.split("").forEach(letter => {
    result[letter] = result[letter] ? result[letter] + 1 : 1;
  });

  return result;
}

var str = "shababobo";
console.log(`Occurrences in ${str} are:`, occurrencesOfLetters(str));