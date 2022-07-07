import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages'; //automatically routes to index.js
import Designathon from './pages/designathon';
import MemberExperience from './pages/memberExperience';
import Mentor from './pages/mentor';
import OurStory from './pages/ourStory';
import Projects from './pages/projects';
import Recruitment from './pages/recruitment';
import Team from './pages/team';
import Workshop from './pages/workshop';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/designathon' element={<Designathon/>} />
		<Route path='/memberExperience' element={<MemberExperience/>} />
        <Route path='/mentor' element={<Mentor/>} />
        <Route path='/ourStory' element={<OurStory/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/recruitment' element={<Recruitment/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/workshop' element={<Workshop/>} />
	</Routes>
	</Router>
);
}

export default App;
