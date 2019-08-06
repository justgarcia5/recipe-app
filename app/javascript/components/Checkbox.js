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
        totalDaily: {},
        totalNutrients: {},
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
        body: JSON.stringify({recipe: this.props.recipe})
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
