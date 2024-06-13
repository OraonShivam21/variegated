if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callbackFnc, initialValue) {
    if (typeof callbackFnc !== "function")
      throw new TypeError(`${callbackFnc} should be a function`);

    let accumulator = initialValue;
    let original = this;
    let startIndex = 0;

    if (arguments.length < 2) {
      if (original.length === 0)
        throw new TypeError("Reduce of empty array with no initial value");

      while(startIndex < original.length && !(startIndex in original))
        startIndex++;

      accumulator = original[startIndex];
      startIndex++;
    }

    for (let i = startIndex; i < original.length; i++) {
      if (i in original) {
        accumulator = callbackFnc(accumulator, original[i], i, original);
      }
    }

    return accumulator;
  };
}

let arr = [1, 2, 3, 4, 5];

console.log(
  arr.myReduce((acc, val) => {
    return acc + val;
  })
);

console.log(
  arr.reduce((acc, val) => {
    return acc + val;
  })
);
