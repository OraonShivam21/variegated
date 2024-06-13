// 1.

// console.log(a); // undefined - bcz a was declared using var, thus was hoisted to the top
// var a = 5;

// 2.

// console.log(b); // ReferenceError - bcz b was declared using let, thus was not hoisted and isn't available before its declaration
// let b = 5;

// 3.

// let x = 5;
// let y = x++;

// console.log(`x: ${x}, y: ${y}`); // x: 6, y: 5 - bcz x is post incrementing, thus it will first return the value to y and then it will increment

// 4.

// console.log(1 + '1' - 1); // 10 - bcz 1 + '1' will be treated as string concat and becomes 11, and after that '11' - 1 will be treated as arithematic substraction thus 11 - 1 = 10.

// 5.

// console.log([] + []); // "" - since it is not a number, hence js will try to convert [] to string thus "" will be returned and thus "" + "" = "" (empty string)
// console.log([1, 2] + [3, 4]); // 1, 23, 4 - same, not a number, thus string concat, thus [1, 2].toString will be 1, 2, blah blah

// 6.

// console.log((0.1 + 0.2) === 0.3); // false - js floating-point arithematic converts decimals into binaries, thus 0.1 doesn't actually gets a precise binary number, instead it becomes 0.000110011... where after 0.0, 0011 repeats which isn't a precise binary value for 0.1, and thus the inaccurate calculation.

// 7.

// let a = {}; // creates an empty object
// let b = { key: "b" };
// let c = { key: "c" }; // b and c are two objects
// a[b] = 123; // a[b] will create a new property in object 'a' with object 'b', and js converts the object 'b' into string using toString() and thus it gets stored as a = { '[object Object': 123 }
// a[c] = 456; // here again, object 'c' is taken for giving property to object 'a', which is again then converted to string '[object Object]', hence it overwrites the value from 123 to 456.
// console.log(a[b]); // thus the answer here is 456, even a[c] will 456.
// console.log(b.toString());

// 8.

// console.log(typeof typeof 0); // string - bcz typeof 0 will give number, which is a string value, thus typeof number will give string

// 9.

// let x = 21;
// let foo = function() {
//   console.log(x); // ReferenceError - since the function itself is declaring a x, it will try to access the inner x, thus, till this line, the inner x is not declared and hence created a Temporal Dead Zone, it will give a ReferenceError while trying to access it before its declaration.
//   let x = 20;
// };
// foo();

// 10.

// console.log([2] === [2]); // always false, since js compares objects by reference, not by values.

// 11.

// console.log("0" || 1);
// console.log(1 || "0");

// 12.

// let bar = false;
// console.log(bar + 0);
// console.log(bar + "xyz");
// console.log(bar + true);

// 13.

// let y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y); // 1undefined - since function f() is defined in the if condition check, it is actually not available inside the if block, thus typeof f returns undefined which is a string, thus string concat happens

// 14.

// console.log(" -9\\n" - 5); // NaN - bcz \\n is with escape char, thus it will not be nextline rather \n in string, thus string will be " -9\n" and since arithematic substraction is happening, it will be converted to Nan, thus NaN - 5 = NaN
// console.log(" -9\\n" + 5); // -9\n5 - bcz here string concat will happen due to '+' sign.

// 15.

// let num = 8;
// let numObj = new Number(8);
// console.log(num == numObj); // true - since both have values 8, and type of numObj will be coerced to primitive number type which will be same as num
// console.log(num === numObj); // false - here values are 8, but their types are different, num is of number type and numObj is of object type
// console.log(typeof num, typeof numObj);
// console.log(num, numObj);

// 16.

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// let c = "1,2,3";
// console.log(a == c); // true
// console.log(b == c); // true
// console.log(a == b); // false

// 17.

// console.log([] == ![]); // true - pata nhi kyun
// console.log(typeof []); // object
// console.log(typeof ![]); // boolean
// console.log(Boolean([])); // true
// console.log(Boolean(![])); // false
// console.log(Boolean([]) == Boolean(![])); // false
// console.log(true == false); // false

// 18.

// "![]" is falsy here
// if (![]) console.log(`it is truthy`);
// else console.log(`it is falsy`);

// 19.

// function getNum() {
//   return {
//     test: 10,
//   };
// }
// console.log(getNum().test); // 10

// 20.

// let numberArray = [1, 2];
// delete numberArray[1];
// console.log(numberArray); // [ 1, <1 empty item> ]
// console.log(numberArray[1]); // undefined

// 21.

// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(10)
// );

// 22.

// let obj = {
//   prop: 1,
//   func: function () {
//     return this.prop;
//   },
// };
// let extractFunc = obj.func;
// console.log(obj.func()); // 1
// console.log(extractFunc()); // undefined - bcz the function in obj is given as reference to extractFunc thus it looses its original context for this keyword i.e. obj and thus points to the context given by extractFunc, since it has no context for this keyword, it gets the global this which is an empty object.
// // So its solution is to bind obj to the context for extractFunc - obj.func.bind(obj);
// let extractFunc2 = obj.func.bind(obj);
// console.log(extractFunc2()); // 1

// 23.

// let array = [];
// array[0] = "a";
// array[1] = "b";
// array.foo = "c";
// console.log(array);
// console.log(array.length); // 2 - bcz array is filled for index 0 and 1, and length will implicitly reflects the highest assigned index + 1, thus 2 and foo just becomes a property in array like length not an element.
// console.log(array.foo);
// console.log(Object.getOwnPropertyDescriptors(array));

// 24.

console.log(Math.max());