import React from 'react';
import DailyNutrients from '../components/DailyNutrients';
import TotalNutrients from '../components/TotalNutrients';
import FavoritesSubmit from '../components/FavoritesSubmit'

const APP_KEY = 'b553d12844b50e38e7f0426de87800e2'
const APP_ID = '61f1760b'

class RecipeDetail extends React.Component {
  state = {
    recipes: [],
    ingredientText: [],
    ingredientWeight: [],
  }

  componentDidMount = () => {
    fetch(`https://api.edamam.com/search?q=${this.props.match.params.label}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then((data) => {
        let recipes = data.hits.map((hit) => hit.recipe)
        let filteredRecipeNames = recipes.filter((recipe) => recipe.label === this.props.match.params.label)
        let filteredRecipes = filteredRecipeNames.filter((recipe, index) => index === 0)
        let ingredientsText = filteredRecipes.map((recipe) => {
          return recipe.ingredients.map((ingredient) => {
            return ingredient.text
          })
        })
        let ingredientsWeight = filteredRecipes.map((recipe) => {
          return recipe.ingredients.map((ingredient) => {
            return ingredient.weight
          })
        })
        // console.log(ingredientsText, ingredientsWeight)

        this.setState({
          recipes: filteredRecipes,
          ingredientText: ingredientsText,
          ingredientWeight: ingredientsWeight
        })
        console.log(this.state.ingredientText, this.state.ingredientWeight)
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
                <hr/>
                <div className='detail-page-row-1'>
                  <div>
                    <img src={recipe.image} alt='recipe' className='recipe-detail-image' />
                    <p><b>Source:</b> {recipe.source}</p>
                    <p><b>Total Calories:</b> {Math.floor(recipe.calories)}</p>
                    {this.props.currentUser &&
                      <FavoritesSubmit
                      recipe={recipe}
                      recipes={this.props.recipes}
                      ingredientText={this.state.ingredientText}
                      ingredientWeight={this.state.ingredientWeight}
                    />
                    }
                  </div>
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
                <div className='recipe-detail-url'>
                  <p><b>Cooking Instructions:</b></p>
                  <i>
                    <a href={recipe.url} rel="noopener noreferrer" target="_blank">{recipe.url}</a>
                  </i>
                </div>
                {/* <div className='recipe-health-labels-div'>
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
                </div> */}
                <div className='recipe-detail-nutrients'>
                  <DailyNutrients recipe={recipe} />
                  <TotalNutrients recipe={recipe} />
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
