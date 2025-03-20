import Header from  "./components/Header.jsx"
import Dice from "./components/Dice.jsx"
import Button from "./components/Button.jsx"
import Footer from "./components/Footer.jsx"
import {useState,useEffect} from "react"
import "./App.css"
export default function App(){
  
  function createInitialDice(){
        let array = new Array(10)
        for(let i = 0;i<array.length;i++){
            array[i]={...array[i],id : i+1,freezed:false,value:(Math.ceil(Math.random()*6))}
      }
      return array
    }
      const [dice , setDice] = useState(createInitialDice());
  function CreateDice(){
    return dice.map((e)=><Dice value={e.value} freezed={e.freezed} id={e.id} key={e.id} onClick={dieOnClick}/>)
  }
  
  function checkWinning(dice){
    let won = false;
    let initialValue = dice[0].value
      for(let i=0;i<dice.length;i++){
        if(dice[i].value === initialValue && dice[i].freezed === true){
          won = true
      }else {
        won =false;
        break }
    }
    return won
  }
  function dieOnClick(element){
    const ident = element.currentTarget.id;
          setDice(prevDice=>prevDice.map((e)=>{
            if(e.id == ident){
              return {...e, freezed : !e.freezed}
            }else{return e}
          }))
  }
      function onClick(){
        setDice(prevDice=>{
          const newArr = []
          for(let i = 0;i<prevDice.length;i++){
          if(prevDice[i].freezed === false){
            newArr[i]={...prevDice[i],value:(Math.ceil(Math.random()*6))}
          }else{
            newArr[i]= prevDice[i]
          }
        }
        return newArr;
        })
      }
  return(
    <>
    <div className="container">
      <Header />
      <main>
      {CreateDice()}
      </main>
      <Button onClick={onClick} value={checkWinning(dice)?"New game":"Roll"}/>
    </div>
    <Footer />
    </>
  )
}