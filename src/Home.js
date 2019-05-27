import React from 'react';
import './App.css';

import DateApi from './components/DateApi'

function Home() {
  return (
    <div className="App">
      <div>
        <DateApi />
      </div>
    </div>
  );
}

export default Home;
