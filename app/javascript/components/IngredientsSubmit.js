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
      return ingredient.map((ingredient, index) => ingredient.text)
    })

    let weight = this.props.ingredients.map((ingredient, index) => {
      return ingredient.map((ingredient) => ingredient.weight)
    })
    console.log(text, weight)
    this.setState({ ingredient: {
      text: text,
      weight: weight,
    }})
  }

  ingredientsSubmit = (e) => {
    e.preventDefault()
    this.props.favoritesSubmit()
    let { ingredient } = this.state
    fetch('/ingredients.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingredient: ingredient })
    }).then((response) => response.json())
    .then((ingredients) => ingredients)
    .catch((errors) => console.log(errors))
  }

  render() {
    // console.log(this.state.ingredient.text)
    // this.props.favoritesSubmit()

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
