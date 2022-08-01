import "./Team.css"
const Teammember = ({team}) => {
    return (
		<div className = "teammember">
			<p className = "teamname">{team.name} </p>
			<p className = "teamrest"> {team.major} </p>
		</div>

    )
}

export default Teammember