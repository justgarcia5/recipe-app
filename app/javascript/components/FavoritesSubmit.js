import React from 'react'

class FavoritesSubmit extends React.Component {
  state = {
    checked: false,
    responseOk: false,
    favorites: false,
    errors: null,
    filteredLabels: false,
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

  favoritesSubmitHandler = (e) => {
    let { recipe, checked } = this.state
    let check = checked === false ? true : false
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
            this.setState({ favorites: true, checked: check, responseOk: true })
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

  FavIconPrevent = () => {
    let dbRecipeLabels = this.props.recipes.map((recipe) => recipe.label)
    let duplicateLabel = dbRecipeLabels.filter((label) => label === this.props.recipe.label)
    let removeArr = duplicateLabel.pop()
    console.log(this.props.recipe.label)
    console.log(removeArr)
    if(removeArr == this.props.recipe.label) {
      let filteredLabels = true
      this.setState({ filteredLabels: filteredLabels })
      console.log(this.state.filteredLabels)
    }
  }

  componentDidMount = () => {
    this.FavIconPrevent()
    // console.log(this.state.filteredLabels)

  }


  render () {
    let { filteredLabels, responseOk } = this.state
    let favPointStyle = {
      cursor: 'pointer'
    }

    return (
      <div style={favPointStyle}>
        {
          filteredLabels &&
          <p>Added to Favorites</p>
        }
        {
          !responseOk &&
          <p onClick={this.favoritesSubmitHandler.bind(this)}>+ Favorites</p>
        }
      </div>
    )
  }
}

export default FavoritesSubmit
