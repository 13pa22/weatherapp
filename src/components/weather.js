import React from "react";
//stateless component (doesnt have to be a class1)
// cant use '' anymore in props
const Weather = (props) => {
	return(
		//one single div returned on return();
		<div> 


			{props.city && <h1>city: {props.city} </h1>}
			{props.country && <h1>country: {props.country}</h1> }
			{props.temperature && <h1>temperature: {props.temperature} 'C</h1>}
			{props.humidity &&  <h1>humidity: {props.humidity} %</h1>}
			{props.description && <h2>description: {props.description} </h2>}
			{props.error && <p>{props.error} </p>}
		</div>

		);
}

export default Weather;