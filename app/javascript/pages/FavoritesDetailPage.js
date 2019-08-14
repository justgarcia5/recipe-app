import React from 'react'
import {
  Redirect

} from 'react-router-dom'

import Checkbox from '../components/Checkbox'
import DailyNutrients from '../components/DailyNutrients'
import TotalNutrients from '../components/TotalNutrients'


class FavoritesDetailPage extends React.Component {
  state = {
    recipes: [],
    responseOk: false
  }

  componentDidMount = () => {
    fetch(`/recipes/${this.props.match.params.id}.json`)
      .then((response) => response.json())
      .then((recipes) => {
        this.setState({ recipes: recipes })
    })
  }

  removeFavorites = (id) => {
    fetch(`/recipes/${this.props.match.params.id}.json`, {
      method: 'DELETE'
    }).then(response => response.json()
    ).catch((errors) => {
      this.setState({ errors: {"System Error": ["Unknown problem has occurred"]}, responseOk: true })
    })
  }

  render () {
    let { recipes, responseOk } = this.state
    return (
      <div>
        {
          responseOk &&
          <Redirect to='/members/favorites' />
        }
        <div className='recipe-detail'>
          {recipes.label}
          <p onClick={this.removeFavorites.bind(this)}>- Remove</p>
        </div>
      </div>
    )
  }
}

export default FavoritesDetailPage
