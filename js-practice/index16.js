const map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");
map.set(4, "four");
map.set(5, "five");
map.set(6, "six");
map.set(7, "seven");
map.set(8, "eight");
map.set(9, "nine");

for(const [key, value] of map) {
    // console.log(`${key} is spelt as ${value}`);
}

for(const key in map) {
    console.log(key); // doesn't prints anything since it doesn't iterates through the keys of map.
}