import React from 'react'

import IngredientsSubmit from './IngredientsSubmit'

class FavoritesSubmit extends React.Component {
  state = {
    checked: false,
    responseOk: false,
    errors: null,
    filteredLabels: false,
    recipe:
      {
        calories: '',
        totalWeight: '',
        image: '',
        label: '',
        source: '',
        url: '',
      },
  }

  componentDidMount = () => {
    this.setState({
      recipe:
      {
        calories: this.props.recipe.calories,
        totalWeight: this.props.recipe.totalWeight,
        image: this.props.recipe.image,
        label: this.props.recipe.label,
        source: this.props.recipe.source,
        url: this.props.recipe.url,
      },
    })
  }

  favoritesSubmit = (e) => {
    let { recipe, checked } = this.state
    let check = checked === false ? true : false
    if(check === true) {
      console.log("Favorite successfully submitted");
      fetch('/recipes.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipe: recipe })
      }).then((response) => {
        return response.json().then((json) => {
          if(response.status === 201) {
            this.setState({ checked: check, responseOk: true })
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
    let { filteredLabels, responseOk } = this.state
    let favPointStyle = {
      cursor: 'pointer',
      color: 'green',
      fontSize: '26px'
    }

    return (
      <div style={favPointStyle}>
        {
          filteredLabels &&
          <p>Added to Favorites</p>
        }

        <IngredientsSubmit
          favoritesSubmit={this.favoritesSubmit}
          ingredients={this.props.ingredients}
          responseOk={responseOk}
        />
      </div>
    )
  }
}

export default FavoritesSubmit
