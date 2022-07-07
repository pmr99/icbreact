const LandingProjSummary = (props) => {

    return (
        <div className = "landing-projSummary">

            <p>{props.proj}</p>
            <p> {props.pillar} </p>
            <p>{props.text}</p>
            <p>{props.view}</p>

        </div>

    )
}

export default LandingProjSummary