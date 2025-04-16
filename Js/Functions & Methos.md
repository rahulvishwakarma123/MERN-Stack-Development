# Functions in JavaScript

Functions in JavaScript are reusable blocks of code designed to perform a specific task. They help in organizing code, improving readability, and reducing redundancy.

## Types of Functions

1. **Function Declaration**  
    A named function that can be called anywhere in the code due to hoisting.
    ```javascript
    function greet(name) {
         return `Hello, ${name}!`;
    }
    console.log(greet("Alice"));
    ```

2. **Function Expression**  
    A function assigned to a variable. It is not hoisted.
    ```javascript
    const greet = function(name) {
         return `Hello, ${name}!`;
    };
    console.log(greet("Bob"));
    ```

3. **Arrow Function**  
    A concise syntax introduced in ES6.
    ```javascript
    const greet = (name) => `Hello, ${name}!`;
    console.log(greet("Charlie"));
    ```

4. **Anonymous Function**  
    A function without a name, often used as a callback.
    ```javascript
    setTimeout(function() {
         console.log("This is an anonymous function.");
    }, 1000);
    ```

5. **Immediately Invoked Function Expression (IIFE)**  
    A function that runs as soon as it is defined.
    ```javascript
    (function() {
         console.log("IIFE executed!");
    })();
    ```

## Key Features of Functions

- **Parameters and Arguments**: Functions can accept inputs (parameters) and use them within the function body.
- **Return Statement**: Functions can return a value using the `return` keyword.
- **Default Parameters**: ES6 allows setting default values for parameters.
  ```javascript
  function greet(name = "Guest") {
        return `Hello, ${name}!`;
  }
  console.log(greet());
  ```

## Higher-Order Functions

Functions that take other functions as arguments or return functions are called higher-order functions.
```javascript
function operate(a, b, callback) {
    return callback(a, b);
}
const sum = (x, y) => x + y;
console.log(operate(5, 3, sum)); // Output: 8
```


## Functions with Arguments

Functions in JavaScript can accept inputs, known as arguments, which are passed to the function when it is invoked. These arguments are used within the function to perform operations or calculations.

### Example:
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
```

### Key Points:
- **Multiple Arguments**: A function can accept multiple arguments separated by commas.
- **Order Matters**: The order in which arguments are passed must match the order of parameters in the function definition.
- **Dynamic Typing**: JavaScript does not enforce argument types, allowing flexibility but requiring caution.

### Rest Parameters:
ES6 introduced rest parameters to handle an indefinite number of arguments.
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

Using arguments effectively allows functions to be more versatile and reusable.


## The `return` Keyword

The `return` keyword is used to specify the value a function should output when it is called. Once the `return` statement is executed, the function stops further execution and returns the specified value.

### Example:
```javascript
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20
```

### Key Points:
- A function without a `return` statement returns `undefined`.
- `return` can be used to exit a function early.
- Only one value can be returned, but objects or arrays can be used to return multiple values.

## Scope in JavaScript

Scope in JavaScript refers to the accessibility of variables, functions, and objects in different parts of the code. It determines where a variable can be accessed or modified.

### Types of Scope

1. **Global Scope**  
    Variables declared outside any function or block have global scope and can be accessed from anywhere in the code.
    ```javascript
    let globalVar = "I am global";
    function showGlobal() {
         console.log(globalVar);
    }
    showGlobal(); // Output: I am global
    ```

2. **Local Scope**  
    Variables declared inside a function are local to that function and cannot be accessed outside of it.
    ```javascript
    function localScope() {
         let localVar = "I am local";
         console.log(localVar);
    }
    localScope(); // Output: I am local
    // console.log(localVar); // Error: localVar is not defined
    ```

3. **Block Scope**  
    Variables declared with `let` or `const` inside a block (`{}`) are block-scoped and cannot be accessed outside the block.
    ```javascript
    {
         let blockVar = "I am block-scoped";
         console.log(blockVar); // Output: I am block-scoped
    }
    // console.log(blockVar); // Error: blockVar is not defined
    ```

4. **Function Scope**  
    Variables declared with `var` are function-scoped, meaning they are accessible throughout the function in which they are declared.
    ```javascript
    function funcScope() {
         if (true) {
              var funcVar = "I am function-scoped";
         }
         console.log(funcVar); // Output: I am function-scoped
    }
    funcScope();
    ```

### Lexical Scope

JavaScript uses lexical scoping, meaning the scope of a variable is determined by its position in the source code. Inner functions have access to variables in their outer functions.
```javascript
function outer() {
     let outerVar = "I am outer";
     function inner() {
          console.log(outerVar);
     }
     inner(); // Output: I am outer
}
outer();
```

### Scope Chain

When a variable is accessed, JavaScript searches for it in the current scope. If not found, it moves to the outer scope, continuing until it reaches the global scope or encounters an error.
```javascript
let globalVar = "Global";
function outer() {
     let outerVar = "Outer";
     function inner() {
          let innerVar = "Inner";
          console.log(globalVar); // Output: Global
          console.log(outerVar); // Output: Outer
          console.log(innerVar); // Output: Inner
     }
     inner();
}
outer();
```

Understanding scope is essential for writing clean, bug-free code and avoiding issues like variable shadowing or unintended global variables.


Functions are a core part of JavaScript, enabling modular, maintainable, and efficient code.


# Methods in JavaScript

Methods in JavaScript are functions that are associated with objects. They allow objects to perform actions or manipulate their properties.

## Defining Methods

Methods are defined as properties of an object, where the value is a function.

### Example:
```javascript
const person = {
    name: "Alice",
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
};
console.log(person.greet()); // Output: Hello, my name is Alice.
```

## Shorthand Syntax (ES6)
ES6 introduced a shorthand syntax for defining methods in objects.
```javascript
const person = {
    name: "Bob",
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};
console.log(person.greet()); // Output: Hello, my name is Bob.
```

## `this` Keyword in Methods

The `this` keyword refers to the object that is calling the method. It allows methods to access and manipulate the object's properties.

### Example:
```javascript
const car = {
    brand: "Toyota",
    model: "Corolla",
    getDetails() {
        return `${this.brand} ${this.model}`;
    }
};
console.log(car.getDetails()); // Output: Toyota Corolla
```

## Common Built-in Methods

JavaScript provides several built-in methods for different data types:

1. **String Methods**  
   Examples: `toUpperCase()`, `toLowerCase()`, `trim()`, `slice()`
   ```javascript
   let str = " Hello ";
   console.log(str.trim()); // Output: "Hello"
   ```

2. **Array Methods**  
   Examples: `push()`, `pop()`, `map()`, `filter()`
   ```javascript
   let numbers = [1, 2, 3];
   console.log(numbers.map(num => num * 2)); // Output: [2, 4, 6]
   ```

3. **Object Methods**  
   Examples: `Object.keys()`, `Object.values()`, `Object.entries()`
   ```javascript
   let obj = { a: 1, b: 2 };
   console.log(Object.keys(obj)); // Output: ["a", "b"]
   ```

4. **Math Methods**  
   Examples: `Math.max()`, `Math.min()`, `Math.random()`
   ```javascript
   console.log(Math.max(1, 5, 3)); // Output: 5
   ```

## Adding Methods to Prototypes

Methods can be added to prototypes to make them available to all instances of a particular object type.
```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}.`;
};
const alice = new Person("Alice");
console.log(alice.greet()); // Output: Hello, my name is Alice.
```

Methods are a powerful feature in JavaScript, enabling objects to encapsulate behavior and interact with their properties effectively.