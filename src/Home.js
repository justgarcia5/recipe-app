import React from 'react';
import './App.css';

import RecipeApi from './components/RecipeApi';

function Home() {
  return (
    <div >
      <div className="Home">
        <h1 >RecipeApp</h1>
      </div>
      <RecipeApi />
      <br />

    </div>
  );
}

export default Home;
