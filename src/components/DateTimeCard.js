import React from 'react';

const DateTimeCard = props => {
  let { timezone, date} = props;
  let newTimezone = timezone === 'America/Los_Angeles' ? 'Los Angeles' : 'New York';
  let monthFix = date[5] === 0 ? date[5] : null;

  return (
    <div className='card-div'>
      <div onClick={props.DateTimeToggle} className='card-container'>
        <h2>{newTimezone}</h2>
        <h2>{monthFix}{date[6]}-{date[8]}{date[9]}-{date[0]}{date[1]}{date[2]}{date[3]}</h2>
        <h2>{date[11]}{date[12]}:{date[14]}{date[15]}:{date[17]}{date[18]}</h2>
      </div>
    </div>
  )
}

export default DateTimeCard;
