// function isObject(x) {
//   return x instanceof Object && !Array.isArray(x);
// }

// console.log(isObject({}));
// console.log(isObject([]));
// console.log(isObject("Hello"));

function checkEquals(x, y) {
    return x === y;
}

console.log(checkEquals("Hello", "Hello"));
console.log(checkEquals({}, {}));
console.log(checkEquals([1, 2], [1, 2]));
