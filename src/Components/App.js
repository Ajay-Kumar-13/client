import axios from 'axios';
import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
// import Body from './Body/Body';
import ParticlesBackground from './ParticlesBackground';

function App() {

	// useEffect(() => {
	// 	axios.post('/test')
	// 		.then(response => {
	// 			console.log(response);
	// 		})
	// })
	return (
		<div className="App">
			Hello
			<Navbar />
			<ParticlesBackground />
		</div>
	);
}

export default App;
