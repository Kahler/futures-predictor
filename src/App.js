import React, { useEffect, useState } from 'react';
import './App.css';
import { Grid } from './components/Grid';

function App() {
  const [stockMarket, setStockMarket] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(
      'https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=dc376cb55d5e600338867ca3e24b3728'
    )
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) => {
              setStockMarket(data);
              console.log(data);
            })
            .catch((r) => console.log(r));
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch((err) => console.log(err));

    fetch('https://via.ritzau.dk/json/v2/releases')
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) => {
              setNews(data);
              console.log(data);
            })
            .catch((r) => console.log(r));
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Grid />
        {/* <LineChart /> */}
      </header>
    </div>
  );
}

export default App;
