import React from 'react';

class LandingImage extends React.Component {

  render() {
    console.log(this.props.pop)

    return (
      <div className='landing-image'>
        <br />
        <div>
          {!this.props.response &&
            <h2 className='search-result'>{this.props.pop.q} Recipes</h2>
          }
          {/* {!this.props.response &&
            this.state.pop.hits.map((hit, index) => {
              return <h2 key={index}>{hit.recipe.label}</h2>
            })
          } */}
          {this.props.response &&
            <h2 className='search-result'>Results for {this.props.data.q}</h2>
          }
          {this.props.response &&
            this.props.data.hits.map((hit, index) => {
              return (
                <div key={index} className='recipe-card'>
                  <ul>
                    <li><img src={hit.recipe.image} alt='recipe-pic' /></li>
                    <li>{hit.recipe.label}</li>
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default LandingImage;
