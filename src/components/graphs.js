import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function averageTemp(data){
  const kelvin = _.round(_.sum(data)/data.length);

  return _.round(1.8*(kelvin - 273) + 32);
}
function average(data){
  return  _.round(_.sum(data)/data.length);
}


export default (props) => {

  if(props.color == "blue"){
    return (
      <div>
        <Sparklines height={110} width={150} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{averageTemp(props.data)}{props.unit}</div>
      </div>
    )
  }else{
  return(
    <div>
      <Sparklines height={110} width={150} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}{props.unit}</div>
    </div>
  )
  }
}
