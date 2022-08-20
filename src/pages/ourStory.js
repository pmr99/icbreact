import icbIcon_Health from '../assets/images/icbIcon_Health.png';
import icbIcon_Poverty from '../assets/images/icbIcon_Poverty.png';
import icbIcon_Society from '../assets/images/icbIcon_Society.png';
import icbIcon_Environment from '../assets/images/icbIcon_Environment.png';



import '../ourStory.css'
import PillarIcon from '../components/pillarIcon';

//hello
const OurStory = () => {
return (
	<div className="text_container">
		<img className="hero-image" alt=""></img>
		<div className='block'> 
			<h4> Our Mission </h4>

			<h5> Inventing ways to make a better world </h5>

			<p> Our mission as a multidisciplinary organization focuses on
			human-centered design. We partner with professors, companies, non-profits,
			and any entity for social good on campus and beyond.
			Our goal is to develop specific projects utilizing design thinking
			to improve or introduce solutions on poverty, health, environment,
			and society.</p>
				<div className="icon_container">
					<div className="icon_box">
						<PillarIcon image={icbIcon_Health} label="Health"></PillarIcon><PillarIcon/>
						<h5>HEALTH</h5>
						</div>
					<div className="icon_box">
						<PillarIcon image={icbIcon_Poverty} label="Poverty"></PillarIcon><PillarIcon/>
						<h5>POVERTY</h5>
						</div>
					<div className="icon_box">
						<PillarIcon image={icbIcon_Society} label="Society"></PillarIcon><PillarIcon/>
						<h5>SOCIETY</h5>
						</div>
					<div className="icon_box">
						<PillarIcon image={icbIcon_Environment} label="Environment"></PillarIcon><PillarIcon/>
						<h5>ENVIRONMENT</h5>
						</div>
				</div>
		</div>
		<div className='block'>
			<h4>Core Values</h4>
			<p> As a diverse organization representing a vast 
				range of skillsets, we are fueled by our own passions 
				and converge upon those passions to create a holistic organization by continuously iterating with 
				the goal of empowering ourselves and others. We strive to create a community of unique individuals, 
				united by our core values and beliefs centered around positive impact. It is important to us to foster a 
				collaborative, open-minded, and empathetic culture.</p>
		</div>

		<div className='block'>
			<h4>Founding Story</h4>
			<p> From our founding class in 2017 to our current ICB family, we have grown immensely as a community. 
				This organization was created by the University Innovation Fellows as part of the effort to increase 
				undergraduate innovation and entrepreneurship throughout UC Berkeley. </p>
			<p> Since our beginnings, we have always championed multidisciplinary designers, thinkers, and leaders who 
				seek to tackle the “wicked problems” of society through human-centered design. Unlike other design consulting 
				organizations, we offer pro-bono partnerships and high quality deliverables as part of our dedication toward 
				positive social impact. The initial concept of collaborative design-thinking, ideating, and inventing remains 
				a crucial and ever-evolving process of our club. 
			</p>
			<p> Hence, we have no formal recruitment process (resumes, portfolios, etc.) and instead gauge creative and 
				collaborative skills through design challenges. Likewise, our club is completely operated by undergraduates, 
				and each member has equal responsibility and agency in sustaining and improving our community.  </p>
		</div>




	</div>

);
};

export default OurStory;
