import React from 'react';
import Errors from './Errors'
import RecipeCards from './RecipeCards';

const RecipesLanding = props => {
  return (
    <div className='landing-image'>
      <br />
      <div>
        <Errors
          errors={props.errors}
        />
      </div>
      <div>
        {!props.response &&
          <h2 className='search-result-q'>Popular Recipes</h2>
        }
      </div>
      <div>
        {props.response &&
          <h2 className='search-result-q'>Results for {props.data.q}...</h2>
        }
      </div>
      <RecipeCards
        response={props.response}
        data={props.data}
        popular={props.popular}
      />
    </div>
  );
}

export default RecipesLanding;
