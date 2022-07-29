const Callout = (props) => {

    return (
        <div className="callout">
            <h5>{props.title}</h5>
            <p> {props.text} </p>
            <div className = "callout-container">
            <p style = {{  textAlign: "center", padding: "5px", width: "150px", borderRadius: "15px", border: "2px solid #000000"}}>{props.button1}</p>
            </div>

            <div className = "callout-container">
            <p style = {{  textAlign: "center", padding: "5px", width: "150px", borderRadius: "15px", border: "2px solid #000000"}}>{props.button2}</p>
            </div>
        </div>

    )
}

export default Callout