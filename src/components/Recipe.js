import React from 'react'

const APP_KEY = 'b553d12844b50e38e7f0426de87800e2'
const APP_ID = '61f1760b'

class RecipeApi extends React.Component {
  state = {
    data: [],
    search: '',
    errors: null,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
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
    console.log(this.state.data.params)
    console.log(this.state.data.count)
    console.log(this.state.data)

    if(this.state.data.q !== '') {
      this.state.date.q = <h1>Results for {this.state.data.q}</h1>
    } else {

    }

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='input-form'>
          <input
            className='input'
            type='text'
            name='search'
            onChange={this.inputHandler}
            value={this.state.search}
          />
          <button type='submit'>Search</button>
        </form>
        {errors}
        { }

        {this.state.data.recipes}
        {/* <div> */}
          {/* {this.state.data.map(val => <h1>{val.hit.recipe.label}</h1>)} */}
        {/* </div> */}
      </div>
    )
  }
}

export default RecipeApi
