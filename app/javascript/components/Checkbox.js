import React from 'react'

class Checkbox extends React.Component {
  state = {
    checked: false,
    recipes: [],
    favorites: false,
    errors: null,
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
        digest: this.props.recipe.digest,
        favorites: true,
      },

  }

  componentDidMount = () => {
    fetch(`/recipes.json`)
      .then((response) => response.json())
      .then((recipes) => {
        this.setState({ recipes: recipes })
    })
  }

  checkBoxHandler = (e) => {
    let { recipe, checked } = this.state
    // let checked = e.target.checked
    let check = checked === false ? true : false
    console.log(check)
    if(check === true) {
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
            this.setState({ favorites: true, checked: check })
          }
          return json
        })
      }).catch((errors) => {
        this.setState({ errors: {"System Error": ["Unknown problem has occurred"]} })
      })
    } else {
      this.setState({ checked: check})
    }
  }


  render () {
    // console.log(this.state.checked)
    return (
      <div>
        {/* <input
          type="checkbox"
          onChange={this.checkBoxHandler}
        /> */}
        <p onClick={this.checkBoxHandler.bind(this)}>+ Favorites</p>
      </div>
    )
  }
}

export default Checkbox
