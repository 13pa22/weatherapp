import React from "react";
import { Grid , Cell } from 'react-mdl';

const Form = (props) => {



	return (

		<div> 
			
				 <h1> Weather Finder! </h1>
			<p> find out temperature conditions and more... </p>
			<p> enter the city name and country (ca , us , uk , etc)</p>
		
			<form onSubmit={props.getWeather}>
				<input type="text" name= "city" placeholder="City.." />
				
				<input type="text" name= "country" placeholder="Country.." />
					<button> Get Weather! </button>
			</form>
		

			

		
		</div>


		)




}

export default Form;