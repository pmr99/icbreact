import "./Team.css"
const Teammember = ({team}) => {
    return (
		<div className = "teammember">
			<a  className = "teammember special-container" href={team.linkedin}>
                <img className = {team.id%4 === 0 ? "memberpic red":
                                team.id%4 === 1 ?"memberpic yellow":
                                team.id%4 === 2 ?"memberpic blue":
                                "memberpic green"}
                src={team.pic} alt=""/>


                <div className = {team.id%4 === 0 ? "overlay quote red-background":
                                team.id%4 === 1 ?"overlay quote yellow-background":
                                team.id%4 === 2 ?"overlay quote blue-background":
                                "overlay quote green-background"}>
                    <div style = {{ color: "black", textAlign: "center", marginTop: "40%"}}>
                     {team.quote} </div>
                </div>

            </a>

			<p className = "teamname">{team.name} </p>
			<p className = "teamrest"> {team.major} </p>
		</div>

    )
}

export default Teammember
