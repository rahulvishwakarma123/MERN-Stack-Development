## Table of Contents

1. [Array Methods](#array-methods-)
    - [map() Method](#map-method)
    - [filter() Method](#filter-method)
    - [every() Method](#every-method)
    - [some() Method](#some-method)
    - [reduce() Method](#reduce-method)
2. [Default Parameters in Functions](#default-parameters-in-functions)
3. [Spread Operator in JavaScript](#spread-operator-in-javascript)
4. [Rest Parameters in JavaScript](#rest-parameters-in-javascript)
5. [`arguments` Keyword in JavaScript Functions](#arguments-keyword-in-javascript-functions)
6. [Destructuring in JavaScript](#destructuring-in-javascript)


# Array Methods :-

## map() Method

The `map()` method creates a new array by applying a provided function to each element of the original array. It does not modify the original array.

### Syntax:
```javascript
array.map(callback(currentValue, index, array), thisArg)
```

- **callback**: A function that is called for every element in the array. It takes the following arguments:
    - `currentValue`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array `map` was called upon.
- **thisArg** (optional): A value to use as `this` when executing the callback.

### Example:
```javascript
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
```

### Key Points:
- Returns a new array.
- Does not mutate the original array.
- Commonly used for transforming data.
- Works on all elements of the array, even if they are `undefined`.

-------------

## filter() Method

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

### Syntax:
```javascript
array.filter(callback(element, index, array), thisArg)
```

- **callback**: A function that is called for every element in the array. It takes the following arguments:
    - `element`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array `filter` was called upon.
- **thisArg** (optional): A value to use as `this` when executing the callback.

### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### Key Points:
- Returns a new array with elements that satisfy the condition.
- Does not mutate the original array.
- Commonly used for filtering data based on a condition.
- Skips elements that do not pass the test.

-----------

## every() Method

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

### Syntax:
```javascript
array.every(callback(element, index, array), thisArg)
```

- **callback**: A function that is called for every element in the array. It takes the following arguments:
    - `element`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array `every` was called upon.
- **thisArg** (optional): A value to use as `this` when executing the callback.

### Example:
```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true
```

### Key Points:
- Returns `true` if all elements satisfy the condition; otherwise, returns `false`.
- Stops iterating as soon as a falsy condition is encountered.
- Does not mutate the original array.
- Commonly used to check if all elements meet a specific criterion.
- Works on all elements of the array, even if they are `undefined`.

--------------------------------------------

## some() Method

The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

### Syntax:
```javascript
array.some(callback(element, index, array), thisArg)
```

- **callback**: A function that is called for every element in the array. It takes the following arguments:
    - `element`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array `some` was called upon.
- **thisArg** (optional): A value to use as `this` when executing the callback.

### Example:
```javascript
const numbers = [1, 3, 5, 8];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true
```

### Key Points:
- Returns `true` if at least one element satisfies the condition; otherwise, returns `false`.
- Stops iterating as soon as a truthy condition is encountered.
- Does not mutate the original array.
- Commonly used to check if any element meets a specific criterion.
- Works on all elements of the array, even if they are `undefined`.

----------------------------------------

## reduce() Method

The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value. It does not modify the original array.

### Syntax:
```javascript
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```

- **callback**: A function that is executed on each element of the array. It takes the following arguments:
    - `accumulator`: The accumulated result from the previous callback execution.
    - `currentValue`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array `reduce` was called upon.
- **initialValue** (optional): A value to use as the first argument to the first call of the callback. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.

### Example:
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10
```

### Key Points:
- Returns a single value based on the logic provided in the callback.
- Does not mutate the original array.
- Commonly used for operations like summing up values, flattening arrays, or building objects.
- If no `initialValue` is provided, the first element of the array is used as the initial accumulator value.
- Throws a `TypeError` if the array is empty and no `initialValue` is provided.

### Advanced Example:
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const totalAge = people.reduce((acc, person) => acc + person.age, 0);
console.log(totalAge); // Output: 90
```

-----------------------------------
# Default Parameters in Functions

Default parameters allow you to initialize function parameters with default values if no value or `undefined` is passed during the function call. This feature simplifies function definitions and avoids the need for additional checks to assign default values.

### Syntax:
```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
    // Function body
}
```

- **param1, param2**: The parameters of the function.
- **defaultValue1, defaultValue2**: The default values assigned to the parameters.

### Example:
```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

### Key Points:
- Default parameters are evaluated at the time of function call.
- If `undefined` is explicitly passed, the default value is used.
- Default parameters can depend on other parameters:
  ```javascript
  function multiply(a, b = a * 2) {
      return a * b;
  }

  console.log(multiply(3)); // Output: 18
  console.log(multiply(3, 4)); // Output: 12
  ```

### Benefits:
- Reduces boilerplate code for assigning default values.
- Makes functions more concise and easier to read.
- Avoids unintended `undefined` values in function logic.

### Notes:
- Default parameters are supported in ES6 and later versions.
- Be cautious when using objects or arrays as default values, as they are shared across function calls:
  ```javascript
  function addItem(item, list = []) {
      list.push(item);
      return list;
  }

  console.log(addItem("apple")); // Output: ["apple"]
  console.log(addItem("banana")); // Output: ["banana"], not ["apple", "banana"]
  ```
- Use `null` or explicit checks if you want to differentiate between `undefined` and other falsy values.

---------------------------

# Spread Operator in JavaScript

The spread operator (`...`) is a feature introduced in ES6 that allows an iterable (like an array or string) to be expanded into individual elements. It is commonly used for copying, merging, or manipulating arrays and objects.

### Syntax:
```javascript
[...iterable]
{...object}
```

### Use Cases:

#### 1. Expanding Arrays:
The spread operator can be used to expand the elements of an array into individual elements.
```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]
```

#### 2. Copying Arrays:
It provides a concise way to create a shallow copy of an array.
```javascript
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // Output: [1, 2, 3]
```

#### 3. Merging Arrays:
You can merge multiple arrays into one.
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4]
```

#### 4. Expanding Strings:
The spread operator can split a string into individual characters.
```javascript
const str = "hello";
const chars = [...str];
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']
```

#### 5. Copying Objects:
It can also be used to create a shallow copy of an object.
```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy); // Output: { a: 1, b: 2 }
```

#### 6. Merging Objects:
You can merge multiple objects into one.
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2 }
```

### Key Points:
- The spread operator creates a shallow copy, meaning nested objects or arrays are still referenced.
- It is useful for immutability in functional programming.
- It can be used with any iterable, including arrays, strings, maps, and sets.

### Notes:
- When merging objects, properties in later objects overwrite those in earlier ones:
    ```javascript
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const merged = { ...obj1, ...obj2 };
    console.log(merged); // Output: { a: 1, b: 3, c: 4 }
    ```
- Be cautious when copying or merging objects with deeply nested structures, as changes to nested properties will affect the original object.

### Example:
```javascript
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };
console.log(updatedUser); // Output: { name: "Alice", age: 26 }
```

The spread operator is a powerful and versatile tool that simplifies working with arrays and objects in JavaScript.

-------------------------
# Rest Parameters in JavaScript

Rest parameters allow a function to accept an indefinite number of arguments as an array. This feature, introduced in ES6, simplifies handling functions with variable arguments.

### Syntax:
```javascript
function functionName(...restParameter) {
    // Function body
}
```

- **restParameter**: A name for the array that will hold the rest of the arguments passed to the function.

### Example:
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Key Points:
1. **Collects Remaining Arguments**:
   - The rest parameter collects all remaining arguments into a single array.
   - It must be the last parameter in the function definition.
   ```javascript
   function example(a, b, ...rest) {
       console.log(a); // First argument
       console.log(b); // Second argument
       console.log(rest); // Remaining arguments as an array
   }

   example(1, 2, 3, 4, 5); 
   // Output:
   // 1
   // 2
   // [3, 4, 5]
   ```

2. **Works with Array Methods**:
   - Since the rest parameter is an array, you can use array methods like `map`, `filter`, and `reduce` on it.

3. **Simplifies Variadic Functions**:
   - Functions that accept a variable number of arguments, such as mathematical operations or logging utilities, benefit from rest parameters.

4. **Cannot Be Used with Default Parameters**:
   - Rest parameters cannot have default values, but they can coexist with other parameters that do.

### Comparison with `arguments` Object:
- The `arguments` object is an array-like object available in non-arrow functions, but it does not support array methods directly.
- Rest parameters are a modern alternative to `arguments` and provide better readability and functionality.

### Example with Mixed Parameters:
```javascript
function greet(greeting, ...names) {
    return `${greeting}, ${names.join(" and ")}!`;
}

console.log(greet("Hello", "Alice", "Bob", "Charlie")); 
// Output: Hello, Alice and Bob and Charlie!
```

### Notes:
- Rest parameters are only available in function definitions, not in other contexts like destructuring.
- They provide a clean and concise way to handle functions with a variable number of arguments.

Rest parameters are a powerful feature that enhances the flexibility and readability of JavaScript functions.

---------------------------------------------

# `arguments` Keyword in JavaScript Functions

The `arguments` keyword is an array-like object available in non-arrow functions. It contains all the arguments passed to the function, regardless of the number of parameters defined in the function.

### Key Characteristics:
1. **Array-Like Object**:
    - The `arguments` object is not a real array but has a structure similar to an array.
    - It has indexed elements and a `length` property but does not inherit array methods like `map`, `filter`, or `reduce`.

2. **Available in Non-Arrow Functions**:
    - The `arguments` object is only accessible in regular functions. It is not available in arrow functions.

3. **Dynamic Access**:
    - You can dynamically access the arguments passed to the function using their index.

### Syntax:
```javascript
function functionName() {
     console.log(arguments);
}
```

### Example:
```javascript
function sum() {
     let total = 0;
     for (let i = 0; i < arguments.length; i++) {
          total += arguments[i];
     }
     return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Key Points:
- **No Explicit Parameters Required**:
  - The `arguments` object is available even if the function does not define any parameters.
  ```javascript
  function logArguments() {
        console.log(arguments);
  }

  logArguments(1, "hello", true); 
  // Output: [1, "hello", true]
  ```

- **Not Available in Arrow Functions**:
  - Arrow functions do not have their own `arguments` object. Instead, they inherit `arguments` from their enclosing function (if any).
  ```javascript
  const arrowFunction = () => {
        console.log(arguments); // Throws a ReferenceError
  };
  ```

- **Use Cases**:
  - Useful for handling functions with a variable number of arguments in older JavaScript versions (before ES6 introduced rest parameters).

### Limitations:
1. **Not an Array**:
    - Since `arguments` is not a real array, you cannot directly use array methods on it. You need to convert it to an array first:
    ```javascript
    function example() {
         const argsArray = Array.from(arguments);
         console.log(argsArray.map(arg => arg * 2));
    }

    example(1, 2, 3); // Output: [2, 4, 6]
    ```

2. **Less Readable**:
    - Using `arguments` can make code less readable compared to using rest parameters (`...args`), which are more explicit and modern.

### Comparison with Rest Parameters:
| Feature            | `arguments`          | Rest Parameters (`...args`) |
|---------------------|----------------------|-----------------------------|
| Type               | Array-like object    | Array                       |
| Availability       | Non-arrow functions  | All functions               |
| Supports Array Methods | No               | Yes                         |
| Readability        | Less explicit        | More explicit               |

### Example with Rest Parameters:
```javascript
function sum(...numbers) {
     return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Notes:
- The `arguments` object is still widely used in legacy code but is generally replaced by rest parameters in modern JavaScript.
- Avoid using `arguments` in new code to ensure better readability and maintainability.

The `arguments` keyword is a legacy feature that provides access to all arguments passed to a function but is less flexible compared to modern alternatives like rest parameters.

------------------------------
# Destructuring in JavaScript

Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It simplifies the process of extracting data and makes the code more readable and concise.

## Array Destructuring

Array destructuring allows you to extract values from an array and assign them to variables.

#### Syntax:
```javascript
const [var1, var2, ...rest] = array;
```

#### Example:
```javascript
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4]
```

### Skipping Elements:
You can skip elements in the array by leaving empty spaces between commas.
```javascript
const numbers = [1, 2, 3, 4];
const [, second, , fourth] = numbers;

console.log(second); // Output: 2
console.log(fourth); // Output: 4
```

### Default Values:
You can assign default values to variables in case the array does not have enough elements.
```javascript
const numbers = [1];
const [first, second = 0] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 0
```

---

## Object Destructuring

Object destructuring allows you to extract properties from an object and assign them to variables.

#### Syntax:
```javascript
const { prop1, prop2: alias, ...rest } = object;
```

#### Example:
```javascript
const user = { name: "Alice", age: 25, city: "New York" };
const { name, age } = user;

console.log(name); // Output: Alice
console.log(age); // Output: 25
```

#### Renaming Variables:
You can rename variables while destructuring using the `:` syntax.
```javascript
const user = { name: "Alice", age: 25 };
const { name: userName, age: userAge } = user;

console.log(userName); // Output: Alice
console.log(userAge); // Output: 25
```

#### Default Values:
You can assign default values to variables in case the property does not exist in the object.
```javascript
const user = { name: "Alice" };
const { name, age = 30 } = user;

console.log(name); // Output: Alice
console.log(age); // Output: 30
```

#### Nested Destructuring:
You can destructure nested objects.
```javascript
const user = { name: "Alice", address: { city: "New York", zip: 10001 } };
const { address: { city, zip } } = user;

console.log(city); // Output: New York
console.log(zip); // Output: 10001
```

---

### Mixed Destructuring

You can combine array and object destructuring.
```javascript
const data = { items: [1, 2, 3], user: { name: "Alice" } };
const { items: [firstItem], user: { name } } = data;

console.log(firstItem); // Output: 1
console.log(name); // Output: Alice
```

---

### Function Parameters Destructuring

Destructuring can be used directly in function parameters to extract values or properties.

#### Example with Arrays:
```javascript
function sum([a, b]) {
    return a + b;
}

console.log(sum([1, 2])); // Output: 3
```

#### Example with Objects:
```javascript
function greet({ name, age }) {
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet({ name: "Alice", age: 25 })); 
// Output: Hello, Alice. You are 25 years old.
```

---

### Key Points:
- Destructuring makes code more concise and readable.
- It works with arrays, objects, and nested structures.
- Default values can be assigned to handle missing data.
- It is commonly used in modern JavaScript for cleaner and more maintainable code.

Destructuring is a powerful feature that simplifies working with complex data structures in JavaScript.