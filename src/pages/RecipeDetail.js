import React from 'react';

const APP_KEY = 'b553d12844b50e38e7f0426de87800e2'
const APP_ID = '61f1760b'

class RecipeDetail extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount = () => {
    fetch(`https://api.edamam.com/search?q=${this.props.match.params.label}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then((data) => {
        let recipes = data.hits.map((hit) => hit.recipe)
        let filteredRecipes = recipes.filter((recipe, index) => recipe.label === this.props.match.params.label && index === 0)
        this.setState({ recipes: filteredRecipes })
      })
  }

  render() {
    return (
      <div className='recipe-detail'>
        {
          this.state.recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <p className='recipe-detail-title' id='title'>{recipe.label}</p>
                <div className='detail-page-row-1'>
                  <img src={recipe.image} alt='recipe' className='recipe-detail-image' />
                  <div className='recipe-ingredients-list'>
                    <h2>Ingredients</h2>
                    {
                      recipe.ingredients.map((ingredient, index) => {
                        return (
                          <div key={index}>
                            <ul>
                              <li>{ingredient.text}</li>
                              <li className='recipe-ingredients-weight'>Weight: {Math.floor(ingredient.weight)} grams</li>
                            </ul>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <p className='recipe-source'>Source: <b>{recipe.source}</b></p>
                <div className='recipe-health-labels-div'>
                  <h2>Health Labels</h2>
                  {
                    recipe.healthLabels.map((label, index) => {
                      return (
                        <div key={index}>
                          <ul>
                            <li className='recipe-health-labels'>{label}</li>
                          </ul>
                        </div>
                      )
                    })
                  }
                </div>
                <h2>Total Calories {Math.floor(recipe.calories)}</h2>
                <div>
                  <h2>Nutrients</h2>
                  <p>{recipe.totalNutrients.ENERC_KCAL.label}</p>
                  <p>{recipe.totalNutrients.ENERC_KCAL.quantity}</p>
                  <p>{recipe.totalNutrients.ENERC_KCAL.unit}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default RecipeDetail;
