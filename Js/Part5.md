# JavaScript Objects

JavaScript objects are collections of key-value pairs. They are used to store and organize data and can represent real-world entities.

## Creating an Object
Objects can be created using:
1. **Object Literals**:
    ```javascript
    const person = {
         name: "John",
         age: 30,
         isEmployed: true
    };
    ```

2. **Constructor Function**:
    ```javascript
    function Person(name, age) {
         this.name = name;
         this.age = age;
    }
    const person = new Person("John", 30);
    ```

3. **`Object.create()`**:
    ```javascript
    const prototype = { greet: function() { console.log("Hello!"); } };
    const obj = Object.create(prototype);
    ```

## Accessing Properties
- **Dot Notation**:
  ```javascript
  console.log(person.name); // John
  ```
- **Bracket Notation**:
  ```javascript
  console.log(person["age"]); // 30
  ```

## Adding and Modifying Properties
```javascript
person.job = "Developer"; // Add
person.age = 31; // Modify
```

## Deleting Properties
```javascript
delete person.isEmployed;
```

## Methods in Objects
Objects can have functions as properties, called methods:
```javascript
const car = {
     brand: "Toyota",
     start: function() {
          console.log("Car started");
     }
};
car.start(); // Car started
```

## Iterating Over Objects
- **`for...in` Loop**:
  ```javascript
  for (let key in person) {
        console.log(key, person[key]);
  }
  ```
- **`Object.keys()`**:
  ```javascript
  Object.keys(person).forEach(key => console.log(key));
  ```

## Object Destructuring
```javascript
const { name, age } = person;
console.log(name, age); // John 30
```

## Object Spread and Rest
- **Spread**:
  ```javascript
  const newPerson = { ...person, city: "New York" };
  ```
- **Rest**:
  ```javascript
  const { name, ...rest } = person;
  ```

## Object Methods
- **`Object.keys()`**: Returns an array of keys.
- **`Object.values()`**: Returns an array of values.
- **`Object.entries()`**: Returns an array of key-value pairs.

## Nested Objects
Objects can contain other objects:
```javascript
const employee = {
     name: "Alice",
     address: {
          city: "Seattle",
          zip: 98101
     }
};
console.log(employee.address.city); // Seattle
```

## JavaScript Math Object

The JavaScript `Math` object provides a collection of mathematical constants, functions, and methods to perform mathematical operations. It is a built-in object and does not need to be instantiated.

### Common Math Properties
The `Math` object includes several mathematical constants:
- **`Math.PI`**: The value of π (approximately 3.14159).
  ```javascript
  console.log(Math.PI); // 3.141592653589793
  ```
- **`Math.E`**: Euler's number (approximately 2.718).
  ```javascript
  console.log(Math.E); // 2.718281828459045
  ```
- **`Math.LN2`**: Natural logarithm of 2.
- **`Math.LN10`**: Natural logarithm of 10.
- **`Math.SQRT2`**: Square root of 2.

### Common Math Methods
The `Math` object provides various methods for calculations:

#### Rounding Numbers
- **`Math.round()`**: Rounds to the nearest integer.
  ```javascript
  console.log(Math.round(4.7)); // 5
  console.log(Math.round(4.4)); // 4
  ```
- **`Math.ceil()`**: Rounds up to the next integer.
  ```javascript
  console.log(Math.ceil(4.1)); // 5
  ```
- **`Math.floor()`**: Rounds down to the previous integer.
  ```javascript
  console.log(Math.floor(4.9)); // 4
  ```

#### Generating Random Numbers
- **`Math.random()`**: Returns a random number between 0 (inclusive) and 1 (exclusive).
  ```javascript
  console.log(Math.random()); // Example: 0.123456789
  ```
  To generate a random number within a range:
  ```javascript
  const randomNum = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
  ```

#### Absolute Value
- **`Math.abs()`**: Returns the absolute value of a number.
  ```javascript
  console.log(Math.abs(-5)); // 5
  ```

#### Power and Roots
- **`Math.pow()`**: Raises a number to a power.
  ```javascript
  console.log(Math.pow(2, 3)); // 8
  ```
- **`Math.sqrt()`**: Returns the square root of a number.
  ```javascript
  console.log(Math.sqrt(16)); // 4
  ```

#### Trigonometric Functions
- **`Math.sin()`**: Sine of an angle (in radians).
- **`Math.cos()`**: Cosine of an angle (in radians).
- **`Math.tan()`**: Tangent of an angle (in radians).
  ```javascript
  console.log(Math.sin(Math.PI / 2)); // 1
  ```

#### Logarithmic and Exponential Functions
- **`Math.log()`**: Natural logarithm (base e).
  ```javascript
  console.log(Math.log(Math.E)); // 1
  ```
- **`Math.exp()`**: Exponential function (e^x).
  ```javascript
  console.log(Math.exp(1)); // 2.718281828459045
  ```

#### Minimum and Maximum
- **`Math.min()`**: Returns the smallest value from a list of numbers.
  ```javascript
  console.log(Math.min(3, 5, 1, 8)); // 1
  ```
- **`Math.max()`**: Returns the largest value from a list of numbers.
  ```javascript
  console.log(Math.max(3, 5, 1, 8)); // 8
  ```

### Practical Examples
1. **Calculating the Area of a Circle**:
   ```javascript
   const radius = 5;
   const area = Math.PI * Math.pow(radius, 2);
   console.log(area); // 78.53981633974483
   ```

2. **Simulating a Dice Roll**:
   ```javascript
   const diceRoll = Math.floor(Math.random() * 6) + 1;
   console.log(diceRoll); // Random number between 1 and 6
   ```

The `Math` object is a powerful tool for performing mathematical operations in JavaScript, making it essential for many applications.

JavaScript objects are versatile and form the backbone of many programming paradigms in the language.