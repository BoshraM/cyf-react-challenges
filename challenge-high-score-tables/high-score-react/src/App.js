import React from 'react';
import './App.css';
import allCountryScores from './scores.js';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>this is the CYF-high-score-react page</h1>
        <Table allCountryScores={allCountryScores} />
      </header>

    </div>
  );
}

export default App;
