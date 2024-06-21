# Compose

Write a function that takes an array of functions and outputs a function that will pass the given value through the pipeline of functions

### Example 1

```javascript

  const pipeline = [
      (num) => num - 1,
      (num) => num * 10,
      (num) => `${ num } as a string`
    ];
  
  const composed = compose(pipeline);

  composed(4); // => `30 as a string`
```

### Example 2

```javascript
  const pipeline = [
    (str) => str.length,
    (length) => length * 100,
    (num) => num + 5
  ];

  const composed = compose(pipeline);

  composed('cat'); // => 305
```