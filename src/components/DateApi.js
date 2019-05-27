import React from 'react';
import TodayDate from './TodayDate'

class DateApi extends React.Component {
  state = {
    errors: null,
    date: {
      datetime: '',
      unixtime: '',
      timezone: '',
    },
    region: '',
    city: 'New_York'
  }

  componentDidMount = () => {
    fetch(`http://worldtimeapi.org/api/timezone/America/${this.state.city}`)
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
      method: 'GET'
    }).then(res => res.json())
      .then(data => this.setState({ date: data }))

  }

  DateTimeToggle = () => {
    let { city } = this.state
    console.log('i was clicked')
    let newCity = city === 'New_York' ? 'Los_Angeles' : 'New_York'
    // console.log(newCity)
    this.setState({ city: newCity })
    console.log(this.state.city)
  }

  render() {
    let { errors } = this.state
    // console.log(e)

    return (
      <div>
        {errors}
        <h1>Date</h1>
        <TodayDate
          DateTimeToggle={this.DateFetch}
          date={this.state.date.datetime}
          timezone={this.state.date.timezone}
        />
      </div>
    )
  }
}

export default DateApi;
