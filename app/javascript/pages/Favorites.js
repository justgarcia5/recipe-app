import React from 'react'

class Favorites extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount = () => {
    fetch('/recipes.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      this.setState({ recipes: json })
    })
  }

  render () {
    console.log(this.state.recipes)
    return (
      <div>
        <h1>Favorites</h1>
        <div>
        { this.state.recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <p>{recipe.source}</p>
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
