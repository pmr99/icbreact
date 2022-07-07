const LandingCollab = (props) => {

    return (
        <div className="landing-collab">
            <p>{props.title}</p>
            <p> {props.text} </p>
            <p>{props.button1}</p>
            <p>{props.button2}</p>
        </div>

    )
}

export default LandingCollab