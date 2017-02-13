import React, { Component } from 'react';
import {connect} from 'react-redux';

import Graph from '../components/graphs';
import GoogleMap from '../components/google_map';
import Details from '../components/details';

class WeatherList extends Component {
  moreInfo(){
    
  }

  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return(
      <tr key={cityData.city.name}>
        <td>
          <p className="well well-sm info" onClick=this.moreInfo>
            {cityData.city.name}
          </p>
          <Details ref="info"/>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Graph data={temps} color="blue" unit="°F"></Graph>
        </td>
        <td>
          <Graph color="green" data={humidity} unit="%">%</Graph>
        </td>
        <td>
          <Graph color="black" data={pressure} unit=" hPa">in</Graph>
        </td>
      </tr>
    )
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th className="th">Temperature</th>
            <th className="th">Humiduty</th>
            <th className="th">Pressure</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
