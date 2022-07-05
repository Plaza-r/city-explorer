import React from 'react';
import Forecast from './Forecast';

class Weather extends React.Component {
    render() {
        
        console.log(this.props.weatherData);

        let weather = this.props.weatherData.map((day, idx) => (
            <Forecast
                
                key={idx}
                city={this.props.city}
                day={day}
            />
        ))
        return (
            <div className="border-top py-4">
                <h3>Weather</h3>

                {!weather.length ? (
                    <p>No Weather Available</p>
                ) : (
                    <ul className='list-unstyled '>
                        {[weather]}
                    </ul>
                )}
            </div>
        );
    }
}

export default Weather;