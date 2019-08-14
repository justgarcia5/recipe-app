import React from 'react'

import Checkbox from '../components/Checkbox'
import DailyNutrients from '../components/DailyNutrients'
import TotalNutrients from '../components/TotalNutrients'


class FavoritesDetailPage extends React.Component {
  state = {
    recipe: []
  }

  componentDidMount = () => {
    fetch(`/recipes/${this.props.match.params.id}.json`)
      .then((response) => response.json())
      .then((recipe) => {
        this.setState({ recipe: recipe })
    })
  }

  render () {
    // console.log(this.state.recipe)
    let { recipe } = this.state
    return (
      <div className='recipe-detail'>
        {recipe.label}
        <Checkbox
          recipe={recipe}
          id={this.props.match.params.id}
        /> Favorite
      </div>
    )
  }
}

export default FavoritesDetailPage
