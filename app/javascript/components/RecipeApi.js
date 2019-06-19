import React from 'react'

import RecipeLanding from './RecipesLanding'

const APP_KEY = env.REACT_APP_RECIPE_APP_KEY
const APP_ID = env.REACT_APP_RECIPE_APP_ID

class RecipeApi extends React.Component {
  state = {
    data: [],
    popular: [],
    responseOk: false,
    search: '',
    errors: null,
    favorites: false
  }

  componentDidMount = () => {
    fetch(`https://api.edamam.com/search?q=popular&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then(data => {
        let popularRecipes = data.hits.map((hit) => hit.recipe)
        this.setState({ popular: popularRecipes })
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => this.setState({ data: data, responseOk: true, search: '' }))
      .catch(errors => {
        this.setState({responseOk: false, errors: {"System Error": ["Unknown problem has occurred"]}})      })
  }

  inputHandler = (e) => {
    let search = e.target.value
    this.setState({ search: search })
  }

  render() {
    let { errors } = this.props
    console.log(APP_KEY)

    return (
      <div className='recipe-input'>
        <form onSubmit={this.handleSubmit} className='input-form'>
          <input
            className='input'
            placeholder='Chicken, Deserts, Healthy...'
            type='text'
            name='search'
            onChange={this.inputHandler}
            value={this.state.search}
          />
          <button type='submit' className='input-form-button'>Search</button>
        </form>
        <RecipeLanding
          data={this.state.data}
          response={this.state.responseOk}
          popular={this.state.popular}
          errors={errors}
        />
        <div className='bottom-link'>
        </div>
      </div>
    )
  }
}

export default RecipeApi
