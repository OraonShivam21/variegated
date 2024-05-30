const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve("Promise is resolved");
    } else {
      reject("Promise is rejected");
    }
  }, 1000);
});

console.log("typeof promise:", typeof promise);
console.log("promise instanceOf Promise:", promise instanceof Promise);
promise.then((res) => console.log(res)).catch((err) => console.error(err));

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("typeof response:", typeof response);
    console.log("response instanceof Promise:", response instanceof Promise);
    const data = await response.json();
    console.log("typeof data:", typeof data);
  } catch (error) {
    console.error(error);
  }
}

fetchUsers();

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log("typeof x:", typeof x);
  console.log("x instanceOf Promise:", x instanceof Promise);
  console.log(x); // 10
}

f1();
