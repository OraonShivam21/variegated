if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callbackFnc) {
    if (typeof callbackFnc !== "function")
      throw new TypeError(`${callbackFnc} must be a function.`);

    let newArr = [];
    let original = this;

    for (let i = 0; i < original.length; i++) {
      if (i in original) {
        newArr[i] = callbackFnc(original[i], i, original);
      }
    }

    return newArr;
  };
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.myMap((item) => item * 5));
