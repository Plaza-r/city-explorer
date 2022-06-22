import React from 'react';
import axios from 'axios';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      erroMessage: ''
    }
  }

  handleCitySubmit = async(e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url).catch(this.catch);
    console.log(cityInfo);
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
            
        <Display
          handleCityInput={this.handleCityInput}
          handleCitySubmit={this.handleCitySubmit}
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          cityData={this.state.cityData}
        />    
  
  );
}
};
export default App;
