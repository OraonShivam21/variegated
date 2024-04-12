let passcodeSym = Symbol('passcode');
let roleSym = Symbol.for('role');

let obj = {
  name: 'John doe',
  age: 36,
  [passcodeSym]: 'world',
  [roleSym]: 'trainee'
}

obj[Symbol('passcode')] = 'Hello'; // will not overwrite but create a new property with the same descriptor
obj[Symbol.for('role')] = 'developer'; // will overwrite the existing one with the same descriptor

console.log(obj);
