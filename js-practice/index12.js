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
  if (val === null) return "null";
  if (Array.isArray(val)) return "array";
  if (typeof val === "object") return "object";
  if (typeof val === "undefined") return "undefined";
  if (typeof val === "function") return "function";
  return typeof val;
}

var val = [1, 2];
console.log(`typeof ${val} is`, getType(val));

// 11. Write a JS function to get the number of occurrences of each letter in specified string.
function occurrencesOfLetters(str) {
  const result = {};

  str.split("").forEach((letter) => {
    result[letter] = result[letter] ? result[letter] + 1 : 1;
  });

  return result;
}

var str = "shababobo";
console.log(`Occurrences in ${str} are:`, occurrencesOfLetters(str));

// 12. Loop and array of objects and remove all objects which don't have gender's value as male.
function getMaleOnlyObjs(obj) {
  return obj.filter((ob) => ob.gender === "male");
}

const obj = [
  { name: "Abhishesh", age: 31, gender: "male" },
  { name: "Aradhya", age: 31, gender: "female" },
  { name: "Akriti", age: 31, gender: "female" },
  { name: "Aryan", age: 31, gender: "male" },
  { name: "Akanksha", age: 31, gender: "female" },
];

console.log(getMaleOnlyObjs(obj));

// 13. Write a JS function to find the most frequent item of an array
function findMostFrequent(arr) {
  let freq = {};
  arr.forEach((item) => {
    freq[item] = freq[item] ? freq[item] + 1 : 1;
  });

  // let item = "", f = 0;
  // for(let props in Object.keys(freq)) {
  //   if(freq[props] > f) {
  //     f = freq[props];
  //     item = props;
  //   }
  // }

  // return item;
  // OR
  return Object.keys(freq).reduce((acc, next) =>
    freq[acc] > freq[next] ? acc : next
  );
}

const freqArr = [1, 2, 2, 3, 3, 3, 4];
console.log("Most frequent:", findMostFrequent(freqArr));

// 14. Write a JS function to shuffle an array.
function shuffleArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    let rInd = Math.floor(Math.random() * arr.length);
    let temp = arr[i];
    arr[i] = arr[rInd];
    arr[rInd] = temp;
  }
}

const shuffArr = [1, 2, 3, 4, 5, 6];
shuffleArray(shuffArr);
console.log("Shuffled array:", shuffArr);
