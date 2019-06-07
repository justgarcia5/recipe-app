import React from 'react';

import Home from '../pages/Home'

class Authenticated extends React.Component {
  render () {
    return (
      <div>
        <h1>Authenticated</h1>
        <Home />
      </div>
    )
  }
}

export default Authenticated;
