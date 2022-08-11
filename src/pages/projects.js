import React from 'react';
import '../projects.css'
import FeaturedProj from '../components/projectComponents/featuredProj';

import PhilzPreview from '../assets/projects-philz-preview.png'

const Projects = () => {
return (
	<div>
		<img className="hero-image" alt=""></img>
		<h4> Featured Projects </h4>
		<div className="featured-proj-container">
			<FeaturedProj name="Philz Coffee"
						banner={PhilzPreview}
						alt="image of philz coffee cup"
						skills="Mobile Design · Branding · Data Analysis"
						description="Reimaging the in-store experience with customers during the COVID-19 pandemic."
						url="/projects/philz">
			</FeaturedProj>

			<FeaturedProj name="Philz Coffee"
						banner={PhilzPreview}
						alt="image of philz coffee cup"
						skills="Mobile Design · Branding · Data Analysis"
						description="Reimaging the in-store experience with customers during the COVID-19 pandemic.">
			</FeaturedProj>

			<FeaturedProj name="Philz Coffee"
						banner={PhilzPreview}
						alt="image of philz coffee cup"
						skills="Mobile Design · Branding · Data Analysis"
						description="Reimaging the in-store experience with customers during the COVID-19 pandemic.">
			</FeaturedProj>

			<FeaturedProj name="Philz Coffee"
						banner={PhilzPreview}
						alt="image of philz coffee cup"
						skills="Mobile Design · Branding · Data Analysis"
						description="Reimaging the in-store experience with customers during the COVID-19 pandemic.">
			</FeaturedProj>
		</div>
	</div>
);
};

export default Projects;
