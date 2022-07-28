import React from 'react';
import '../projects.css'
import FeaturedProj from '../components/projectComponents/featuredProj';

const Projects = () => {
return (
	<div>
		<img className="hero-image"></img>

		<h4> Featured Projects </h4>
		<div className="featured-proj-container">
			<FeaturedProj name="Philz Coffee"
						skills="Mobile Design · Branding · Data Analysis"
						description="Reimaging the in-store experience with customers during the COVID-19 pandemic.">	
			</FeaturedProj>

			<FeaturedProj name="Philz Coffee"
						skills="Mobile Design · Branding · Data Analysis"
						description="Reimaging the in-store experience with customers during the COVID-19 pandemic.">	
			</FeaturedProj>

			<FeaturedProj name="Philz Coffee"
						skills="Mobile Design · Branding · Data Analysis"
						description="Reimaging the in-store experience with customers during the COVID-19 pandemic.">	
			</FeaturedProj>

			<FeaturedProj name="Philz Coffee"
						skills="Mobile Design · Branding · Data Analysis"
						description="Reimaging the in-store experience with customers during the COVID-19 pandemic.">	
			</FeaturedProj>
		</div>
	</div>
);
};

export default Projects;
