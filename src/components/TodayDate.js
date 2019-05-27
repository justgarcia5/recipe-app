import React from 'react';

const TodayDate = props => {

  return (
    <div onClick={props.DateTimeToggle}>
      <h3>{props.timezone}</h3>
      <h3>{props.date[5]}{props.date[6]}-{props.date[8]}{props.date[9]}-{props.date[0]}{props.date[1]}{props.date[2]}{props.date[3]}</h3>
      <h3>{props.date[11]}{props.date[12]}:{props.date[14]}{props.date[15]}:{props.date[17]}{props.date[18]}</h3>
    </div>
  )
}

export default TodayDate;
