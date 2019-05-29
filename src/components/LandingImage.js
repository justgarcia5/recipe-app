import React from 'react';

const LandingImage = props => {

  return (
    <div className='landing-image'>
      <br />
      <div>
        {props.response &&
          <h2 className='search-result'>Results for {props.data.q}</h2>
        }
        {props.response &&
          props.data.hits.map((hit, index) => {
            return <h2 key={index}>{hit.recipe.label}</h2>
          })
        }
      </div>
    </div>
  );
}

export default LandingImage;
