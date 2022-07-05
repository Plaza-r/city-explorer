import React from 'react';
import axios from 'axios';
import Display from './Display';
import Weather from './Weather';
import Movies from './Movies';

class App extends React.Component {
 constructor(props) {
  super(props) 
    this.state = {
      city: '',
      cityData: 0,
      error: false,
      errorMessage: '',
      weatherData: [],
      movieArray: []
    }
  }  

  handleCitySubmit = async(e) => {
    e.preventDefault();
    try {
      let data =  await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      let cityDataMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.data[0].lat},${data.data[0].lon}&zoom=14`

      console.log(data, 'data from locationiq api')

      const { lon, lat } = data.data[0];

      console.log(lat, lon) 

      const cityForecast = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`);

      console.log(cityForecast, 'new weather request')




      let forecast = cityForecast.data;
      console.log(cityForecast);
      let url = `${process.env.REACT_APP_SERVER}/movies?movieQueryCity=${this.state.city}`
      let cityMovie = await axios.get(url);
      let movieData = cityMovie.data


      this.setState ({
        cityData: data.data[0],
        flag:true,
        img: cityDataMap,
        weatherData: forecast,
        movieArray: movieData
      })


    } catch (error) {

      this.setState({
        error:true,
        errorMessage:`An Error Occurred: ${error.response.status}`

      })

    }

    
  }
  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

render(){


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
        
        

          {this.state.movieArray.length &&
            <Movies
              movie={this.state.movieArray}
            />
          }

        
      </>
  
  );
}
};
export default App;



 