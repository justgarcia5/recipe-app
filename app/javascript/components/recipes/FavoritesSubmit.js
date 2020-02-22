import React from "react";

import IngredientsSubmit from "./IngredientsSubmit";

class FavoritesSubmit extends React.Component {
  state = {
    checked: false,
    responseOk: false,
    recipe: {
      calories: this.props.recipe.calories,
      totalWeight: this.props.recipe.totalWeight,
      image: this.props.recipe.image,
      label: this.props.recipe.label,
      source: this.props.recipe.source,
      url: this.props.recipe.url,
      user_id: this.props.currentUser.id
    }
  };

  favoritesSubmit = e => {
    let { recipe, checked } = this.state;
    let check = checked === false ? true : false;
    if (check === true) {
      console.log(recipe);
      fetch("/recipes.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ recipe: recipe })
      })
        .then(response => {
          return response.json().then(json => {
            if (response.status === 201) {
              this.setState({ checked: check, responseOk: true });
            }
            return json;
          });
        })
        .catch(errors => console.log(errors));
    } else {
      this.setState({ checked: check });
    }
  };

  render() {
    let { filteredLabels, responseOk } = this.state;
    let favPointStyle = {
      cursor: "pointer",
      color: "green",
      fontSize: "26px"
    };
    return (
      <div style={favPointStyle}>
        <IngredientsSubmit
          favoritesSubmit={this.favoritesSubmit.bind(this)}
          ingredients={this.props.ingredients}
          responseOk={responseOk}
          filteredRecipeId={this.state.filteredRecipeId}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default FavoritesSubmit;
