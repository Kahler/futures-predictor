import logo from './logo.svg';
import './App.css';
import GraphChart from './components/GraphChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GraphChart />
      </header>
    </div>
  );
}

export default App;
