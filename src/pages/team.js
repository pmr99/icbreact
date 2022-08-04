import React from 'react';
import Members from '../components/TeamComponents/memberInfo';
import Teammember from '../components/TeamComponents/teammember';
import Execmember from '../components/TeamComponents/execmember';

const ExecMembers = Members.members.exec
const TeamMembers = Members.members.team 

const Team = () => {
return (
	<>
	<h1> Exec Team </h1>
	<div className = "teammemberContainer">
	{ExecMembers.map((exec)=> (
		<Execmember exec = {exec}></Execmember>
		))
	}
	</div>
	<h1> Our Team </h1>
	<div className = "teammemberContainer">
	{TeamMembers.map((team)=> (
		<Teammember team = {team}></Teammember>
		))
	}
	</div>

	<h1>You can write your team!</h1>
	</>
);
};

export default Team;
