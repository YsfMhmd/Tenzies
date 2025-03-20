import "../styles/Button.css"
export default function Button({onClick,value}){
    return (
        <button className="control-button" onClick={onClick}> {value} </button>
    )
}