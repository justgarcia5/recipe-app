import React from 'react'

const API_KEY = 'b553d12844b50e38e7f0426de87800e2'
const API_ID = '61f1760b'

class RecipeApi extends React.Component {
  state = {
    data: [
      {
        hits: []
      }
    ],
    search: '',
    errors: null,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${API_ID}&app_key=${API_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data })
        console.log(this.state.data.hits)
      })
      .catch(errors => {
        console.log(errors)
        this.setState({ errors: errors })
      })

  }

  inputHandler = (e) => {
    let search = e.target.value
    this.setState({ search: search })
  }

  render() {
    let { errors } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.inputHandler}
            value={this.state.search}
          />
          <button type='submit'>Search</button>
        </form>
        {errors}
      </div>
    )
  }
}

export default RecipeApi
