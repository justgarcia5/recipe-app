import React from 'react';
import './App.css';

import DateApi from './components/DateApi'
import RecipeApi from './components/RecipeApi';

function Home() {
  return (
    <div >
      <div className="Home">
        <h1 >RecipeApp</h1>
      </div>
      {/* <DateApi /> */}
      <RecipeApi />
      <br />

    </div>
  );
}

export default Home;
