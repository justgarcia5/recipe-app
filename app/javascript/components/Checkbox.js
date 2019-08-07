import React from 'react'

class Checkbox extends React.Component {
  state = {
    checked: false,
    recipe: [
      {
        calories: '',
        cautions: [],
        dietLabels: [],
        healthLabels: [],
        image: '',
        ingredients: [],
        label: '',
        source: '',
        totalDaily: [],
        totalNutrients: [],
        totalWeight: '',
        url: '',
        digest: []
      }
    ]
  }

  checkBoxHandler = (e) => {
    let checked = e.target.checked
    if(checked === true) {
      // e.preventDefault()
      fetch('/recipes.json', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({recipe: [
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
        ]})
      }).then((response) => {
        return response.json().then((json) => {
          return json
        })
      })
      console.log(this.props.recipe)
    } else {
      console.log("false")
      this.setState({ checked: checked })
    }
  }

  render () {
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
