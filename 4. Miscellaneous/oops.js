// Factory functions

// let personMaker = (name, age) => {
//     let person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hii,my name is ${this.name}`)
//         }
//     }
//     return person;
// }

// let p1 = personMaker("adam",23)
// let p2 = personMaker("steve",22)

// p1.talk === p2.talk ---> false
                            // because they make different copies on diffrent places in memory.

// =========================================== > Constructors 
// =========================> Start with the capital letter and return nothing

// function Person(name,age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.talk = function (){
//     console.log(`Hii, my name is ${this.name}.`)
// }

// let p1 = new Person("adam", 23)
// let p2 = new Person("Steve Rojers", 34)
// // both can access the talk fucntion because they have the reference of the function 'talk'.

// console.log(p1.talk())

// p1.talk === p2.talk ---> true
                            // because they make same instane and both refer this


// =================================================> Classes
//=================> outcome of the uppper code

// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     talk() {
//         console.log(`Hii, my name is ${this.name}.`)    
//     }
// }
// p1.talk === p2.talk ---> true

// =============================================== Inheritense =================================================================

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    talk() {
        console.log(`Hii, I am ${this.name}`)
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age) // calls the parent class constructor
        this.marks = marks
    }
}
class Teacher extends Person{
    constructor(name,age,subject){
        super(name, age) // calls the parent class constructor
        this.subject = subject
    }
}


let student = new Student("Rahul", 20)
student.talk()
let teacher = new Teacher("Shradha Khapra",25)
teacher.talk()