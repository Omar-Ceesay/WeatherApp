import React, { Component } from 'react';
import {connect} from 'react-redux';

import Graph from '../components/graphs';

class WeatherList extends Component {
  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp);

    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Graph data={temps} color="blue" />
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
            <th>Temperature</th>
            <th>Humiduty</th>
            <th>Pressure</th>
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
