import { useState } from "react"

function init() {
    return Math.random()
}
export default function Counter () {
    let [count, setCount] = useState(init) // never call the function inside the useState, only pass the reference of the function.

    const incCount = () =>{
        setCount(count + 1)
        console.log(count)
    }
    return (
        <div>
            <p>Count = {count} </p>
            <button onClick={incCount}>Increase count</button>
        </div>
    )
}