(function func1() {
    console.log(`db connected`);
})();

(() => {
    console.log(`db connected two`);
})();

const ans = 10;

function isit(num) {
    return num === ans;
}

console.log(`outside db connection`);
console.log(isit(10))

    (() => {
        console.log(`db connected three`);
    })()