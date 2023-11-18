import logo from './logo.svg';
import './App.css';
import GraphChart from './components/GraphChart';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LineChart />
      </header>
    </div>
  );
}

export default App;
