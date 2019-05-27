import React from 'react';

const TodayDate = props => {
  let { timezone } = props
  let newTimezone = timezone === 'America/Los_Angeles' ? 'Los Angeles' : 'New York'

  return (
    <div onClick={props.DateTimeToggle} className='card-div'>
      <h1>Date & Time</h1>
      <div className='card-container'>
        <h2>{newTimezone}</h2>
        <h2>{props.date[5]}{props.date[6]}-{props.date[8]}{props.date[9]}-{props.date[0]}{props.date[1]}{props.date[2]}{props.date[3]}</h2>
        <h2>{props.date[11]}{props.date[12]}:{props.date[14]}{props.date[15]}:{props.date[17]}{props.date[18]}</h2>
      </div>
    </div>
  )
}

export default TodayDate;
