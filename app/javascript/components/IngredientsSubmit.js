import React from 'react'

class IngredientsSubmit extends React.Component {
  state = {
    ingredient: {
        text: [],
        weight: []
    }
  }

  componentDidMount = () => {
    let text = this.props.ingredients.map((ingredient, index) => {
      return ingredient.map((ingredient) => ingredient.text)
    })
    let weight = this.props.ingredients.map((ingredient, index) => {
      return ingredient.map((ingredient) => ingredient.weight)
    })
    console.log(text, weight)
    this.setState({ ingredient: {
      text: text,
      weight: weight
    }})
  }

  ingredientsSubmit = () => {
    let { ingredient } = this.state
    this.props.favoritesSubmitHandler()
    fetch('/ingredients.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredient: ingredient
      })
    }).then((response) => response.json())
    .then((ingredients) => ingredients)
    .catch((errors) => {
      console.log(errors)
      this.setState({ errors: {"System Error": ["Unknown problem has occurred"]} })
    })
  }

  render() {
    // console.log(this.state.ingredients)

    return(
      <div>
        {
          !this.props.responseOk &&
          <p onClick={this.ingredientsSubmit.bind(this)}>+ Favorites</p>
        }
      </div>
    )
  }
}

export default IngredientsSubmit
