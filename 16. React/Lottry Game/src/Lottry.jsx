import React, { useState } from 'react'

const Lottry = () => {

    let [lottryNumber, setLottryNumber] = useState(123)
    let [isWon, setIsWon] = useState(false)

    let generateLottry = () => {
        setIsWon(false)
        setLottryNumber(Math.floor(Math.random() * 1000))
        let number = lottryNumber.toString()
        console.log(number)
        let winningNumber = 0
        for(let i = 0; i < number.length; i++){
            let num = parseInt(number.charAt(i))
            winningNumber = winningNumber + num
        }
        console.log(winningNumber)
        if(winningNumber == 15){
            setIsWon(true)
        }
    }
    return (
        <>
            <h1>Lottry Game</h1>
            <p>Lottry ticket number = {lottryNumber}</p>
            <button onClick={generateLottry}>Generate Lottry</button>
            { isWon ? <h1>Congratulations! You won the lottry.</h1> : null}
        </>
    )
}

export default Lottry