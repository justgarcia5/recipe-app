import React from 'react'

const RecipeCards = props => {
  return (
    <div className='search-result-container'>
      {props.response &&
        props.data.hits.map((hit, index) => {
          return (
            <div key={index} className='recipe-card'>
              <a href={`/recipe-detail/${index}/${hit.recipe.label}`}>
                <ul>
                  <li><img src={hit.recipe.image} alt='recipe-pic' className='recipe-image' /></li>
                  <li className='recipe-label'>{hit.recipe.label}</li>
                  <li>{hit.recipe.source}</li>
                  {
                    hit.recipe.dietLabels.map((dietLabel, index ) => {
                      return (
                        <li key={index}>{dietLabel}</li>
                      )
                    })
                  }
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
