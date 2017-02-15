import React from 'react';
import _ from 'lodash';
import dateFormat from 'dateFormat';

const Details = (props) => {
  const cityData = props.cityData;
  const kelvin = cityData.list[0].main.temp;
  const date = cityData.list;

  const temp = function(number){
    let temp = cityData.list[number].main.temp;
    return _.round(1.8*(temp - 273) + 32);
  }

  return(
    <div>
      <div className="panel panel-primary">
        {temp(0)}°F<br/>
        {dateFormat(date[0].dt_txt, "dddd, h:MM")}
      </div>
      <div className="panel panel-primary">
        {temp(1)}°F<br/>
        {dateFormat(date[1].dt_txt, "dddd, h:MM")}
      </div>
      <div className="panel panel-primary">
        {temp(2)}°F<br/>
        {dateFormat(date[2].dt_txt, "dddd, h:MM")}
      </div>
      <div className="panel panel-primary">
        {temp(3)}°F<br/>
        {dateFormat(date[3].dt_txt, "dddd, h:MM")}
      </div>
    </div>
  )
};

export default Details;
