import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount(){
    const cordlat = this.props.lat;
    const cordLon = this.props.lon;
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center:{
        lat: cordlat,
        lng: cordLon
      }
    });
  }
  render(){
    return(
      //this.refs.map
      <div ref="map" />
    )
  }
}

export default GoogleMap;
