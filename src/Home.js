import React from 'react';
import './App.css';

import DateApi from './components/DateApi'
import RecipeApi from './components/Recipe';

function Home() {
  return (
    <div className="App">
      <br />
      <h1>RecipeApp</h1>
      <div>
        <DateApi />
      </div>
      <RecipeApi />
    </div>
  );
}

export default Home;
