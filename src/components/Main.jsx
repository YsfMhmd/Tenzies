import "../styles/Main.css"
import Dice from "./Dice.jsx"
import {useState} from "react"
export default function Main({diceValues}){

    return (
    <main>
        <Dice value={diceValues[0]}/>
        <Dice value={diceValues[1]}/>
        <Dice value={diceValues[2]}/>
        <Dice value={diceValues[3]}/>
        <Dice value={diceValues[4]}/>
        <Dice value={diceValues[5]}/>
        <Dice value={diceValues[6]}/>
        <Dice value={diceValues[7]}/>
        <Dice value={diceValues[8]}/>
        <Dice value={diceValues[9]}/>
    </main>
    )
}