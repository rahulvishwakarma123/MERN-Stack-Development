// Make a todo application and has the fuctionality of add, delete, list & quit the task.

console.log("Enter <-add-> to add the task.")
console.log("Enter <-delete-> to delete the task.")
console.log("Enter <-list-> to show all the task.")
console.log("Enter <-quit-> to exit from the app.")

const tasks = [];


while(true){
    let req = prompt("Enter your request ->")


    if(req == 'quit'){
        console.log("Qutting your app...")
        break;
    }
    else if (req == 'add') {
        let task = prompt("Enter your task")
        tasks.push(task)
    }
    else if (req == 'delete') {
        let index = prompt("Enter the index of the task which you want to delete.")
        tasks.splice(index,1)
    }
    else if (req == 'list') {
        for(let i = 0; i<tasks.length; i++){
            console.log(i,tasks[i])
        }
        console.log("--------")
    }
    else{
        console.log("Enter the correct request.")
    }
}