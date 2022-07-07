
const LandingStats = (props) => {

    return (
        <div className = "Landing-stat-indiv">
            <p> {props.number}</p>
            <p> {props.subheader} </p>
        </div>

    )
}

export default LandingStats