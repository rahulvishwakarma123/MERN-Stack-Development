## Table of Contents
- [JavaScript: Strings and Arrays](#javascript-strings-and-arrays)
    - [Strings](#strings)
        - [What is a String?](#what-is-a-string)
        - [Immutability of Strings](#immutability-of-strings)
        - [Creating a String](#creating-a-string)
        - [Common String Methods](#common-string-methods)
            - [`length`](#length)
            - [`toUpperCase()`](#touppercase)
            - [`toLowerCase()`](#tolowercase)
            - [`trim()`](#trim)
            - [`slice(start, end)`](#slicestart-end)
            - [`substring(start, end)`](#substringstart-end)
            - [`replace(searchValue, newValue)`](#replacesearchvalue-newvalue)
            - [`split(separator)`](#splitseparator)
            - [`includes(substring)`](#includessubstring)
            - [`indexOf(substring)`](#indexofsubstring)
        - [Example](#example)
    - [Arrays](#arrays)
        - [What is an Array?](#what-is-an-array)
        - [Creating an Array](#creating-an-array)
        - [Accessing Array Elements](#accessing-array-elements)
        - [Common Array Methods](#common-array-methods)
            - [`length`](#length-1)
            - [`push(element)`](#pushelement)
            - [`pop()`](#pop)
            - [`shift()`](#shift)
            - [`unshift(element)`](#unshiftelement)
            - [`slice(start, end)`](#slicestart-end-1)
            - [`splice(start, deleteCount, ...items)`](#splicestart-deletecount-items)
            - [`sort(compareFunction)`](#sortcomparefunction)
            - [`reverse()`](#reverse)
        - [Array References](#array-references)
            - [Assigning Arrays](#assigning-arrays)
            - [Comparing Arrays](#comparing-arrays)
            - [Copying Arrays](#copying-arrays)
            - [Passing Arrays to Functions](#passing-arrays-to-functions)
        - [Multidimensional Arrays (Nested Arrays)](#multidimensional-arrays-nested-arrays)
            - [Creating a Multidimensional Array](#creating-a-multidimensional-array)
            - [Accessing Elements in a Multidimensional Array](#accessing-elements-in-a-multidimensional-array)
            - [Iterating Over a Multidimensional Array](#iterating-over-a-multidimensional-array)
            - [Common Use Cases](#common-use-cases)
            - [Example: Summing All Elements in a Multidimensional Array](#example-summing-all-elements-in-a-multidimensional-array)
            - [Example: Flattening a Multidimensional Array](#example-flattening-a-multidimensional-array)
        - [Example](#example-1)



# JavaScript: Strings and Arrays

## Strings

### What is a String?
A string is a sequence of characters used to represent text. Strings are immutable in JavaScript.

### Immutability of Strings
Strings in JavaScript are immutable, meaning their content cannot be changed after they are created. Any operation that appears to modify a string actually creates a new string.

```javascript
let str = "Hello";
let newStr = str.toUpperCase();
console.log(str); // "Hello" (original string remains unchanged)
console.log(newStr); // "HELLO" (new string is created)
```

### Creating a String
```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}`;
```

### Common String Methods
- `length`: Returns the number of characters in the string.
    ```javascript
    let str = "Hello";
    console.log(str.length); // 5
    ```

    ```javascript
    let emptyStr = "";
    console.log(emptyStr.length); // 0
    ```

    ```javascript
    let sentence = "JavaScript is fun!";
    console.log(sentence.length); // 19
    ```

- `toUpperCase()`: Converts all characters in the string to uppercase.
    ```javascript
    let str = "hello";
    console.log(str.toUpperCase()); // "HELLO"
    ```

    ```javascript
    let mixedCase = "JavaScript";
    console.log(mixedCase.toUpperCase()); // "JAVASCRIPT"
    ```

    ```javascript
    let greeting = "good morning";
    console.log(greeting.toUpperCase()); // "GOOD MORNING"
    ```

- `toLowerCase()`: Converts all characters in the string to lowercase.
    ```javascript
    let str = "HELLO";
    console.log(str.toLowerCase()); // "hello"
    ```

    ```javascript
    let mixedCase = "JavaScript";
    console.log(mixedCase.toLowerCase()); // "javascript"
    ```

    ```javascript
    let shout = "I LOVE CODING!";
    console.log(shout.toLowerCase()); // "i love coding!"
    ```

- `trim()`: Removes whitespace from both ends of the string.
    ```javascript
    let str = "  Hello  ";
    console.log(str.trim()); // "Hello"
    ```

    ```javascript
    let padded = "   JavaScript   ";
    console.log(padded.trim()); // "JavaScript"
    ```

    ```javascript
    let sentence = "   Learn to code!   ";
    console.log(sentence.trim()); // "Learn to code!"
    ```

- `slice(start, end)`: Extracts a section of the string from `start` to `end` (end not included).
    ```javascript
    let str = "Hello, World!";
    console.log(str.slice(0, 5)); // "Hello"
    ```

    ```javascript
    let str = "JavaScript";
    console.log(str.slice(4)); // "Script"
    ```

    ```javascript
    let str = "Frontend Development";
    console.log(str.slice(0, 8)); // "Frontend"
    ```

- `substring(start, end)`: Similar to `slice`, but does not accept negative indices.
    ```javascript
    let str = "Hello, World!";
    console.log(str.substring(0, 5)); // "Hello"
    ```

    ```javascript
    let str = "JavaScript";
    console.log(str.substring(4)); // "Script"
    ```

    ```javascript
    let str = "Frontend Development";
    console.log(str.substring(0, 8)); // "Frontend"
    ```

- `replace(searchValue, newValue)`: Replaces the first occurrence of `searchValue` with `newValue`.
    ```javascript
    let str = "Hello, World!";
    console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
    ```

    ```javascript
    let str = "I love cats!";
    console.log(str.replace("cats", "dogs")); // "I love dogs!"
    ```

    ```javascript
    let str = "Frontend is fun!";
    console.log(str.replace("Frontend", "Backend")); // "Backend is fun!"
    ```

- `split(separator)`: Splits the string into an array of substrings based on the `separator`.
    ```javascript
    let str = "apple,banana,cherry";
    console.log(str.split(",")); // ["apple", "banana", "cherry"]
    ```

    ```javascript
    let sentence = "Learn JavaScript step by step";
    console.log(sentence.split(" ")); // ["Learn", "JavaScript", "step", "by", "step"]
    ```

    ```javascript
    let str = "a-b-c-d";
    console.log(str.split("-")); // ["a", "b", "c", "d"]
    ```

- `includes(substring)`: Checks if the string contains the specified `substring`.
    ```javascript
    let str = "Hello, World!";
    console.log(str.includes("World")); // true
    ```

    ```javascript
    let sentence = "JavaScript is awesome!";
    console.log(sentence.includes("awesome")); // true
    ```

    ```javascript
    let str = "Frontend Development";
    console.log(str.includes("Backend")); // false
    ```

- `indexOf(substring)`: Returns the index of the first occurrence of `substring`, or `-1` if not found.
    ```javascript
    let str = "Hello, World!";
    console.log(str.indexOf("World")); // 7
    ```

    ```javascript
    let sentence = "JavaScript is fun!";
    console.log(sentence.indexOf("fun")); // 15
    ```

    ```javascript
    let str = "Frontend Development";
    console.log(str.indexOf("Backend")); // -1
    ```

### Example
```javascript
let greeting = "  Hello, World!  ";
let trimmed = greeting.trim();
console.log(trimmed.toUpperCase()); // "HELLO, WORLD!"

let sentence = "JavaScript is fun!";
console.log(sentence.includes("fun")); // true
console.log(sentence.indexOf("JavaScript")); // 0
```

## Arrays

### What is an Array?
An array is a data structure used to store multiple values in a single variable. Arrays in JavaScript are dynamic and can hold values of different types.

### Creating an Array
```javascript
let emptyArray = [];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", true, null];
```

### Accessing Array Elements
Array elements are accessed using their index, starting from `0`.
```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"
```

### Common Array Methods
- `length`: Returns the number of elements in the array.
    ```javascript
    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits.length); // 3
    ```

    ```javascript
    let emptyArray = [];
    console.log(emptyArray.length); // 0
    ```

    ```javascript
    let mixedArray = [1, "two", true, null];
    console.log(mixedArray.length); // 4
    ```

- `push(element)`: Adds an element to the end of the array.
    ```javascript
    let fruits = ["apple", "banana"];
    fruits.push("cherry");
    console.log(fruits); // ["apple", "banana", "cherry"]
    ```

    ```javascript
    let numbers = [1, 2, 3];
    numbers.push(4, 5);
    console.log(numbers); // [1, 2, 3, 4, 5]
    ```

    ```javascript
    let emptyArray = [];
    emptyArray.push("first");
    console.log(emptyArray); // ["first"]
    ```

- `pop()`: Removes the last element from the array and returns it.
    ```javascript
    let fruits = ["apple", "banana", "cherry"];
    let lastFruit = fruits.pop();
    console.log(lastFruit); // "cherry"
    console.log(fruits); // ["apple", "banana"]
    ```

    ```javascript
    let numbers = [1, 2, 3, 4];
    let lastNumber = numbers.pop();
    console.log(lastNumber); // 4
    console.log(numbers); // [1, 2, 3]
    ```

    ```javascript
    let emptyArray = [];
    console.log(emptyArray.pop()); // undefined
    ```

- `shift()`: Removes the first element from the array and returns it.
    ```javascript
    let fruits = ["apple", "banana", "cherry"];
    let firstFruit = fruits.shift();
    console.log(firstFruit); // "apple"
    console.log(fruits); // ["banana", "cherry"]
    ```

    ```javascript
    let numbers = [1, 2, 3, 4];
    let firstNumber = numbers.shift();
    console.log(firstNumber); // 1
    console.log(numbers); // [2, 3, 4]
    ```

    ```javascript
    let emptyArray = [];
    console.log(emptyArray.shift()); // undefined
    ```

- `unshift(element)`: Adds an element to the beginning of the array.
    ```javascript
    let fruits = ["banana", "cherry"];
    fruits.unshift("apple");
    console.log(fruits); // ["apple", "banana", "cherry"]
    ```

    ```javascript
    let numbers = [2, 3, 4];
    numbers.unshift(1);
    console.log(numbers); // [1, 2, 3, 4]
    ```

    ```javascript
    let emptyArray = [];
    emptyArray.unshift("first");
    console.log(emptyArray); // ["first"]
    ```

- `slice(start, end)`: Returns a shallow copy of a portion of the array.
    ```javascript
    let fruits = ["apple", "banana", "cherry", "date"];
    console.log(fruits.slice(1, 3)); // ["banana", "cherry"]
    console.log(fruits.slice(-2)); // ["cherry", "date"]
    console.log(fruits.slice()); // ["apple", "banana", "cherry", "date"] (copy of the array)
    ```

    ```javascript
    let letters = ["a", "b", "c", "d", "e"];
    console.log(letters.slice(0, 4)); // ["a", "b", "c", "d"]
    console.log(letters.slice(-3)); // ["c", "d", "e"]
    ```

- `splice(start, deleteCount, ...items)`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

    - **Parameters**:
        - `start`: The index at which to start changing the array.
        - `deleteCount`: The number of elements to remove from the array (optional).
        - `...items`: The elements to add to the array (optional).

    - **Returns**: An array containing the deleted elements (if any).

    ```javascript
    // Removing elements
    let fruits = ["apple", "banana", "cherry", "date"];
    let removed = fruits.splice(1, 2); // Removes 2 elements starting from index 1
    console.log(fruits); // ["apple", "date"]
    console.log(removed); // ["banana", "cherry"]
    ```

    ```javascript
    // Adding elements
    let fruits = ["apple", "date"];
    fruits.splice(1, 0, "banana", "cherry"); // Adds "banana" and "cherry" at index 1
    console.log(fruits); // ["apple", "banana", "cherry", "date"]
    ```

    ```javascript
    // Replacing elements
    let fruits = ["apple", "banana", "cherry", "date"];
    let replaced = fruits.splice(1, 2, "kiwi", "mango"); // Replaces 2 elements starting from index 1
    console.log(fruits); // ["apple", "kiwi", "mango", "date"]
    console.log(replaced); // ["banana", "cherry"]
    ```

    ```javascript
    // Removing all elements from a specific index
    let numbers = [1, 2, 3, 4, 5];
    numbers.splice(2); // Removes all elements starting from index 2
    console.log(numbers); // [1, 2]
    ```

    ```javascript
    // Using negative indices
    let letters = ["a", "b", "c", "d", "e"];
    letters.splice(-2, 1); // Removes 1 element starting from the second-to-last index
    console.log(letters); // ["a", "b", "c", "e"]
    ```

    ```javascript
    // Adding and removing simultaneously
    let colors = ["red", "green", "blue"];
    colors.splice(1, 1, "yellow", "purple"); // Removes 1 element at index 1 and adds 2 elements
    console.log(colors); // ["red", "yellow", "purple", "blue"]
    ```

    - **Key Points**:
        - `splice` modifies the original array.
        - It can be used to add, remove, or replace elements in an array.
        - Negative indices count from the end of the array.


- `sort(compareFunction)`: Sorts the elements of an array in place and returns the sorted array.

    - **Parameters**:
        - `compareFunction` (optional): A function that defines the sort order. If omitted, the array elements are converted to strings and sorted in ascending Unicode order.

    - **Returns**: The sorted array.

    ```javascript
    // Sorting numbers in ascending order
    let numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => a - b);
    console.log(numbers); // [1, 2, 3, 4, 5]
    ```

    ```javascript
    // Sorting numbers in descending order
    let numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => b - a);
    console.log(numbers); // [5, 4, 3, 2, 1]
    ```

    ```javascript
    // Sorting strings alphabetically
    let fruits = ["banana", "apple", "cherry"];
    fruits.sort();
    console.log(fruits); // ["apple", "banana", "cherry"]
    ```

    ```javascript
    // Sorting strings in reverse alphabetical order
    let fruits = ["banana", "apple", "cherry"];
    fruits.sort((a, b) => b.localeCompare(a));
    console.log(fruits); // ["cherry", "banana", "apple"]
    ```

    ```javascript
    // Sorting objects by a property
    let people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 20 },
        { name: "Charlie", age: 30 }
    ];
    people.sort((a, b) => a.age - b.age);
    console.log(people);
    // [
    //   { name: "Bob", age: 20 },
    //   { name: "Alice", age: 25 },
    //   { name: "Charlie", age: 30 }
    // ]
    ```

    ```javascript
    // Sorting with mixed case strings
    let words = ["Banana", "apple", "Cherry"];
    words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    console.log(words); // ["apple", "Banana", "Cherry"]
    ```

    - **Key Points**:
        - `sort` modifies the original array.
        - Without a `compareFunction`, elements are sorted as strings in ascending Unicode order.
        - Use a `compareFunction` for numerical or custom sorting.
        - The `localeCompare` method can be used for locale-aware string sorting.

- `reverse()`: Reverses the order of the elements in the array in place.
    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    numbers.reverse();
    console.log(numbers); // [5, 4, 3, 2, 1]
    ```
### Array References

In JavaScript, arrays are reference types, meaning that when you assign an array to a variable or pass it to a function, you are working with a reference to the original array, not a copy of it.

#### Assigning Arrays
When you assign an array to another variable, both variables point to the same array in memory. Changes made through one variable will affect the other.

```javascript
let originalArray = [1, 2, 3];
let referenceArray = originalArray;

referenceArray.push(4);

console.log(originalArray); // [1, 2, 3, 4]
console.log(referenceArray); // [1, 2, 3, 4]
```

#### Comparing Arrays
Since arrays are reference types, two arrays are only considered equal if they reference the same memory location.

```javascript
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = array1;

console.log(array1 === array2); // false (different references)
console.log(array1 === array3); // true (same reference)
```

#### Copying Arrays
To create a copy of an array, you can use methods like `slice()`, the spread operator (`...`), or `Array.from()`.

```javascript
let originalArray = [1, 2, 3];
let copiedArray = originalArray.slice();

copiedArray.push(4);

console.log(originalArray); // [1, 2, 3]
console.log(copiedArray); // [1, 2, 3, 4]
```

```javascript
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];

copiedArray.push(4);

console.log(originalArray); // [1, 2, 3]
console.log(copiedArray); // [1, 2, 3, 4]
```

#### Passing Arrays to Functions
When you pass an array to a function, the function receives a reference to the original array. Modifying the array inside the function will affect the original array.

```javascript
function modifyArray(arr) {
    arr.push(4);
}

let numbers = [1, 2, 3];
modifyArray(numbers);

console.log(numbers); // [1, 2, 3, 4]
```

To avoid modifying the original array, you can create a copy inside the function.

```javascript
function modifyArray(arr) {
    let copy = [...arr];
    copy.push(4);
    return copy;
}

let numbers = [1, 2, 3];
let newNumbers = modifyArray(numbers);

console.log(numbers); // [1, 2, 3]
console.log(newNumbers); // [1, 2, 3, 4]
```

#### Key Points
- Arrays are reference types, so variables store references to the same memory location.
- Use methods like `slice()` or the spread operator to create copies of arrays.
- Be cautious when passing arrays to functions to avoid unintended side effects.
- Comparing arrays directly checks for reference equality, not content equality.

### Multidimensional Arrays (Nested Arrays)

A multidimensional array, also known as a nested array, is an array that contains other arrays as its elements. This allows you to create structures like matrices or grids.

#### Creating a Multidimensional Array
You can create a multidimensional array by nesting arrays within an array.

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

#### Accessing Elements in a Multidimensional Array
To access elements in a nested array, use multiple indices. The first index refers to the outer array, and the second index refers to the inner array.

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // 1 (first row, first column)
console.log(matrix[1][2]); // 6 (second row, third column)
console.log(matrix[2][1]); // 8 (third row, second column)
```

#### Iterating Over a Multidimensional Array
You can use nested loops to iterate over a multidimensional array.

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

#### Common Use Cases
- **Matrix Operations**: Representing and manipulating matrices in mathematical computations.
- **Grids**: Representing grids in games or UI layouts.
- **Data Tables**: Storing tabular data.

#### Example: Summing All Elements in a Multidimensional Array
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;
for (let row of matrix) {
    for (let value of row) {
        sum += value;
    }
}

console.log(sum); // 45
```

#### Example: Flattening a Multidimensional Array
You can flatten a multidimensional array into a single array using methods like `flat()`.

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let flatArray = matrix.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Key Points
- Multidimensional arrays are arrays of arrays.
- Use multiple indices to access elements.
- Nested loops are commonly used to iterate over them.
- Methods like `flat()` can simplify working with nested arrays.
- They are useful for representing complex data structures like grids or tables.

## Example
```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(sum); // 15
```

