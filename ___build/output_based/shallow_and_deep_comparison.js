// shallow comparison

// let obj1 = { name: "Alice", age: 30 };
// let obj2 = obj1; // Assigning the reference of obj1 to obj2

// console.log(obj1 === obj2); // true (shallow comparison: same memory location)

// let obj3 = { name: "Alice", age: 30 }; // Different object with same properties

// console.log(obj1 === obj3); // false (shallow comparison: different memory locations)

//
//
// deep comparison

function deepEqual(obj1, obj2) {
  // Handle primitive types and null/undefined
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }

  // Check for the same number of properties
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Recursively compare properties
  for (const key in obj1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

let obj1 = { name: "Alice", age: 30, hobbies: ["reading", "coding"] };
let obj2 = { name: "Alice", age: 30, hobbies: ["reading", "coding"] };

console.log(deepEqual(obj1, obj2)); // true (deep comparison: same structure and values)

let obj3 = { name: "Alice", age: 30, hobbies: ["reading"] }; // Different hobbies array

console.log(deepEqual(obj1, obj3)); // false (deep comparison: different values in nested object)
console.log(deepEqual(null, obj3)); // false (deep comparison: different since, null !== obj3)