import React, { Component } from "react";
import { Grid , Cell, Layout, Header, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import './App.css';

import Form from './components/form';
import Weather from './components/weather';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const API_key = '27151a3481ca6bf95bfcff58a1f7d7ab';
/*
function App() {
  return (
    <div className="App">
      
    </div>
  );
}*/


class App extends Component {


state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description:undefined,
    error: undefined

}   
    getWeather= async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`);
    
      const data = await api_call.json();

      if(city && country){
        console.log(data);
      
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description});
      }else{
         this.setState({
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error: 'pleaser enter a valid city and country  '});

      }


      

    }



  render(){

    return (

/* all info has to be in one div tag. */
  
      <div style={{width: '100%',  margin: 'auto',height:"100vh"}}> 
    

      <Grid className="landing-grid">

      
     
     
      <Form getWeather={this.getWeather}/>
      
      
      <Weather temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
               description={this.state.description}
                error={this.state.error} />
                
    
                </Grid>
    
        <Footer size="mini">

       <FooterSection type="left" logo="My Places">
       

        <FooterLinkList >
            <a href="https://www.linkedin.com/in/paritosh-arya-6bb45ba5/">My Linkedin</a>
            <a href="https://github.com/13pa22">My Github</a>
        </FooterLinkList>
          </FooterSection>
        </Footer>
       </div>



      )



  }


}
export default App;
