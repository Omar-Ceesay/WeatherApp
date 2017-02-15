import React, {Component} from 'react';
import Details from '../components/details.js';

class CityName extends Component{
  constructor(props){
    super(props);

    this.state = {
      detail: false
    }
  }
  showDetail(){
    this.setState({detail: !this.state.detail})
  }
  render(){
    return(
      <div className="moreDetails">
        <p className="well well-sm info" onClick={(e) => this.showDetail(e)}>
          {this.props.cityData.city.name}
        </p>
        {
          this.state.detail == true ? <Details cityData={this.props.cityData}/> : null
        }
      </div>
    )
  }
}

export default CityName;
