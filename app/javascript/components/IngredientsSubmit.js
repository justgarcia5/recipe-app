import React from 'react'

class IngredientsSubmit extends React.Component {
  state = {
    ingredient: {
        text: '',
        weight: ''
    }
  }

  componentDidMount = () => {
    let text = this.props.ingredients.map((ingredient, index) => {
      return ingredient.map((ingredient, index) => {
        return ingredient
      })
    })

    let weight = this.props.ingredients.map((ingredient, index) => {
      return ingredient.map((ingredient) => ingredient.weight)
    })
    console.log(Array.text, weight)
    this.setState({ ingredient: {
      text: text,
      weight: weight
    }})
  }

  ingredientsSubmit = () => {
    let { ingredient } = this.state
    this.props.favoritesSubmit()
    fetch('/ingredients.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingredient: ingredient })
    }).then((response) => response.json())
    .then((ingredients) => ingredients)
    .catch((errors) => {
      console.log(errors)
      this.setState({ errors: {"System Error": ["Unknown problem has occurred"]} })
    })
  }

  render() {
    console.log(this.state.ingredient)

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
