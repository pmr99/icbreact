import React from 'react';
import '../projects.css'
import FeaturedProj from '../components/projectComponents/featuredProj';

import PhilzPreview from '../pages/project-images/philz-preview.png'
import QCubed from '../pages/project-images/q-cubed-preview.png'
import Visualize from '../pages/project-images/visualize-preview.png'
import Aila from '../pages/project-images/aila-preview.png'




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

			<FeaturedProj name="Q-Cubed"
						banner={QCubed}
						alt="images of q-cubed logo"
						skills="Curriculum Design · Branding · User Research"
						description="Empowering queer BIPOC innovators to break into the tech industry."
						url="/projects/qcubed.js">
			</FeaturedProj>

			<FeaturedProj name="Visualize"
						banner={Visualize}
						alt="image of visualize logo"
						skills="Arduino · Hardware Design · Prototyping"
						description="Increasing accessibility to cervical cancer screening to Ghanian midwives."
						url="/projects/visualize.js">
			</FeaturedProj>

			<FeaturedProj name="Aila Health"
						banner={Aila}
						alt="image of aila healt logo against teal background"
						skills="Figma · Product Design · User Research"
						description="Empowering chronic illness patients with personalized healthcare at home."
						url="/projects/aila.js">
			</FeaturedProj>
		</div>
	</div>
);
};

export default Projects;
