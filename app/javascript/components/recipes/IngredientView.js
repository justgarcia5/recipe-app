import React from "react";

class IngredientView extends React.Component {
  state = {
    ingredients: []
  };

  componentDidMount = () => {
    fetch(`/ingredients.json`)
      .then(res => res.json())
      .then(data => {
        let filteredIngredients = data.filter(
          ingredient => ingredient.recipe_id === this.props.recipes.id
        );
        console.log(filteredIngredients, this.props.recipes.id);
        this.setState({ ingredients: filteredIngredients });
      });
  };

  render() {
    return (
      <div>
        {this.state.ingredients.map((ingredient, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{ingredient.text}</li>
                <li>{ingredient.weight}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default IngredientView;
