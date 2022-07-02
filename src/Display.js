import React from "react";
import Form from './Form';
import Error from "./Error";


class Display extends React.Component {
  render() {
    console.log(this.props, 'props');
    return (
      <div className='d-flex'>

        <div className='d-flex justify-content-center align-items-center' style={{ background: '#A0C8F1', width: '67%', height: '100vh' }}>
          {Object.keys(this.props.cityData).length > 0 && (
            <img
              alt={this.props.cityData.display_name}
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10`}
            />
          )}
        </div>


        <div className='px-5 py-3 text-light' style={{ background: '#3E688A', width: '33%', height: '100vh' }}>
          <h1>City Explorer</h1>
          <Form
            handleCityInput={this.props.handleCityInput}
            handleCitySubmit={this.props.handleCitySubmit}
          />

          {this.props.error && (
            <Error
              errorMessage={this.props.errorMessage}
            />

          )}

          {Object.keys(this.props.cityData).length > 0 && (
            <>
            <ul className='list-unstyled '>
              <li className='py-2'>
                <p className='p-0 m-0 '>Latitude</p> <p className='p-0 m-0 h3'>{this.props.cityData.lat}</p>
              </li>

              <li className='py-2'>
                <p className='p-0 m-0 '>Longtitude</p> <p className='p-0 m-0 h3'>{this.props.cityData.lon}</p>
              </li>

              <li className='py-2'>
                <p className='p-0 m-0 '>Location</p> <p className='p-0 m-0 h3'>{this.props.cityData.display_name}</p>
              </li>


            </ul>
            {/* <Weather
            weatherData={this.props.weatherData}
            city={this.props.cityData.display_name}

            /> */}
            </>

          )}
        </div>





      </div>
    )
  }
}

export default Display;
//checcking