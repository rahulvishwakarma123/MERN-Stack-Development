# JavaScript Loops

## Table of Contents
1. [Types of Loops](#types-of-loops)
    - [for Loop](#1-for-loop)
    - [while Loop](#2-while-loop)
    - [do...while Loop](#3-dowhile-loop)
    - [for...in Loop](#4-forin-loop)
    - [for...of Loop](#5-forof-loop)
2. [Nested Loops](#nested-loops)
3. [Control Statements in Loops](#control-statements-in-loops)
    - [break Statement](#break-statement)
    - [continue Statement](#continue-statement)
4. [Summary](#summary)

## Types of Loops

### 1. **for Loop**
The `for` loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.

```javascript
for (let i = 0; i < 5; i++) {
     console.log(i); // Outputs: 0, 1, 2, 3, 4
}
```

- **Initialization**: `let i = 0` sets the starting point.
- **Condition**: `i < 5` ensures the loop runs while the condition is true.
- **Increment/Decrement**: `i++` updates the counter after each iteration.

### 2. **while Loop**
The `while` loop executes as long as the specified condition evaluates to `true`. It is useful when the number of iterations is not predetermined.

```javascript
let i = 0;
while (i < 5) {
     console.log(i); // Outputs: 0, 1, 2, 3, 4
     i++;
}
```

- The condition is checked before each iteration.
- If the condition is `false` initially, the loop will not execute.

### 3. **do...while Loop**
The `do...while` loop is similar to the `while` loop, but it guarantees that the block of code is executed at least once before the condition is checked.

```javascript
let i = 0;
do {
     console.log(i); // Outputs: 0, 1, 2, 3, 4
     i++;
} while (i < 5);
```

- The condition is evaluated after the loop body executes.

### 4. **for...in Loop**
The `for...in` loop is used to iterate over the enumerable properties of an object.

```javascript
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
     console.log(key, obj[key]); // Outputs: a 1, b 2, c 3
}
```

- Iterates over keys in an object.
- Avoid using it for arrays as it may not maintain the order of elements.

### 5. **for...of Loop**
The `for...of` loop is designed to iterate over iterable objects like arrays, strings, maps, and sets.

```javascript
const arr = [1, 2, 3];
for (let value of arr) {
     console.log(value); // Outputs: 1, 2, 3
}
```

- Provides direct access to the values of the iterable.
- Cannot be used with objects unless they implement the iterable protocol.

## Nested Loops

Nested loops are loops inside other loops. They are useful for working with multi-dimensional data structures like matrices.

```javascript
for (let i = 0; i < 3; i++) {
     for (let j = 0; j < 3; j++) {
          console.log(`i: ${i}, j: ${j}`);
     }
}
```

- The outer loop runs first, and for each iteration of the outer loop, the inner loop runs completely.
- Be cautious with nested loops as they can lead to performance issues for large datasets.

## Control Statements in Loops

### **break Statement**
The `break` statement is used to exit a loop prematurely, regardless of the condition.

```javascript
for (let i = 0; i < 5; i++) {
     if (i === 3) break;
     console.log(i); // Outputs: 0, 1, 2
}
```

- Stops the loop when the condition is met.

### **continue Statement**
The `continue` statement skips the current iteration and proceeds to the next one.

```javascript
for (let i = 0; i < 5; i++) {
     if (i === 3) continue;
     console.log(i); // Outputs: 0, 1, 2, 4
}
```

- Useful for skipping specific iterations without terminating the loop.

## Summary
JavaScript loops and control statements provide powerful tools for handling repetitive tasks and iterating over data structures. By understanding their behavior and use cases, you can write efficient and concise code.