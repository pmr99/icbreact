import icbIcon_Health from '../assets/images/icbIcon_Health.png';
import icbIcon_Poverty from '../assets/images/icbIcon_Poverty.png';
import icbIcon_Society from '../assets/images/icbIcon_Society.png';
import icbIcon_Environment from '../assets/images/icbIcon_Environment.png';



import '../ourStory.css'
import pillarIcon from '../components/pillarIcon';

//hello
const OurStory = () => {
return (
	<div>
		<img className="hero-image"></img>
		<div className='block'> 
		<h4> Our Mission </h4>

		<h5> Inventing ways to make a better world </h5>

		<p> Our mission as a multidisciplinary organization focuses on 
		human-centered design. We partner with professors, companies, non-profits, 
		and any entity for social good on campus and beyond. 
		Our goal is to develop specific projects utilizing design thinking 
		to improve or introduce solutions on poverty, health, environment, 
		and society.</p>
		
		<pillarIcon image={icbIcon_Health} label="Health" />
		<pillarIcon image={icbIcon_Poverty} label="Poverty" />
		<pillarIcon image={icbIcon_Society} label="Society" />
		<pillarIcon image={icbIcon_Environment} label="Environment" />



		</div>

		

		
	</div>
	
);
};

export default OurStory;
