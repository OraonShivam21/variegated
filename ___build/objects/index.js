let obj = { name: "Alice" };
let obj2 = obj;
obj2.name = "Bob";

// console.log(obj);
// console.log(obj2);

const obj3 = "this is a string";
// console.log(obj3);
// obj.length = 10; // not possible as writable descriptor is false here
// console.log(Object.getOwnPropertyDescriptors(obj3));
// console.log(obj3[0], obj3[1], obj3[2]);
// obj3[3] = 'a'; // also not possible since writable descriptor is false
// console.log(obj3);

const obj4 = 4321;
// console.log(Object.getOwnPropertyDescriptors(obj4));

let obj5 = [1, 2, 3, 4, 5];
console.log(obj5);

Object.defineProperties(obj5, {
  length: { writable: false },
});

console.log(Object.getOwnPropertyDescriptors(obj5));
obj5.length = 3;
console.log(obj5);

