import "./Team.css"


const Execmember = ({exec}) => {

    return (
        <div className = "teammember">
            <a href={exec.linkedin}>
            <div className= "teammember special-container">
                <img className = "memberpic red" src={exec.pic}/>
                
                <div className = "overlay quote">
                    
                    <p style = {{ color: "black", textAlign: "center", marginTop: "40%"}}> 
                     {exec.quote} </p>
                </div>

            </div>
            </a>
            
			<p className = "teamname">{exec.name} </p>
			<p className = "teamrest">{exec.role} </p>
			<p className = "teamrest">{exec.major} </p>
			<p className = "teamrest">{exec.email} </p>
        </div>
    )
}

export default Execmember