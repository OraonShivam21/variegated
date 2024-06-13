// shallow copy

// let obj1 = { name: "Alice", age: 30 };
// let obj2 = Object.assign({}, obj1); // Shallow copy using Object.assign

// console.log(obj1 === obj2); // false (different objects)
// console.log(obj1.name === obj2.name); // true (same property values)

// obj2.name = "Bob";

// console.log(obj1.name); // "Bob" (change in obj2 reflects in obj1)
// console.log(obj1);
// console.log(obj2);

//
//
//
//
// deep copy

function deepCopy(obj) {
  // Handle primitive types and null/undefined
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Create a new object with the same properties
  const newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    newObj[key] = deepCopy(obj[key]); // Recursively copy nested objects
  }

  return newObj;
}

let obj1 = { name: "Alice", age: 30, hobbies: ["reading", "coding"] };
let obj2 = deepCopy(obj1);

console.log(obj1 === obj2); // false (different objects)
console.log(obj1.hobbies === obj2.hobbies); // false (different references for nested objects)

obj2.hobbies.push("gaming");

console.log(obj1.hobbies); // ["reading", "coding"] (original object remains unchanged)
console.log(obj2.hobbies); // ["reading", "coding", "gaming"]
