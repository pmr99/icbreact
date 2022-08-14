import React from 'react';
import proj1 from "../assets/projects-philz-preview.png"
import LandingStats from '../components/indexComponents/landingStats';
import LandingProjSummary from '../components/indexComponents/landingProjSummary';
import Button from '../components/button'
import Callout from '../components/callout';

const Home = () => {
return (
	<div>
		<img className="hero-image" alt=""></img>
		<div className = "quote">[Insert brief overview w/ mission statement & work we do. 1-2 Sentences only.] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</div>
		<div className = "landing-stats-container">
			<LandingStats img = "" number = "50" subheader = "Completed Projects"> </LandingStats>
			<LandingStats img = "" number = "30" subheader = "Majors Represented"> </LandingStats>
			<LandingStats img = "" number = "5" subheader = "Years of Work Carried Out"> </LandingStats>
			<LandingStats img = "" number = "30" subheader = "Active Members"> </LandingStats>
		</div>
		<h4> What We’ve Been Working On </h4>
		<div className = "landing-projSummary-container">
			<LandingProjSummary img = {proj1} proj = "Project name" pillar = "Health" text = "This project is lit Yall" view = "put hyperlink here"> </LandingProjSummary>
			<LandingProjSummary img = {proj1} proj = "Project name" pillar = "Health" text = "This project is lit Yall" view = "put hyperlink here"> </LandingProjSummary>
			<LandingProjSummary img = {proj1} proj = "Project name" pillar = "Health" text = "This project is lit Yall" view = "put hyperlink here"> </LandingProjSummary>
		</div>
		<h4> Let's Work Together </h4>
		<div className = "duo-callout">
			<Callout title = "Clients" text = "Please work with us bro" button1 = "Learn More" button2 = "Past Work"></Callout>
			<Callout title = "Students" text = "Please join our club :)" button1 = "Club Culture" button2 = "Recruitment"></Callout>
		</div>

		<Button action="click this button" size="large"></Button>

	</div>
);

};

export default Home;
