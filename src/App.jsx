import Header from  "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Button from "./components/Button.jsx"
import Footer from "./components/Footer.jsx"
import {useState} from "react"
import "./App.css"
export default function App(){
  
      let firstValues = new Array()
      for(let i = 0;i<10;i++){
          firstValues[i]=(Math.ceil(Math.random()*6))
      }
      const [diceValues , setDiceValues] = useState(firstValues);
      function onClick(){
        setDiceValues(firstValues)
      }
  return(
    <>
    <div className="container">
    <Header />
    <Main diceValues={diceValues}/>
    <Button onClick={onClick}/>
    </div>
    <Footer />
    </>
  )
}