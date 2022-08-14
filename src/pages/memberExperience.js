import React from 'react';
import '../components/memberExperienceComponents/memberExperience.css'

import Day from '../components/memberExperienceComponents/day.js'
import Testimonial from '../components/memberExperienceComponents/testimonial.js'

import Ying from "../assets/ying.png"

import redWave from "../assets/images/red-wave.png"

const MemberExperience = () => {
return (
	<div>
		<img className="hero-image" alt=""></img>
		<h4> Typical Weekly Schedule </h4>
		<div className="weekly-schedule">
			<Day dayOfWeek="M"> </Day>
		</div>

		<h4> Past Workshop Speakers </h4>
		<h4> Member Voices</h4>
		<Testimonial color="#CB5555" wave={redWave} background="#FCD7D7" quote="Amet, tincidunt platea molestie molestie pharetra arcu dictum. Elementum tellus sit mi semper sagittis egestas erat feugiat diam." image={Ying} alt="photo of ying lin" name="Ying Lin" role="CEO of Invention Corps">
		</Testimonial>

	</div>
);
};

export default MemberExperience;
