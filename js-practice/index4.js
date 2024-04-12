function checkUndefined(x) {
    return x !== null && typeof x === "undefined";
}

function checkNull(x) {
    return x === null && typeof x !== "undefined";
}

function checkUndefinedOrNull(x) {
    return x === null || typeof x === "undefined";
}

console.log(checkUndefined(undefined));
console.log(checkNull(undefined));
console.log(checkUndefinedOrNull(undefined));
