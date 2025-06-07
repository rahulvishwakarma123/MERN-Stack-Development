// function greet(){
//     console.log("Hello guys...")
// }
// greet();

// ================================= Fucntion with argument ==========================

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`);
// }

// printInfo("Rahul", 20);
// printInfo("Rahul");
// printInfo("",20);


// ===============================Practice Question 1 (calculate sum)=================================
// function sum(a,b,c){
    //     console.log("Sum of these three number is -> ",a+b+c)
    // }
    
    // sum(1,2,3)
 
// ===============================Practice Question 2 (Print Multiplication table)=================================
// function printMultiplicationTable(n){
//     for(let i = 1; i <= 10; i++){
//         console.log(`${n} * ${i} = ${n*i}`)
//     }
// }

// printMultiplicationTable(2)

// ==================================Practice Question 3 (Concatenate the all strings of an array)===========================================
let str = ["Hii", "Rahul", "what", "are", "you", "doing"]
function concate(str){
    let finalString = ""
    for (const element of str) {
        finalString += element;
    }
    console.log(finalString)
}

concate(str)