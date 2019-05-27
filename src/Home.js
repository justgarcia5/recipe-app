import React from 'react';
import './App.css';

import DateApi from './components/DateApi'
import RecipeApi from './components/Recipe';

function Home() {
  return (
    <div className="App">
      <br/>
      <h1>RecipeApp</h1>
      <DateApi />
      <RecipeApi />
      <br/>
    </div>
  );
}

export default Home;
