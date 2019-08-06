import React from 'react'

const APP_KEY = 'b553d12844b50e38e7f0426de87800e2'
const APP_ID = '61f1760b'

class Checkbox extends React.Component {
  state = {
    checked: false
  }

  checkBoxHandler = (e) => {
    let checked = e.target.checked
    if(checked === true) {
      fetch(`https://api.edamam.com/search?q=${this.props.params.label}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then((data) => {
        let recipes = data.hits.map((hit) => hit.recipe)
        let filteredFavorites = recipes.filter((recipe, index) => recipe.label === this.props.params.label && index === 0)
      console.log(filteredFavorites)
      this.setState({ checked: checked })

      })
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
