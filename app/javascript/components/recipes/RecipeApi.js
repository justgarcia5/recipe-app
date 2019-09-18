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
    checked: false
  }

  componentDidMount = () => {
    fetch(`https://api.edamam.com/search?q=top&app_id=${APP_ID}&app_key=${APP_KEY}`)
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
        this.setState({ responseOk: false, errors: errors })
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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous"/>

        <div className="container">
          <br/>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <form  onSubmit={this.handleSubmit}>
                <div className="card-body row no-gutters align-items-center">
                  <div className='search-icon'>
                    <i className="fas fa-search h4 text-body"></i>
                  </div>
                  <div className="col">
                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search recipes" onChange={this.inputHandler}/>
                  </div>
                  <div className="col-auto"  style={{padding: '10px'}}>
                    <button className="btn btn-sm btn-success" type="submit">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <RecipeLanding
          data={this.state.data}
          response={this.state.responseOk}
          popular={this.state.popular}
          errors={errors}
          {...this.props}
        />
      </div>
    )
  }
}

export default RecipeApi
