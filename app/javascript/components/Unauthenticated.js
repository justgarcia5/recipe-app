import React from 'react';

import Home from '../pages/Home'

class Unauthenticated extends React.Component {
  render () {
    return (
      <div>
        <h1>Unauthenticated</h1>
        <Home />
      </div>
    )
  }
}

export default Unauthenticated;
