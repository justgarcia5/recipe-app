import React, { useState, useEffect } from 'react';

import DailyNutrients from '../components/recipes/DailyNutrients';
import TotalNutrients from '../components/recipes/TotalNutrients';
import FavoritesSubmit from '../components/recipes/FavoritesSubmit'

const APP_KEY = 'b553d12844b50e38e7f0426de87800e2'
const APP_ID = '61f1760b'

const RecipeDetail = props => {
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${props.match.params.label}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then((data) => {
        let recipes = data.hits.map((hit) => hit.recipe)
        let filteredRecipeNames = recipes.filter((recipe) => recipe.label === props.match.params.label)
        let filteredRecipes = filteredRecipeNames.filter((recipe, index) => index === 0)
        let ingredients = filteredRecipes.map((recipe) => recipe.ingredients)
        setRecipes(filteredRecipes)
        setIngredients(ingredients)
      });
  }, [])

  return (
    <div className='recipe-detail'>
      {
        recipes.map((recipe, index) => {
          return (
            <div key={index}>
              <p className='recipe-detail-title' id='title'>{recipe.label}</p>
              <hr/>
              <div className='detail-page-row-1'>
                <div>
                  <img src={recipe.image} alt='recipe' className='recipe-detail-image' />
                  <p><i>Source: </i> {recipe.source}</p>
                  <p><i>Total Calories: </i> {Math.floor(recipe.calories)}</p>
                  {props.currentUser &&
                    <FavoritesSubmit
                    recipe={recipe}
                    ingredients={ingredients}
                    currentUser={props.currentUser}
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

export default RecipeDetail;
