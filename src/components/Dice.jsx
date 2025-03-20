import "../styles/Dice.css"
export default function Dice({value,id,freezed,onClick}){
    // console.log(id)
    // console.log(freezed)
    return(
        <button className={`dice ${freezed?`freezed`:""}`} id={id} onClick={onClick}>{value}</button>
    )
}