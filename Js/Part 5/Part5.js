// let Student = {
//     name: "Rahul",
//     branch: "Computer Science and Engineering",
//     age: 20,
//     Weight:56
// }


// Student.city = "Sahjanwa"; // Adding a key
// Student.Weight = 57;  // Updatin a value.

// delete Student.branch; // deleting a key.

// const item = {
//     prise : 25000,
//     color : ["red", "Green"],
//     material : "Metal"
// }

// we can store objects inside the array also.


// ------------------------------------------Guessing Game--------------------------------------------
let num = prompt("Enter the maximum number")
let random = Math.floor(Math.random() * num);
let guess = prompt("Now, Guess your number.")
let steps = 1;
while(true){
    if(guess == 'quit'){
        conaole.log("Your number was:", random)
        break;
    }
    if(random == guess){
        alert("You won.")
        console.log("congratulations, You won in", steps, "steps");
        console.log("Your number is -> ", random);
        break;
    }
    else if(guess < random){
        guess = prompt("Your number is less than the Number.")
    }
    else if(guess > random){
        guess = prompt("Your number is greater than the Number.")
    }
    steps++;
}
