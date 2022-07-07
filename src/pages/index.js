import React from 'react';
import LandingStats from '../components/indexComponents/landingStats';
import LandingProjSummary from '../components/indexComponents/landingProjSummary';
import LandingCollab from '../components/indexComponents/landingCollab';

const Home = () => {
return (
	<div>
		<div className = "landing-header">[Insert brief overview w/ mission statement & work we do. 1-2 Sentences only.] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</div>
		<div className = "landing-stats-container">
		<LandingStats img = "" number = "50" subheader = "Completed Projects"> </LandingStats>
		<LandingStats img = "" number = "30" subheader = "Majors Represented"> </LandingStats>
		<LandingStats img = "" number = "5" subheader = "Years of Work Carried Out"> </LandingStats>
		<LandingStats img = "" number = "30" subheader = "Active Members"> </LandingStats>
		</div>
		<div className = "second-header"> What We’ve Been Working On </div>
		<div className = "landing-projSummary-container">
		<LandingProjSummary img = "" proj = "Project name" pillar = "Health" text = "This project is lit Yall" view = "put hyperlink here"> </LandingProjSummary>
		<LandingProjSummary img = "" proj = "Project name" pillar = "Health" text = "This project is lit Yall" view = "put hyperlink here"> </LandingProjSummary>
		<LandingProjSummary img = "" proj = "Project name" pillar = "Health" text = "This project is lit Yall" view = "put hyperlink here"> </LandingProjSummary>
		</div>
		<div className = "second-header"> Let’s Work Together </div>
		<div className = "landing-collab-container">
		<LandingCollab title = "Clients" text = "Please work with us bro" button1 = "Learn More" button2 = "Past Work"></LandingCollab>
		<LandingCollab title = "Students" text = "Please join our club :)" button1 = "Club Culture" button2 = "Recruitment"></LandingCollab>
		</div>
		<div className = "second-header"> Spring 2022 Showcase </div>


	</div>
);
};

export default Home;
