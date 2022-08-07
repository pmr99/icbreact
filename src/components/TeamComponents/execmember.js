import "./Team.css"


const Execmember = ({exec}) => {

    return (
        <div className = "teammember">

            <a  className = "teammember special-container" href={exec.linkedin}>
                <img className = {exec.id%4 == 0 ? "memberpic red": 
                                exec.id%4 == 1 ?"memberpic yellow":
                                exec.id%4 == 2 ?"memberpic blue":
                                "memberpic green"}
                src={exec.pic}/>
            
            
                <div className = {exec.id%4 == 0 ? "overlay quote red-background": 
                                exec.id%4 == 1 ?"overlay quote yellow-background":
                                exec.id%4 == 2 ?"overlay quote blue-background":
                                "overlay quote green-background"}>
                    <div style = {{ color: "black", textAlign: "center", marginTop: "40%"}}> 
                     {exec.quote} </div>
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