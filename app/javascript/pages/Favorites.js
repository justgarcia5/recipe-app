import React, { useState, useEffect } from 'react'
import {
  Link
} from 'react-router-dom'

const Favorites = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch(`/recipes.json`)
      .then((response) => response.json())
      .then((recipes) => {
        setRecipes(recipes)
    })
  }, [])

  return (
    <div className='favorites-div'>
      <h1 className='favorites-title'>Favorites</h1>
      <div className='search-result-container'>
      {recipes.map((recipe, index) => {
        return (
          <div key={index} className='recipe-card'>
            <Link to={`/members/favorites/detail/${recipe.id}`} >
              <ul>
                <li><img src={recipe.image} alt='recipe-pic' className='recipe-image'/></li>
                <hr/>
                <li className='recipe-label'>{recipe.label}</li>
              </ul>
            </Link>
          </div>
        )})
      }
      </div>
    </div>
  )
}

export default Favorites;
