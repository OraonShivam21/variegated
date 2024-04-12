// function getTruthy(arr) {
//   return arr.filter(Boolean);
// }

// console.log(getTruthy(["", 0, "Hello", 5, {}, [], undefined, null]));

function checkTruthyFalsy(x) {
  return Boolean(x);
}

console.log(checkTruthyFalsy(null));
