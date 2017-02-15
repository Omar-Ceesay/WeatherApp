import React, { Component } from 'react';
import {connect} from 'react-redux';

import Graph from '../components/graphs';
import GoogleMap from '../components/google_map';
import CityName from '../components/city_name';

class WeatherList extends Component {

  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    const detail = false;
    return(
      <tr key={cityData.city.id}>
        <td>
          <CityName cityData={cityData}/>
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
