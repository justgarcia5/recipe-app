import React from 'react'
import {
  Link
} from 'react-router-dom'

class Favorites extends React.Component {
  state = {
    recipes: [],
  }

  componentDidMount = () => {
    fetch(`/recipes.json`)
      .then((response) => response.json())
      .then((recipes) => {
        this.setState({ recipes: recipes })
    })
  }

  render () {
    let { recipes } = this.state

    return (
      <div className='favorites-div'>
        <h1 className='favorites-title'>Favorites</h1>
        <div className='search-result-container'>
        { recipes.map((recipe, index) => {
            return (
              <div key={index} className='recipe-card'>
                <Link to={`/members/favorites/detail/${recipe.id}`} >
                  <ul>
                    <li><img src={recipe.image} alt='recipe-pic' className='recipe-image' /></li>
                    <hr/>
                    <li className='recipe-label'>{recipe.label}</li>
                  </ul>
                </Link>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default Favorites;
