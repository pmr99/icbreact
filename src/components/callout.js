const Callout = (props) => {

    return (
        <div className="callout">
            <h5>{props.title}</h5>
            <p> {props.text} </p>
            <p>{props.button1}</p>
            <p>{props.button2}</p>
        </div>

    )
}

export default Callout