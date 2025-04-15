# JavaScript Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Basics](#basics)
    - [Variables](#variables)
    - [Data Types](#data-types)
    - [Operators](#operators)
    - [Control Flow](#control-flow)
3. [Functions](#functions)
    - [Function Declaration](#function-declaration)
    - [Arrow Functions](#arrow-functions)
    - [Higher-Order Functions](#higher-order-functions)
4. [Objects and Arrays](#objects-and-arrays)
    - [Objects](#objects)
    - [Arrays](#arrays)
    - [Destructuring](#destructuring)
5. [DOM Manipulation](#dom-manipulation)
6. [ES6+ Features](#es6-features)
    - [Template Literals](#template-literals)
    - [Modules](#modules)
    - [Promises and Async/Await](#promises-and-async-await)
7. [Advanced Topics](#advanced-topics)
    - [Closures](#closures)
    - [Prototypes and Inheritance](#prototypes-and-inheritance)
    - [Event Loop](#event-loop)
    - [Error Handling](#error-handling)
    - [Asynchronous Programming](#asynchronous-programming)
8. [Best Practices](#best-practices)
9. [Resources](#resources)

---

## Introduction
JavaScript is a versatile, high-level programming language primarily used for web development. It enables dynamic content, interactivity, and advanced functionality in web applications. It is supported by all modern browsers and is an essential part of the web development stack alongside HTML and CSS.

---

## Basics

### Variables
- Declared using `var`, `let`, or `const`.
- `let` and `const` are block-scoped, while `var` is function-scoped.
- Use `const` for values that won't change and `let` for variables that may change.
- Example:
  ```javascript
  let name = "John";
  const age = 25;
  var isStudent = true;
  ```

### Data Types
JavaScript has two main categories of data types: **Primitive** and **Non-Primitive**.

#### Primitive Data Types
Primitive data types are immutable and represent a single value. They include:
1. **String**: Represents textual data.
    - Example:
      ```javascript
      let str = "Hello, World!";
      ```
2. **Number**: Represents numeric values (both integers and floating-point numbers).
    - Example:
      ```javascript
      let num = 42;
      let pi = 3.14;
      ```
3. **Boolean**: Represents logical values (`true` or `false`).
    - Example:
      ```javascript
      let isActive = true;
      ```
4. **Null**: Represents an intentional absence of value.
    - Example:
      ```javascript
      let emptyValue = null;
      ```
5. **Undefined**: Represents a variable that has been declared but not assigned a value.
    - Example:
      ```javascript
      let notAssigned;
      console.log(notAssigned); // undefined
      ```
6. **Symbol**: Represents a unique and immutable value, often used as object keys.
    - Example:
      ```javascript
      let uniqueKey = Symbol("key");
      ```
7. **BigInt**: Represents integers larger than the `Number` type can safely handle.
    - Example:
      ```javascript
      let bigNumber = 123456789012345678901234567890n;
      ```

#### Non-Primitive Data Types
Non-primitive data types are mutable and can store collections of values or more complex entities. They include:
1. **Objects**: Key-value pairs used to store structured data.
    - Example:
      ```javascript
      let person = {
         name: "Alice",
         age: 30,
         isStudent: false
      };
      ```
2. **Arrays**: Ordered collections of data.
    - Example:
      ```javascript
      let fruits = ["apple", "banana", "cherry"];
      ```
3. **Functions**: Blocks of code designed to perform a specific task.
    - Example:
      ```javascript
      function greet(name) {
         return `Hello, ${name}!`;
      }
      ```

#### Type Checking
To check the type of a variable, use the `typeof` operator:
```javascript
console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object"
console.log(typeof greet); // "function"
```

#### Special Notes
- Arrays and functions are technically objects in JavaScript.
- `null` is considered an object due to a historical bug in JavaScript.
- Use `Array.isArray()` to check if a variable is an array:
  ```javascript
  console.log(Array.isArray(fruits)); // true
  ```
- Use `instanceof` to check if an object is an instance of a specific class:
  ```javascript
  console.log(person instanceof Object); // true
  ```
- BigInt values cannot be mixed with `Number` values in operations:
  ```javascript
  let bigInt = 10n;
  let num = 5;
  // console.log(bigInt + num); // TypeError
  ```

By understanding these data types, you can write more robust and error-free JavaScript code.

### Operators

Operators in JavaScript are used to perform operations on variables and values. They can be categorized as follows:

#### 1. Arithmetic Operators
Used for mathematical calculations:
- `+` (Addition): Adds two numbers.
- `-` (Subtraction): Subtracts the second number from the first.
- `*` (Multiplication): Multiplies two numbers.
- `/` (Division): Divides the first number by the second.
- `%` (Modulus): Returns the remainder of a division.
- `**` (Exponentiation): Raises the first number to the power of the second.

Example:
```javascript
let sum = 5 + 3; // 8
let difference = 10 - 4; // 6
let product = 2 * 3; // 6
let quotient = 10 / 2; // 5
let remainder = 10 % 3; // 1
let power = 2 ** 3; // 8
```

#### 2. Comparison Operators
Used to compare two values and return a boolean (`true` or `false`):
- `==` (Equality): Checks if values are equal (type coercion allowed).
- `===` (Strict Equality): Checks if values and types are equal.
- `!=` (Inequality): Checks if values are not equal (type coercion allowed).
- `!==` (Strict Inequality): Checks if values and types are not equal.
- `<` (Less Than): Checks if the left value is less than the right.
- `>` (Greater Than): Checks if the left value is greater than the right.
- `<=` (Less Than or Equal To): Checks if the left value is less than or equal to the right.
- `>=` (Greater Than or Equal To): Checks if the left value is greater than or equal to the right.

Example:
```javascript
let isEqual = (5 == "5"); // true (type coercion)
let isStrictEqual = (5 === "5"); // false (no type coercion)
let isGreater = (10 > 5); // true
let isLessOrEqual = (5 <= 5); // true
```

#### 3. Logical Operators
Used to combine or invert boolean values:
- `&&` (Logical AND): Returns `true` if both operands are `true`.
- `||` (Logical OR): Returns `true` if at least one operand is `true`.
- `!` (Logical NOT): Inverts the boolean value.

Example:
```javascript
let isAdult = (age >= 18 && age < 60); // true if age is between 18 and 59
let isChildOrSenior = (age < 18 || age >= 60); // true if age is less than 18 or 60 and above
let isNotAdult = !isAdult; // true if isAdult is false
```

#### 4. Assignment Operators
Used to assign values to variables:
- `=` (Assignment): Assigns a value to a variable.
- `+=` (Addition Assignment): Adds a value to the variable and assigns the result.
- `-=` (Subtraction Assignment): Subtracts a value from the variable and assigns the result.
- `*=` (Multiplication Assignment): Multiplies the variable by a value and assigns the result.
- `/=` (Division Assignment): Divides the variable by a value and assigns the result.
- `%=` (Modulus Assignment): Calculates the remainder and assigns the result.

Example:
```javascript
let x = 10;
x += 5; // x = x + 5; x becomes 15
x -= 3; // x = x - 3; x becomes 12
x *= 2; // x = x * 2; x becomes 24
x /= 4; // x = x / 4; x becomes 6
x %= 5; // x = x % 5; x becomes 1
```

#### 5. Other Notable Operators
- **Ternary Operator (`condition ? expr1 : expr2`)**: A shorthand for `if-else`.
    Example:
    ```javascript
    let age = 20;
    let status = (age >= 18) ? "Adult" : "Minor"; // "Adult"
    ```

- **Typeof Operator (`typeof`)**: Returns the type of a variable.
    Example:
    ```javascript
    console.log(typeof 42); // "number"
    console.log(typeof "Hello"); // "string"
    ```

By mastering these operators, you can perform a wide range of operations and write more efficient JavaScript code.

### Control Flow

Control flow in JavaScript determines the order in which statements are executed. It includes conditional statements and loops.

#### Conditional Statements
Conditional statements allow you to execute code based on certain conditions:
- **`if` Statement**: Executes a block of code if the condition is `true`.
- **`else` Statement**: Executes a block of code if the condition is `false`.
- **`else if` Statement**: Specifies a new condition to test if the previous condition is `false`.
- **`switch` Statement**: Evaluates an expression and matches it against multiple cases.

Example:
```javascript
let age = 20;

if (age > 18) {
    console.log("Adult");
} else if (age === 18) {
    console.log("Just turned adult");
} else {
    console.log("Minor");
}

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    default:
        console.log("Midweek");
}
```

#### Loops
Loops allow you to execute a block of code multiple times:
- **`for` Loop**: Executes a block of code a specific number of times.
- **`while` Loop**: Executes a block of code as long as the condition is `true`.
- **`do-while` Loop**: Executes a block of code at least once, then repeats as long as the condition is `true`.
- **`for...of` Loop**: Iterates over iterable objects like arrays.
- **`for...in` Loop**: Iterates over the enumerable properties of an object.

Example:
```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 3) {
    console.log(count); // Outputs: 0, 1, 2
    count++;
}

// do-while loop
let num = 0;
do {
    console.log(num); // Outputs: 0, 1, 2
    num++;
} while (num < 3);

// for...of loop
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit); // Outputs: apple, banana, cherry
}

// for...in loop
const person = { name: "Alice", age: 30 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Outputs: name: Alice, age: 30
}
```

By mastering control flow, you can write more dynamic and efficient JavaScript programs.

---

## Functions

### Function Declaration
- Functions are reusable blocks of code that perform a specific task.
- They are defined using the `function` keyword followed by a name, parentheses `()` for parameters, and curly braces `{}` for the function body.
- Functions can accept parameters and return values.
- Example:
    ```javascript
    function greet(name) {
        return `Hello, ${name}`;
    }

    const message = greet("Alice");
    console.log(message); // Outputs: Hello, Alice
    ```
- If no `return` statement is provided, the function returns `undefined` by default.

### Arrow Functions
- Introduced in ES6, arrow functions provide a shorter syntax for writing functions.
- They are defined using the `=>` (arrow) syntax.
- Arrow functions do not have their own `this` context; they inherit `this` from their surrounding scope.
- Example:
    ```javascript
    const greet = (name) => `Hello, ${name}`;

    console.log(greet("Bob")); // Outputs: Hello, Bob
    ```
- For single-parameter functions, parentheses around the parameter are optional:
    ```javascript
    const square = num => num * num;
    console.log(square(4)); // Outputs: 16
    ```
- For functions with no parameters, use empty parentheses:
    ```javascript
    const sayHello = () => "Hello, World!";
    console.log(sayHello()); // Outputs: Hello, World!
    ```
- For multi-line function bodies, use curly braces `{}` and an explicit `return` statement:
    ```javascript
    const add = (a, b) => {
        const sum = a + b;
        return sum;
    };
    console.log(add(3, 5)); // Outputs: 8
    ```

### Higher-Order Functions
- Higher-order functions are functions that either:
    1. Take other functions as arguments.
    2. Return a function as their result.
- They are commonly used in functional programming and enable powerful abstractions.
- Example 1: Using a higher-order function with `map`:
    ```javascript
    const numbers = [1, 2, 3];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // Outputs: [2, 4, 6]
    ```
- Example 2: Returning a function:
    ```javascript
    function createMultiplier(multiplier) {
        return function (num) {
            return num * multiplier;
        };
    }

    const double = createMultiplier(2);
    console.log(double(5)); // Outputs: 10
    ```
- Example 3: Passing a function as an argument:
    ```javascript
    function applyOperation(arr, operation) {
        return arr.map(operation);
    }

    const square = num => num * num;
    const squaredNumbers = applyOperation([1, 2, 3], square);
    console.log(squaredNumbers); // Outputs: [1, 4, 9]
    ```
- Common higher-order functions in JavaScript include:
    - `map()`: Transforms each element in an array.
    - `filter()`: Filters elements based on a condition.
    - `reduce()`: Reduces an array to a single value.
    - `forEach()`: Iterates over each element in an array.
    - `sort()`: Sorts elements in an array.

By understanding and using functions effectively, you can write modular, reusable, and maintainable JavaScript code.

---

## Objects and Arrays

### Objects
- Key-value pairs used to store structured data.
- Example:
  ```javascript
  const person = {
    name: "Alice",
    age: 30,
    greet() {
       console.log("Hello!");
    }
  };
  ```

### Arrays
- Ordered collections of data.
- Example:
  ```javascript
  const fruits = ["apple", "banana", "cherry"];
  ```

### Destructuring
- Extract values from objects or arrays.
- Example:
  ```javascript
  const { name, age } = person;
  const [firstFruit] = fruits;
  ```

---
## DOM Manipulation

DOM (Document Object Model) Manipulation allows developers to dynamically access, modify, and interact with HTML and CSS elements in a web page. It is a core feature of JavaScript that enables the creation of dynamic and interactive web applications.

### Accessing DOM Elements
To manipulate the DOM, you first need to access the elements. JavaScript provides several methods to select elements:

1. **`document.getElementById()`**
    - Selects an element by its `id`.
    - Example:
      ```javascript
      const heading = document.getElementById("main-heading");
      console.log(heading.textContent); // Logs the text content of the element
      ```

2. **`document.getElementsByClassName()`**
    - Selects all elements with a specific class name. Returns an HTMLCollection.
    - Example:
      ```javascript
      const items = document.getElementsByClassName("list-item");
      console.log(items[0].textContent); // Logs the text content of the first item
      ```

3. **`document.getElementsByTagName()`**
    - Selects all elements with a specific tag name. Returns an HTMLCollection.
    - Example:
      ```javascript
      const paragraphs = document.getElementsByTagName("p");
      console.log(paragraphs.length); // Logs the number of paragraph elements
      ```

4. **`document.querySelector()`**
    - Selects the first element that matches a CSS selector.
    - Example:
      ```javascript
      const heading = document.querySelector(".main-heading");
      console.log(heading.textContent); // Logs the text content of the first matching element
      ```

5. **`document.querySelectorAll()`**
    - Selects all elements that match a CSS selector. Returns a NodeList.
    - Example:
      ```javascript
      const items = document.querySelectorAll(".list-item");
      items.forEach(item => console.log(item.textContent)); // Logs the text content of each item
      ```

### Modifying DOM Elements
Once you have selected an element, you can modify its content, attributes, and styles.

1. **Changing Text Content**
    - Use the `textContent` or `innerHTML` property to modify the text or HTML inside an element.
    - Example:
      ```javascript
      const heading = document.querySelector("h1");
      heading.textContent = "Welcome to JavaScript!";
      ```

2. **Changing Attributes**
    - Use the `setAttribute()` method or direct property assignment to modify attributes.
    - Example:
      ```javascript
      const link = document.querySelector("a");
      link.setAttribute("href", "https://www.example.com");
      link.target = "_blank"; // Direct property assignment
      ```

3. **Changing Styles**
    - Use the `style` property to modify CSS styles.
    - Example:
      ```javascript
      const heading = document.querySelector("h1");
      heading.style.color = "blue";
      heading.style.fontSize = "2rem";
      ```

4. **Adding and Removing Classes**
    - Use the `classList` property to add, remove, toggle, or check for classes.
    - Example:
      ```javascript
      const box = document.querySelector(".box");
      box.classList.add("highlight");
      box.classList.remove("hidden");
      box.classList.toggle("active");
      console.log(box.classList.contains("highlight")); // true
      ```

### Creating and Inserting Elements
You can dynamically create new elements and add them to the DOM.

1. **Creating Elements**
    - Use `document.createElement()` to create a new element.
    - Example:
      ```javascript
      const newParagraph = document.createElement("p");
      newParagraph.textContent = "This is a new paragraph.";
      ```

2. **Appending Elements**
    - Use `appendChild()` or `append()` to add the new element to a parent element.
    - Example:
      ```javascript
      const container = document.querySelector(".container");
      container.appendChild(newParagraph);
      ```

3. **Inserting Elements Before/After**
    - Use `insertBefore()` or `insertAdjacentHTML()` to insert elements at specific positions.
    - Example:
      ```javascript
      const list = document.querySelector("ul");
      const newItem = document.createElement("li");
      newItem.textContent = "New Item";
      list.insertBefore(newItem, list.firstChild); // Inserts as the first child
      ```

4. **Removing Elements**
    - Use `removeChild()` or `remove()` to delete elements.
    - Example:
      ```javascript
      const item = document.querySelector(".list-item");
      item.remove(); // Removes the element from the DOM
      ```

### Event Handling
DOM manipulation often involves responding to user interactions through events.

1. **Adding Event Listeners**
    - Use `addEventListener()` to attach an event handler to an element.
    - Example:
      ```javascript
      const button = document.querySelector("button");
      button.addEventListener("click", () => {
         alert("Button clicked!");
      });
      ```

2. **Removing Event Listeners**
    - Use `removeEventListener()` to detach an event handler.
    - Example:
      ```javascript
      const handleClick = () => alert("Button clicked!");
      button.addEventListener("click", handleClick);
      button.removeEventListener("click", handleClick);
      ```

3. **Event Delegation**
    - Use event delegation to handle events on dynamically added elements.
    - Example:
      ```javascript
      const list = document.querySelector("ul");
      list.addEventListener("click", event => {
         if (event.target.tagName === "LI") {
            console.log(`Clicked on ${event.target.textContent}`);
         }
      });
      ```

### Traversing the DOM
You can navigate between elements in the DOM tree.

1. **Parent Node**
    - Use `parentNode` or `parentElement` to access the parent of an element.
    - Example:
      ```javascript
      const item = document.querySelector(".list-item");
      console.log(item.parentNode); // Logs the parent element
      ```

2. **Child Nodes**
    - Use `childNodes` or `children` to access the child elements.
    - Example:
      ```javascript
      const list = document.querySelector("ul");
      console.log(list.children); // Logs the child elements
      ```

3. **Sibling Nodes**
    - Use `nextSibling`, `previousSibling`, `nextElementSibling`, or `previousElementSibling` to access siblings.
    - Example:
      ```javascript
      const item = document.querySelector(".list-item");
      console.log(item.nextElementSibling); // Logs the next sibling element
      ```

### Performance Considerations
1. **Minimize DOM Access**
    - Accessing the DOM is relatively slow. Cache elements in variables when possible.
    - Example:
      ```javascript
      const heading = document.querySelector("h1");
      heading.textContent = "Updated Text"; // Accessed only once
      ```

2. **Use Document Fragments**
    - Use `DocumentFragment` to batch DOM updates for better performance.
    - Example:
      ```javascript
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < 5; i++) {
         const newItem = document.createElement("li");
         newItem.textContent = `Item ${i + 1}`;
         fragment.appendChild(newItem);
      }
      document.querySelector("ul").appendChild(fragment);
      ```

3. **Debounce and Throttle Events**
    - Use debounce or throttle techniques for events like `scroll` or `resize` to improve performance.

By mastering DOM manipulation, you can create highly interactive and dynamic web applications.

## ES6+ Features

### Template Literals
- Use backticks for string interpolation.
- Example:
  ```javascript
  const message = `Hello, ${name}!`;
  ```

### Modules
- Organize code into reusable files.
- Example:
  ```javascript
  // Export
  export const greet = () => "Hello";
  // Import
  import { greet } from './module.js';
  ```

### Promises and Async/Await
- Handle asynchronous operations.
- Example:
  ```javascript
  const fetchData = async () => {
    const response = await fetch("https://api.example.com");
    const data = await response.json();
    console.log(data);
  };
  ```

---

## Advanced Topics

### Closures
- Functions that remember their lexical scope.
- Example:
  ```javascript
  function outer() {
    let count = 0;
    return function inner() {
       count++;
       return count;
    };
  }
  ```

### Prototypes and Inheritance
- JavaScript uses prototypal inheritance.
- Example:
  ```javascript
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`);
  };
  ```

### Event Loop
- JavaScript uses a single-threaded, non-blocking event loop to handle asynchronous operations.
- Example:
  ```javascript
  console.log("Start");
  setTimeout(() => console.log("Async"), 1000);
  console.log("End");
  ```

### Error Handling
- Handle runtime errors gracefully.
- Example:
  ```javascript
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    console.error(error.message);
  }
  ```

### Asynchronous Programming
- Use callbacks, promises, or async/await for asynchronous tasks.
- Example:
  ```javascript
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  ```

---

## Best Practices
- Use `const` and `let` instead of `var`.
- Write modular, reusable code.
- Use strict equality (`===`) for comparisons.
- Avoid global variables.
- Use meaningful variable and function names.
- Comment your code for better readability.

---

## Resources
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [FreeCodeCamp JavaScript Tutorials](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
