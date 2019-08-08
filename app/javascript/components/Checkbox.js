import React from 'react'

class Checkbox extends React.Component {
  state = {
    checked: false,
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
      }

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
            this.setState({responseOk: true})
          } else {
            this.setState({responseOk: false, errors: json})
          }
          return json
        })
      }).catch((errors) => {
        this.setState({responseOk: false, errors: {"System Error": ["Unknown problem has occurred"]}})
      })
    }
  }

  render () {
    console.log(this.state.recipe)

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
