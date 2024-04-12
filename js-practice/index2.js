function getTypes(arr) {
  return arr.map((elem) => {
    if (elem === null) return "null";

    if (typeof elem === "undefined") return "undefined";

    if (Array.isArray(elem)) return "array";

    if (elem instanceof Function) return "function";

    if (elem instanceof Object) return "object";

    if (typeof elem === "number") return "number";

    if (typeof elem === "string") return "string";

    if (typeof elem === "boolean") return "boolean";

    if (typeof elem === "symbol") return "symbol";

    return "other";
  });
}

console.log(
  getTypes([5, "Hello", {}, undefined, null, function () {}, {}, [], Symbol()])
);
