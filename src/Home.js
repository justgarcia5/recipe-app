import React from 'react';
import './App.css';

import DateApi from './components/DateApi'

function Home() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <DateApi />
    </div>
  );
}

export default Home;
