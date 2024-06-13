// 1. call()

function greeting1(name, age) {
  console.log(`Hello, ${this.name}! You are ${this.age} years old!`);
}

function greeting2(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old!`);
}

const person = { name: "Alice", age: 30 };
greeting1.call(person);
greeting2.call(person, "Bob", 25);

// 2. apply()

function calculateArea(width, height) {
  return width * height;
}

const dimensions = [5, 10];
const area = calculateArea.apply(null, dimensions); // Output: 50 (apply dimensions array as arguments)

// 3. bind

// const button = document.getElementById("myButton");

// button.addEventListener(
//   "click",
//   function () {
//     console.log(this.textContent); // This refers to the button element (context preserved using bind)
//   }.bind(button)
// );

function sumAllNumbers(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

const numbersToSum = [1, 2, 3, 4, 5];
const boundSum = sumAllNumbers.bind(null, numbersToSum); // Set context to null

console.log(boundSum()); // Output: 15 (spread syntax expands the array)

// bind using spread and rest operators
function calculateAverage(...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

const numbersToAverage = [10, 20, 30];
const boundAverage = calculateAverage.bind(null, ...numbersToAverage); // Pre-pend array as first argument

console.log(boundAverage()); // Output: 20 (bound function uses pre-set argument)
