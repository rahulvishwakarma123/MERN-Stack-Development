// let arr = [1,2,3,4,5];

// Method 1

// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print)

// Method 2

// arr.forEach((el) => {
//     console.log(el)
// })
// ============================(ForEach)==========================================

// we can access object from forEach on an array.

// let arr = [
//     { id: 12, name: "Alice" },
//     { id: 23, name: "Bob" },
//     { id: 31, name: "Charlie" },
//     { id: 44, name: "Diana" },
//     { id: 51, name: "Eve" }
// ];

// arr.forEach((arr)=>{
//     console.log(arr.name)
// })

// =============================(map)=====================================

// map method =>

// let num = [1,2,3,4]

// let double = num.map((el) =>{
//     return el*el;
// })

// console.log(double)

// ====================================(map)====================================
// let students = [
//     { name: "John", percentage: 35 },
//     { name: "Jane", percentage: 38 },
//     { name: "Mike", percentage: 32 },
//     { name: "Emily", percentage: 39 },
//     { name: "Chris", percentage: 36 }
// ];

// const gpa = students.map((el) =>{
//     return el.percentage / 10;
// })

// console.log(gpa)

// =============================== Find the maximum in an array (Reduce)===============================
 
// let arr = [1,2,3,4,5,6,7,8,9]

// let max = arr.reduce((max, el) => {
//     if(max > el){
//         return max;
//     }else{
//         return el;
//     }
// })

// console.log(max)

// ======================(Destructuring of arrays)==============================

// let runners = ["Rahul","Anand","Ansh","xyz","pqr","abc"]

// let [first, second, third, ...others] = runners;

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(others)

// ==================================(Destructuring of objects)===========================================

let student = {
    name: "John Doe",
    subjects: ["Math", "Science", "History"],
    id: 101,
    username: "johndoe123",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};

let {username , id} = student;

console.log(username);
console.log(id);

// if we want to change the name of the variable

let {id : password,address: {zip}} = student;
console.log(password)
console.log(zip)
