import React from "react";
import { Link } from "react-router-dom";

const RecipeCards = props => {
  return (
    <div className="search-result-container">
      {props.response &&
        props.data.hits.map((hit, index) => {
          return (
            <div key={index}>
              <div className="d-flex">
                <div className="card">
                  <div className="card-section">
                    <div className="card-section-image">
                      <Link to={`/recipe-detail/${index}/${hit.recipe.label}`} data={props.hits}>
                        <img src={hit.recipe.image} className="img-fluid" />
                      </Link>
                    </div>
                    <div className="card-desc">
                      <div className="title">
                        <h6>{hit.recipe.label}</h6>
                      </div>
                      <div className="card-info">
                        <ul className="list-unstyle">
                          {hit.recipe.dietLabels.map((dietLabel, index) => {
                            return(
                              <div key={index}>
                                <p>* {dietLabel}</p>
                                <Link to={`/recipe-detail/${index}/${hit.recipe.label}`} className="cart_btn btn btn-dark" data={props.hits}>Read More..</Link>
                              </div>
                              )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }

      {!props.response &&
        props.popular.map((recipe, index) => {
          return (
            <div key={index}>
              <div className="d-flex">
                <div className="card">
                  <div className="card-section">
                    <div className="card-section-image">
                      <Link to={`/recipe-detail/${index}/${recipe.label}`} data={props.hits}>
                        <img src={recipe.image} className="img-fluid" />
                      </Link>
                    </div>
                    <div className="card-desc">
                      <div className="title">
                        <h6>{recipe.label}</h6>
                      </div>
                      <div className="card-info">
                        <ul className="list-unstyle">
                          {recipe.dietLabels.map((dietLabel, index) => {
                            return(
                              <div key={index}>
                                <p>* {dietLabel}</p>
                                <Link to={`/recipe-detail/${index}/${recipe.label}`} className="cart_btn btn btn-dark" data={props.hits}>Read More..</Link>
                              </div>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default RecipeCards;

{/* <div key={index} className="recipe-card">
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
                  {recipe.dietLabels.map((dietLabel, index) => {
                    return <li key={index}>*{dietLabel}</li>;
                  })}
                </ul>
              </Link>
            </div>  */}
