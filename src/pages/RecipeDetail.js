import React from 'react';

class RecipeDetail extends React.Component {
  state = {
    recipe: []
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* {
        props.data.hits.map((hit, index) => {
          return (
            <div key={index} className='recipe-card'>
              <a href={`/recipe-detail/${hit.recipe.label}`}>
                <ul>
                  <li><img src={hit.recipe.image} alt='recipe-pic' className='recipe-image' /></li>
                  <li>{hit.recipe.label}</li>
                </ul>
              </a>
            </div>
          )
        })
      } */}
      </div>
    )
  }
}

export default RecipeDetail;
