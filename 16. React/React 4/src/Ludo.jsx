import { useState } from "react"

export default function Ludo() {
    let [moves, setMoves] = useState({
        blue : 0,
        red : 0,
        yellow : 0,
        green : 0
    })
    function blueInc() {
        setMoves((prevMoves) =>{
            return {...prevMoves, blue:prevMoves.blue + 1}
        })// we use here spread operator to show the change in the object to the state variable.
    }
    function redInc() {
        setMoves((prevMoves) =>{
            return {...prevMoves, red:prevMoves.red + 1}
        })// we use here spread operator to show the change in the object to the state variable.
    }
    function yellowInc() {
        setMoves((prevMoves) =>{
            return {...prevMoves, yellow:prevMoves.yellow + 1}
        })// we use here spread operator to show the change in the object to the state variable.
    }
    function greenInc() {
        setMoves((prevMoves) =>{
            return {...prevMoves, green:prevMoves.green + 1}
        })// here we use spread operator to show the change in the object to the state variable.
    }
    return (
        <>
            <p>Blue count = {moves.blue}</p>
            <button onClick={blueInc} style={{background: 'blue'}}>+1</button>
            <p>Red count = {moves.red} </p>
            <button onClick={redInc} style={{background: 'red'}}>+1</button>
            <p>Yellow count = {moves.yellow} </p>
            <button onClick={yellowInc} style={{background: 'yellow'}}>+1</button>
            <p>Green count = {moves.green} </p>
            <button onClick={greenInc} style={{background: 'green'}}>+1</button>
        </>
    )
}