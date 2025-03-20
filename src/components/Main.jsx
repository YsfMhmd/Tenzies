import "../styles/Main.css"
import Dice from "./Dice.jsx"
import {useState} from "react"
export default function Main({dice,setDice}){
    console.log("Main rendered")
        return (
    <main>
        <Dice onClick={dieOnClick} dice={dice[0]}/>
        <Dice dice={dice[1]}/>
        <Dice dice={dice[2]}/>
        <Dice dice={dice[3]}/>
        <Dice dice={dice[4]}/>
        <Dice dice={dice[5]}/>
        <Dice dice={dice[6]}/>
        <Dice dice={dice[7]}/>
        <Dice dice={dice[8]}/>
        <Dice dice={dice[9]}/>
    </main>
    )
}