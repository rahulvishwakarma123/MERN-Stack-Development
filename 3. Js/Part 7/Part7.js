// =========================== Use of 'this' Keyword =====================================================

// const student = {
//     name : "Rahul",
//     age : 20,
//     english : 95,
//     maths : 90,
//     science : 94,
//     getAvg(){
//         // here 'this' keyWord is used to access it's own property.
//         let avg = (this.english + this.maths + this.science) / 3;
//         console.log(avg);
//     }
// }

// ============================== Try and Catch =====================================================

// console.log("Hello")
// console.log("Hello")
// // console.log(a)
// try{
//     console.log(a) // this will through an error.
// } catch(error){
//     console.log("accured an error.. a is not defined.")
//     console.log(error)
// }
// // because of try and catch statement the following code will run.
// console.log("Hello2")
// console.log("Hello2")
// console.log("Hello2")

// ==================================== Arrow Funtions ================================================

// const func = (arg1, arg2) => { Function definition } 

// const sum = (a,b) => {
//     console.log(a + b)
// }

// sum(2,4);

// 1. If an arrow function have a single argument then the parentheces of the arrow function are optional otherwise parentheces are compulsory.

// ===================================================== SetTimeout ===============================================


// console.log("Hello")
// setTimeout(()=>{
//     console.log("Apana Collage")
// }, 0) // A delay of 0 does not mean immediate execution. The callback is queued and executed after the current execution stack is cleared.
// console.log("Hello11")
// console.log("Hello11")
// console.log("Hello11")
// console.log("Hello11")
// console.log("Hello11")
// console.log("Hello11")
// console.log("Hello11")


// ========================================== this with arrow function ================================================

// let student = {
//     name : "Rahul",
//     marks : 10,
//     prop : this, // Global scope
//     getName : function (){
//         return this.name; // lexical scope
//     },
//     getMarks : () =>{
//         console.log(this) // parent's scope -> global scope
//         return this.marks;
//     },
//     getInfo1: function () {
//         setTimeout( () =>{
//             console.log(this) // Student object
//         } , 2000)
//     },
//     getInfo2: function () {
//         setTimeout( function () {
//             console.log(this) // window object
//         } , 2000)
//     }
// }

// ========================================== Practice Question 3 =====================================================

// const object = {
    //     message : "Hello world",
    //     logmessage(){
        //         console.log(this.message)
        //     }
        // };
        // setTimeout(object.logmessage, 1000)
        
        
        
// ========================================== Practice Question 4 =====================================================

// what is output of this code

// let length = 4;
// function callback (){
//     console.log(this.length);
// }
// const object = {
//     length : 5,
//     method(callback){
//         callback();
//     }
// }

// object.method(callback,1,2)