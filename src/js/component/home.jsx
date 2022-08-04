import React from "react";
import Card from "./card";
import Nav from "./nav";
import Footer from "./final"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Welcome from "./Welcome";

//create your first component
const Home = () => {
	return (
		<>
		<div className="row"><Nav/></div>
	

		<Welcome/>
		<div  className="justify-content-center text-center row">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Footer/>
		</div>
	
		
		</>
	);
};

export default Home;
