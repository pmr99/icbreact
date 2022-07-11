import React from 'react';
import WorkshopCarasoul from '../components/workshopComponets/workshopCarasoul';
import WorkshopFAQs from '../components/workshopComponets/workshopFAQs';

// returns workshop page
const Workshop = () => {
return (
	<div>
		<div className="second-header">Workshop Overview</div>
		<div className="workshop-overview-container">
			<p>Our club workshops are hosted every Friday 4-6 PM PST. Through our workshops, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit. At varius vel pharetra vel turpis nunc. Amet aliquam id diam maecenas ultricies mi eget. Non curabitur gravida arcu ac. Morbi non arcu risus quis varius quam quisque id diam. Nulla facilisi morbi tempus iaculis urna id. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa enim nec dui nunc mattis enim ut. </p>
		</div>


		<div className="workshop-carasoul-container">
			<WorkshopCarasoul img="" company="First last(company name)" topic="Leading a workshop on..."></WorkshopCarasoul>
			<WorkshopCarasoul img="" company="First last(company name)" topic="Leading a workshop on..."></WorkshopCarasoul>
			<WorkshopCarasoul img="" company="First last(company name)" topic="Leading a workshop on..."></WorkshopCarasoul>

		</div>

		<div className="second-header">FAQs</div>
		<div className="faqs-container"> 
			<WorkshopFAQs question="Question" icon="+" shape=""></WorkshopFAQs>
			<WorkshopFAQs question="Question" icon="+" shape=""></WorkshopFAQs>
			<WorkshopFAQs question="Question" icon="x" shape=""></WorkshopFAQs>
			<WorkshopFAQs question="Question" icon="+" shape=""></WorkshopFAQs>
			<WorkshopFAQs question="Question" icon="+" shape=""></WorkshopFAQs>
		</div>

		<div className="second-header">Get in Touch</div>
		<div classname="get-in-touch-container">
			<p>Interested in working with us? Want to learn more? Email coo@icb.berkeley.edu for more information.</p>
		</div>
	</div>
);
};

export default Workshop;
