// Some interview problems...

// 1. Given a string, reverse each word in a sentence
var str = "This is a string";
console.log("Original String:", str);
var reverse = str.split(" ").map((word) => word.split("").reverse().join(""));
console.log("Reversed String:", reverse.join(" "));

// 2. How to check if an object is an array or not?
var arr = [1, 2, 3, 4];
console.log("typeof arr:", typeof arr); // will give object since arrays are considered objects in js
console.log("Is array or not:", Array.isArray(arr)); // it will check if it is an array or not

// 3. How to empty an array in js? But do not reset it to a new array.
var arr2 = [12, 13, 14, 15];
console.log("Before deleting:", arr2);
arr2.splice(0, arr2.length);
console.log("After deleting:", arr2);