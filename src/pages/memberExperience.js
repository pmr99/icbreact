import React, { useState } from 'react';

import '../components/memberExperienceComponents/memberExperience.css'
import '../index.css'


import Day from '../components/memberExperienceComponents/day.js'
import Testimonial from '../components/memberExperienceComponents/testimonial.js'
import memExperienceData from '../components/memberExperienceComponents/memberExperienceData'
import Faq from '../components/faq'

const testimonialData = memExperienceData.testimonials

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
		<div className="testimonial-container">
			{testimonialData.map((testimonial) => (
				<Testimonial testimonial={testimonial}></Testimonial>
			))
			}
		</div>

		<h4> Spring 2022 Project Teams </h4>

		<h4> FAQs </h4>
		<div className="faqs-container">
			<Faq question="how are you" answer="good"/>
			<Faq question="how are you" answer="good"/>
			<Faq question="how are you" answer="good"/>
		</div>

	</div>
);
};

export default MemberExperience;