// console.log("Hello world");

function getType(x) {
  if (x === null) return "null";

  if (typeof x === "undefined") return "undefined";
  
  if (Array.isArray(x)) return "array";
  
  if (x instanceof Function) return "function";
  
  if (x instanceof Object) return "object";

  if (typeof x === "number") return "number";

  if (typeof x === "string") return "string";

  if (typeof x === "boolean") return "boolean";

  if (typeof x === "symbol") return "symbol";

  return "other";
}

console.log(getType(5));
console.log(getType("Hello"));
console.log(getType(true));
console.log(getType({}));
console.log(getType(function() {}));
console.log(getType(undefined));
console.log(getType(null));
console.log(getType(Symbol()));
console.log(getType([]));

// console.log(typeof null);
