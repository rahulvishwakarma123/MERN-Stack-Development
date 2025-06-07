//====================== Assignment Question 1 ======================

// 1st way ------------------------

// let arr = [1,2,3,4,5]

// let square = arr.map((el) =>{
//     return el*el;
// })

// console.log(square)

// let sum = square.reduce((result, el) => {
//     return result + el;
// })

// console.log(sum)

// let average = sum/arr.length;

// console.log(average)

// ---------------- way 2nd --------------

// let SquareSum = arr.reduce((result, el) =>{
//     result = result + (el*el)
//     return result
// })
// let average = SquareSum / arr.length;
// console.log(average)

//====================== Assignment Question 3 ===========================

// let originalArray = ["rahul","vishal","aman","shubham","barnawal"]

// let upperCase = originalArray.map((el) =>{
//     return el.toUpperCase();
// })

// console.log(upperCase)

//====================== Assignment Question 4 ===========================
// let arr = [1,2,3,4,5]
// function doubleAndReturnArgs(arr, ...args){
//     return [...arr,...args.map(val => val*2)]
// }

// console.log(doubleAndReturnArgs(arr, 2,3,5,2,6))