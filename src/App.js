import React from 'react';
import axios from 'axios';
import Display from './Display';
import Weather from './Weather';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      erroMessage: '',
      weatherData: []
    }
  }

  handleCitySubmit = async(e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url).catch(this.catch);
    
    let cityForecast = await axios.get(`${process.env.REACT_APP_SERVER}/weatherData?searchQuery=${this.state.city}`).catch(err => {
      console.log(err);
    });//tailor to movie
    console.log(cityForecast)
    this.setState({
      weatherData:cityForecast.data
    }) 
    
    
    // let forecast = [];
    // if (!!cityForecast) {
    //   forecast = cityForecast.data;
    // }
    
    //console.log(forecast, 'forecast');
    if (!cityInfo) return
    this.setState({
      cityData: cityInfo.data[0],
      error: false,
      errorMessage: ''
    })

  }

   catch = (error) => {
    console.log(error, 'here is an error')
    
    this.setState({
      error: true,
      errorMessage: `ERROR ${error.response.status}: Could not find ${this.state.city}`,
      cityData: {}
    })

  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })

  }

render(){

console.log(this.state);
 
  return (   
    <>

            
        <Display
          handleCityInput={this.handleCityInput}
          handleCitySubmit={this.handleCitySubmit}
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          cityData={this.state.cityData}
          weatherData={this.state.weatherData}
        />  

        {this.state.weatherData.length && 
          <Weather
            weatherData={this.state.weatherData}
            city={this.state.city}
          />
        }  
        </>
  
  );
}
};
export default App;
//seeing if works