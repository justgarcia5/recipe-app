import React from 'react';
import DateTimeCard from './DateTimeCard'

class DateApi extends React.Component {
  state = {
    errors: null,
    region: '',
    city: '',
    date: {
      datetime: '',
      unixtime: '',
      timezone: '',
    },
  }

  componentDidMount = () => {
    fetch(`http://worldtimeapi.org/api/timezone/America/New_York`)
      .then(res => res.json())
      .then(data => this.setState({ date: data, city: 'Los_Angeles' }))
      .catch(errors => {
        console.log(errors)
        this.setState({ errors: errors })
      })
  }

  DateFetch = () => {
    this.DateTimeToggle()
    fetch(`http://worldtimeapi.org/api/timezone/America/${this.state.city}`, {
      method: 'GET',
      dataType: "JSON"
    }).then(res => res.json())
      .then(data => this.setState({ date: data }))

  }

  DateTimeToggle = () => {
    let { city } = this.state
    let newCity = city === 'New_York' ? 'Los_Angeles' : 'New_York'
    this.setState({ city: newCity })
  }

  render() {
    let { errors } = this.state

    return (
      <div>
        {errors}
        <DateTimeCard
          DateTimeToggle={this.DateFetch}
          date={this.state.date.datetime}
          timezone={this.state.date.timezone}
        />
      </div>
    )
  }
}

export default DateApi;
