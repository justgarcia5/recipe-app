import React from 'react'

class Checkbox extends React.Component {
  state = {
    checked: false,
    recipes: [],
    recipe:
      {
        calories: this.props.recipe.calories,
        cautions: this.props.recipe.cautions,
        dietLabels: this.props.recipe.dietLabels,
        healthLabels: this.props.recipe.healthLabels,
        image: this.props.recipe.image,
        ingredients: this.props.recipe.ingredients,
        label: this.props.recipe.label,
        source: this.props.recipe.source,
        totalDaily: this.props.recipe.totalDaily,
        totalNutrients: this.props.recipe.totalNutrients,
        totalWeight: this.props.recipe.totalWeight,
        url: this.props.recipe.url,
        digest: this.props.recipe.digest
      },

  }

  componentDidMount = () => {
    fetch(`/recipes.json`)
      .then((response) => response.json())
      .then((recipes) => {
        // let recipeID = recipes.map((recipe) => recipe.id)
        // let lastRecipe = recipeID[recipeID.length - 1]
        this.setState({ recipes: recipes })
    })
  }

  checkBoxHandler = (e) => {
    let { recipe } = this.state
    let checked = e.target.checked
    if(checked === true) {
      console.log("Favorite successfully submitted");
      fetch('/recipes.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({recipe: recipe})
      }).then((response) => {
        return response.json().then((json) => {
          if(response.status === 201) {
            this.setState({ responseOk: true })
          } else {
            this.setState({ responseOk: false, errors: json })
          }
          return json
        })
      }).catch((errors) => {
        this.setState({ errors: {"System Error": ["Unknown problem has occurred"]} })
      })
    } else if(checked === false) {
      fetch(`/recipes/${this.state.recipes}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
         },
      }).then(() => {
        // this.deleteRecipe(id)
        console.log('removed');
      }).catch(err => {
        console.error(err)
      });
    }
  }

  // deleteRecipe = (id) => {
  //   let filteredRecipes = this.state.recipes.filter((recipe) => recipe.id !== id)
  //   this.setState({ recipes: filteredRecipes })
  // }
  render () {
    console.log(this.state.recipes)
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.checkBoxHandler}
        />
      </div>
    )
  }
}

export default Checkbox
