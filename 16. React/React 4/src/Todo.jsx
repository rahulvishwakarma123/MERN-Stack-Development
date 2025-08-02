import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    let [todos, setTodos] = useState([{ task: 'sample task', id: uuidv4(), isComplete: false }])
    let [newTodo, setNewTodo] = useState('')

    function addTask() {
        if(newTodo !== ''){
            setTodos((prevTodos) => {
                return [...prevTodos, { task: newTodo, id: uuidv4(), isComplete: false }]
            })
            setNewTodo('')
        }
    }
    function handleChange(event) {
        setNewTodo(event.target.value)
    }
    function deleteTask(id) {
        setTodos((prevTodos) => {
            return todos.filter(prevTodos => prevTodos.id != id)
        })
    }
    function MarkAll() {
        setTodos((prevTasks) => 
            prevTasks.map((todo) => {
                return {...todo, isComplete : true}               
            })
        );
    }

    // Corrected version of upperCaseOne:
    // The original code had several issues:
    // 1. `let task = todos.filter(...)` returns an array, not a single task string.
    // 2. Inside setTodos, the map callback did not return the new array (missing return).
    // 3. `task.toUpperCase()` was being called on an array, not a string.
    // 4. setTodos should return the new array from map.
    // The corrected version below fixes these issues.

    function markAsRead(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    if(todo.isComplete){
                        return { ...todo, isComplete: false };
                    }else{
                        return { ...todo, isComplete: true };
                    }
                } else {
                    return todo;
                }
            })
        );
    }
    return (
        <>
            <h3>- Todo List -</h3>
            <input type="text" placeholder="Add Task" value={newTodo} onChange={handleChange} />
            <button onClick={addTask}>Add task</button>
            <hr />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isComplete ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                        <button onClick={() => markAsRead(todo.id)}>{todo.isComplete ? 'Undone ': 'done'}</button>
                    </li>
                ))}
            </ul>
            <button onClick={MarkAll}>MarkAll as Done</button>
        </>
    )
}

export default Todo;