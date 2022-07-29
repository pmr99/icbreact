
const LandingStats = (props) => {

    return (
        <div className = "Landing-stat-indiv">
            <p style={{fontWeight: "bold", textAlign: "center"}}> {props.number}</p>
            <p style= {{textAlign:"center"}}> {props.subheader} </p>
        </div>

    )
}

export default LandingStats