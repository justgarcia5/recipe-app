import React from 'react'

import IngredientsSubmit from './IngredientsSubmit'

class FavoritesSubmit extends React.Component {
  state = {
    checked: false,
    responseOk: false,
    filteredLabels: false,
    filteredRecipeId: '',
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
    let recipeId = this.props.recipes.filter((recipe) => recipe.user_id  )
    this.setState({
      filteredRecipeId: recipeId,
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
      }).catch((errors) => console.log(errors))
    } else {
      this.setState({ checked: check})
    }
  }

  render () {
    console.log(this.props.currentUser.id, this.props.recipes, this.state.filteredRecipeId)

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
          favoritesSubmit={this.favoritesSubmit.bind(this)}
          ingredients={this.props.ingredients}
          responseOk={responseOk}
          filteredRecipeId={this.state.filteredRecipeId}
          currentUser={this.props.currentUser}
        />
      </div>
    )
  }
}

export default FavoritesSubmit
