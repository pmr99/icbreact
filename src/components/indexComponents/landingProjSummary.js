

const LandingProjSummary = (props) => {

    return (
        <div className = "landing-projSummary">
            <div className = "left-portion-proj">
                <div>
                    <p>{props.proj}</p>
                </div>
                <div>
                    <p> {props.pillar} </p>
                </div>
                <div>
                    <p style= {{textAlign: "center"}}>{props.text}</p>
                </div>
                <div>
                    <p style= {{textAlign: "center"}}>{props.view}</p>
                    <p style = {{textAlign: "center"}}> View</p>
                </div>
            </div>
            
            <div className = "right-portion-proj">
                <img src = {props.img} alt="Girl in a jacket" style = {{marginTop: "50px", marginBottom: "100px"}}width="400"/>
            </div>


        </div>

    )
}

export default LandingProjSummary