import React from 'react';
import '../projects.css'
import FeaturedProj from '../components/projectComponents/featuredProj';
import ProjectInfo from '../components/projectComponents/projectPreviewInfo'

const featuredProjects = ProjectInfo.projects.featured
const displayProjects = ProjectInfo.projects.display



const Projects = () => {
return (
	<div>
		<img className="hero-image" alt=""></img>
		<h4> Featured Projects </h4>
		<div className="featured-proj-container">
			{featuredProjects.map((featured) => (
				<FeaturedProj featured = {featured}></FeaturedProj>
			))
			}
		</div>
	</div>
);
};

export default Projects;
