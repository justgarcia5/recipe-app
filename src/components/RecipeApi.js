import React from 'react'
import RecipeLanding from './RecipesLanding'

const APP_KEY = 'b553d12844b50e38e7f0426de87800e2'
const APP_ID = '61f1760b'

class RecipeApi extends React.Component {
  state = {
    data: [],
    popular: [],
    responseOk: false,
    search: '',
    errors: null,
  }

  // componentDidMount = () => {
  //   fetch(`https://api.edamam.com/search?q=Popular&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       let popularRecipes = data.hits.map((hit) => hit.recipe)
  //       console.log(popularRecipes)
  //       this.setState({ popular: popularRecipes })
  //     })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => this.setState({ data: data, responseOk: true, search: ''}))
      .catch(errors => {
        this.setState({ errors: errors })
      })
  }

  inputHandler = (e) => {
    let search = e.target.value
    this.setState({ search: search })
  }

  render() {
    let { errors } = this.props

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
      </div>
    )
  }
}

export default RecipeApi
