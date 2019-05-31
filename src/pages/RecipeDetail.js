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
        let filteredRecipes = recipes.filter((recipe, index) => {
          return index === parseInt(this.props.match.params.index)
        })
        this.setState({ recipes: filteredRecipes })
      })
  }

  render() {

    return (
      <div>
        {
          this.state.recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <p>{recipe.label}</p>
                <img src={recipe.image} alt='recipe' />
                <p>{recipe.source}</p>
                {
                  recipe.healthLabels.map((label, index) => {
                    return (
                      <div key={index}>
                        <p>{label}</p>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default RecipeDetail;
