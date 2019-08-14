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
    console.log(recipes, this.props)
    return (
      <div>
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
                      {/* <li>{recipe.source}</li> */}
                      {
                        recipe.dietLabels.map((dietLabel, index ) => {
                          return (
                            <li key={index}>{dietLabel}</li>
                          )
                        })
                      }
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
