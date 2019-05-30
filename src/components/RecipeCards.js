import React from 'react'

const RecipeCards = props => {
  return (
    <div className='search-result-container'>
      {props.response &&
        props.data.hits.map((hit, index) => {
          return (
            <div key={index} className='recipe-card'>
              <a href='recipe-detail'>
                <ul>
                  <li><img src={hit.recipe.image} alt='recipe-pic' className='recipe-image' /></li>
                  <li>{hit.recipe.label}</li>
                </ul>
              </a>
            </div>
          )
        })
      }
    </div>
  )
}

export default RecipeCards;
