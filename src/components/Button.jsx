import "../styles/Button.css"
export default function Button({onClick}){
    return (
        <button className="control-button" onClick={onClick}> Roll </button>
    )
}