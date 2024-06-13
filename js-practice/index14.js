const mySym = Symbol("123");
const marks = ["English", "Maths", "Science"];

const user = {
  name: "Shivam",
  age: 22,
  email: "shivam@gmail.com",
  location: "Jaipur",
  isLoggedIn: false,
  [mySym]: "mySym1", // for special symbols and for accessing: user[mySym]
  [marks]: [89, 94, 96],
};

const traverse = [
  ...Object.keys(user),
  ...Object.getOwnPropertySymbols(user).map((sym) => sym.toString()),
  marks.toString(),
];
// console.log(traverse);
traverse.forEach((trav) => {
  console.log(`${trav}: ${user[trav]}`);
  console.log(" ");
});

const obj1 = {
  name: "Shivam",
  class: "X",
  rollNo: 32,
};
const obj = Object.create(obj1);

console.log(Object.getOwnPropertyDescriptors(obj1));
console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(obj);
