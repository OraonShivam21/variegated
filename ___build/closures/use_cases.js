// 1. Event listeners with data persistance: attach event listeners to the newly created elements in DOM
function createButton(label, data) {
  const button = document.createElement("button");
  button.textContent = label;

  button.addEventListener("click", function () {
    console.log("Button clicked:", data);
  });

  return button;
}

const button1 = createButton("Click me!", "Data for Button 1");
const button2 = createButton("Click me too!", "Data for Button 2");

document.body.appendChild(button1);
document.body.appendChild(button2);

// 2. Functions with configurable behaviour (function currying):
// Function currying is a technique where a function takes multiple arguments, but it's designed to be called multiple times with partial arguments, ultimately returning a function with the desired behavior.
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(4)); // Output: 12

// 3. Simulating modules: while js doesn't have built-in modules like other languages, closures can be used to create module-like structure
function createModule(initialCount) {
  let count = initialCount;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
}

const counterModule = createModule(0);

counterModule.increment();
counterModule.increment();
console.log(counterModule.getCount()); // Output: 2
