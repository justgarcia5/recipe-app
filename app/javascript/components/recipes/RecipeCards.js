import React from "react";
import { Link } from "react-router-dom";

const RecipeCards = props => {
  return (
    <div className="search-result-container">
      {props.response &&
        props.data.hits.map((hit, index) => {
          return (
            <div key={index} className="recipe-card">
              <Link
                to={`/recipe-detail/${index}/${hit.recipe.label}`}
                data={props.hits}
              >
                <img
                  src={hit.recipe.image}
                  alt="recipe-pic"
                  className="recipe-image"
                />
                <ul>
                  <hr />
                  <li className="recipe-label">{hit.recipe.label}</li>
                  {/* <li>{hit.recipe.source}</li> */}
                  {hit.recipe.dietLabels.map((dietLabel, index) => {
                    return <li key={index}>{dietLabel}</li>;
                  })}
                </ul>
              </Link>
            </div>
          );
        })}

      {!props.response &&
        props.popular.map((recipe, index) => {
          return (
            <div key={index} className="recipe-card">
              <Link
                to={`/recipe-detail/${index}/${recipe.label}`}
                data={props.hits}
              >
                <ul>
                  <li>
                    <img
                      src={recipe.image}
                      alt="recipe-pic"
                      className="recipe-image"
                    />
                  </li>
                  <hr />
                  <li className="recipe-label">{recipe.label}</li>
                  {/* <li>{recipe.source}</li> */}
                  {recipe.dietLabels.map((dietLabel, index) => {
                    return <li key={index}>*{dietLabel}</li>;
                  })}
                </ul>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default RecipeCards;
