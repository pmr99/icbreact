import React from 'react';
import RecruitmentLogistics from '../components/recruitmentComponents/recruitmentLogistics';
import RecruitmentTimeline from '../components/recruitmentComponents/recruitmentTimeline';
import RecruitmentWhyICB from '../components/recruitmentComponents/recruitmentWhyICB';

const Recruitment = () => {
return (
	<div>
		<div className="second-header">Recruitment Timeline</div>
		<div className="recruitment-timeline-container">
			<RecruitmentTimeline number="01" phase="Infosessions" dates="1/24 & 1/26" descrip="There will be multiple virtual infosessions from Monday 1/24 to Wednesday 1/26. These sessions will give you a chance to ask questions and talk to our members in a comfortable setting! Sign up for coffee chats to learn more about ICB." extraInfo=""></RecruitmentTimeline>
			<RecruitmentTimeline number="02" phase="Design Challenge due" dates="1/31, 11:59 AM PDT (noon)" descrip="The application includes 3 short response questions to help us understand your connection to Invention Corps’ mission. The application is due on January 28th, 11:59 PM PDT. Decisions will be emailed after this round on January 30th by 10 PM." extraInfo="Prompt released Wednesday, January 26 at 10pm."></RecruitmentTimeline>
			<RecruitmentTimeline number="03" phase="Group Challenge" dates="2/1-2/4" descrip="Scheduled 1 hour time slot. Invite only.
Test your teamwork skills in a new group of people who share a common goal." extraInfo="More information over email."></RecruitmentTimeline>
			<RecruitmentTimeline number="04" phase="Interviews" dates="2/4-2/6" descrip="Scheduled 20-minute time slot. Invite only.
Share with us your motivations, your passions, and your essence." extraInfo="More information over email."></RecruitmentTimeline>

		</div>

		<div className="second-header">Why Invention Corps?</div>
		<div className="why-ICB-container">
				<RecruitmentWhyICB img="" descrip="Hence, we have no formal recruitment process (resumes, portfolios, etc.) and instead gauge creative and collaborative skills through design challenges. Likewise, our club is completely operated by undergraduates, and each member has equal responsibility and agency in sustaining and improving our community. Hence, we have no formal recruitment process (resumes, portfolios, etc.) and instead gauge creative and collaborative skills through design."></RecruitmentWhyICB>
				<RecruitmentWhyICB img="" descrip="Hence, we have no formal recruitment process (resumes, portfolios, etc.) and instead gauge creative and collaborative skills through design challenges. Likewise, our club is completely operated by undergraduates, and each member has equal responsibility and agency in sustaining and improving our community. Hence, we have no formal recruitment process (resumes, portfolios, etc.) and instead gauge creative and collaborative skills through design."></RecruitmentWhyICB>
				<RecruitmentWhyICB img="" descrip="Hence, we have no formal recruitment process (resumes, portfolios, etc.) and instead gauge creative and collaborative skills through design challenges. Likewise, our club is completely operated by undergraduates, and each member has equal responsibility and agency in sustaining and improving our community. Hence, we have no formal recruitment process (resumes, portfolios, etc.) and instead gauge creative and collaborative skills through design."></RecruitmentWhyICB>
		</div>

		<div className="second-header">Fall 2022 Logistics</div>
		<div className="logistics-container">
			<RecruitmentLogistics question="How does recruitment work?" ans="Our recruitment process does not include a typical club application. What is important to us is understanding how you creatively think about and approach solving problems. We accept people from all majors, and we do not require resumes. We care more about you as a person holistically than what is on a piece of paper. Our design challenges are reflective of the impactful projects our members work on each semester."></RecruitmentLogistics>
			<RecruitmentLogistics question="How will Invention Corps operate this semester?" ans="Our club will mainly be operating in-person. The default method for all of our workshops, projects, and socials will be in-person. However, we value the safety and comfort of our members, so we will also make accommodations for anyone who prefers to operate remotely."></RecruitmentLogistics>
		</div>
	</div>
);
};

export default Recruitment;
