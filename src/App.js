import React from 'react';
import './App.css';
import LineChart from './components/LineChart';
import { FButton } from './components/FButton';
import { Grid } from './components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid />
        {/* <LineChart /> */}
      </header>
      <nav className="navigation">
        <FButton reference={`/`}>Graph</FButton>
        <FButton reference={`/futures`}>Futures Map</FButton>
      </nav>
    </div>
  );
}

export default App;
