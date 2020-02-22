import React from "react";
import { Redirect } from "react-router-dom";

import IngredientView from "../components/recipes/IngredientView";

class FavoritesDetailPage extends React.Component {
  state = {
    recipes: [],
    responseOk: false
  };

  componentDidMount = () => {
    fetch(`/recipes/${this.props.match.params.id}.json`)
      .then(response => response.json())
      .then(recipes => this.setState({ recipes: recipes }));
  };

  removeFavorites = id => {
    fetch(`/recipes/${this.props.match.params.id}.json`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .catch(errors => {
        this.setState({
          errors: { "System Error": ["Unknown problem has occurred"] },
          responseOk: true
        });
      });
  };

  render() {
    let { recipes, responseOk } = this.state;

    let favPointStyle = {
      cursor: "pointer",
      color: "red",
      fontSize: "26px"
    };

    return (
      <div>
        {responseOk && <Redirect to="/members/favorites" />}
        <div className="recipe-detail">
          <div>
            <p className="recipe-detail-title" id="title">
              {recipes.label}
            </p>
            <hr />
            <div className="detail-page-row-1">
              <div>
                <img
                  src={recipes.image}
                  alt="recipe"
                  className="recipe-detail-image"
                />
                <p>
                  <b>Source:</b> {recipes.source}
                </p>
                <p>
                  <b>Total Calories:</b> {Math.floor(recipes.calories)}
                </p>
                <a
                  onClick={this.removeFavorites.bind(this)}
                  style={favPointStyle}
                >
                  - Remove
                </a>
              </div>
              <div className="recipe-ingredients-list">
                <h2>Ingredients</h2>
                <IngredientView recipes={this.state.recipes} />
              </div>
            </div>
            <div className="recipe-detail-url">
              <p>
                <b>Cooking Instructions:</b>
              </p>
              <i>
                <a href={recipes.url} rel="noopener noreferrer" target="_blank">
                  {recipes.url}
                </a>
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FavoritesDetailPage;
