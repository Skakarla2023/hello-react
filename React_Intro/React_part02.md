# 🌟 React Features

## 1. let

- Introduced in ES6 (2015).

- Used to declare block-scoped variables.

- Value can be changed (mutable).

## 2. const

- Introduced in ES6.

- Used to declare block-scoped constants.

- Value cannot be reassigned after initialization.

```
1. const does not make objects/arrays immutable.
2. It only prevents reassigning the variable itself.
```

----------------------------------------------------------------------------------------------------
```
block-scoped : variables exist only within {}, they cannot be accessed outside the block.
```
-----------------------------------------------------------------------------------------------------

## 3. Arrow Functions

- Introduced in ES6 (2015).

- A shorter way to write functions.

- They are anonymous functions (don’t have a name by default).

- Arrow functions share this from outside, while normal functions make their own this.

eg:

* normal function

```javascript

function add(a, b) {
  return a + b;
}
```

* arrow function

```javascript
const add = (a, b) => a + b;
```

### 🟢 (a) No parameters

```javascript
const greet = () => "Hello!";
console.log(greet()); // Hello!
```

### 🟢 (b) One parameter (no need for parentheses)

```javascript
const square = x => x * x;
console.log(square(5)); // 25
```

### 🟢 (c) Multiple parameters

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12
```

### 🟢 (d) With multiple statements (need {} and return)

```javascript
const sum = (a, b) => {
  console.log("Adding numbers...");
  return a + b;
};
console.log(sum(2, 3)); // 5
```

#### this in normal function vs arrow function

- normal function
  
```javascript
function Person() {
  this.age = 0;

  setInterval(function() {
    this.age++; // ❌ 'this' refers to setInterval, not Person
    console.log(this.age);
  }, 1000);
}

new Person();
```

- arrow function

```javascript
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // ✅ 'this' refers to Person object
    console.log(this.age);
  }, 1000);
}

new Person();
```


## 4. Template Literals

- A new way to work with strings introduced in ES6 (2015).

- Instead of single (') or double (") quotes, they use backticks (`).

- They make string handling easier, cleaner, and more powerful.

- You can directly insert variables or expressions inside strings with ${ }.

```javascript
let a = 10, b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
```

- No need to use \n for new lines.

```javascript
let message = `This is line 1
This is line 2
This is line 3`;
console.log(message);
```

- You can run any valid JS expression inside ${ }.

```javascript
let product = "Book";
let price = 250;
console.log(`The price of ${product} after 10% discount is ${price - (price * 0.1)}`);
```

## 5. Destructing

- Destructuring in JavaScript means unpacking values from arrays or objects and storing them in variables in a short, clean way.

eg:

```javascript
// with arrays
let numbers = [1, 2, 3];
let [a, b] = numbers;
console.log(a, b); // 1 2

// with objects
let person = { name: "Arohi", age: 21 };
let { name, age } = person;
console.log(name, age); // Arohi 21
```

## 6. Promises, async/await

- A Promise in JavaScript is like a guarantee for a future result of an operation (like fetching data from an API).
- It can be in 3 states:
  - Pending → still working (not finished yet).
  - Resolved (Fulfilled) → worked successfully (you get the result).
  - Rejected → failed (you get an error).

eg:
```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data fetched!");
  } else {
    reject("Error fetching data.");
  }
});

promise
  .then(result => console.log(result))  // when resolved
  .catch(error => console.log(error));  // when rejected
```

- async/await is a simpler way to work with promises.
  - async makes a function return a promise.
  - await makes JavaScript wait until a promise is finished before moving on.
- .then(...) runs when the promise is resolved.
- .catch(...) runs when the promise is rejected.

```
If successful → resolve() → goes to .then().

If failed → reject() → goes to .catch().
```

## 7. Classes 

- A class is like a blueprint for creating objects with properties and methods.

- It helps organize code, especially when creating many similar objects.

```javascript
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    
    start() {
        console.log(`${this.name} is starting...`);
    }
}

let car1 = new Car("Toyota",2020);
car1.start();
```

## 8. Modules

- A module is just a separate file that contains code (like functions, classes, or variables).

- You can export code from one file and import it into another.

- This keeps code organized and reusable.

```
Modules = splitting code into files and reusing them anywhere.
```

```javascript

export function add(a, b) {
  return a + b;
}

---------------------------------------------------

import { add } from './math.js';

console.log(add(5, 3)); // 8
```

## 9.Array Methods

- map() → Makes a new array by applying a function to each item.

```javascript
let nums = [1,2,3]
let doubled = nums.map(n=>n*2);
console.log(doubled)
```

- filter() → Makes a new array with only the items that pass a condition.

```javacript
let nums = [1,2,3]
let doubled = nums.filter(n => n%2==0);
console.log(doubled)
```

- reduce() → Reduces the array to one single value (like sum, product, etc.).

```javascript
let nums = [1,2,3]
let reduced = nums.reduce((acc,n) => acc+n,0);
console.log(reduced)
```

- Runs a function on each item (no new array, just does something).

```javascript
let nums = [1,2,3]
nums.forEach(n => {
    console.log(n*2);
});
```

