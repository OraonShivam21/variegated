function compose(callbackArr) {
  return function (item) {
    const result = callbackArr.reduce((acc, func) => {
      return func(acc);
    }, item);

    console.log(result);
  };
}

const pipeline = [
  (num) => num - 1,
  (num) => num * 10,
  (num) => `${num} as a string`,
];

const composed = compose(pipeline);
composed(4); // => `30 as a string`

const pipeline2 = [
  (str) => str.length,
  (length) => length * 100,
  (num) => num + 5,
];

const composed2 = compose(pipeline2);
composed2("cat"); // => 305
