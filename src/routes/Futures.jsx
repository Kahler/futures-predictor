import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../components/Map';
import GraphChart from '../components/GraphChart';
import './Futures.css';
import StyledLineChart from '../components/StyledLineChart';
import { NewsTicker } from '../components/NewsTicker';

export default function Futures() {
  return (
    <div id="graph-container">
      <MapComponent />
      <div className="sidebar">
        <GraphChart
          data={[415, 550, 344, 1341, 4083]}
          labels={['Oranges', 'Wheat', 'Oat', 'Soybeans', 'Cocoa']}
        />
        <StyledLineChart />
        <div className="date-selector">
          <div className="fade">1D</div>
          <div className="fade">1W</div>
          <div className="fade">1M</div>
          <div className="fade">6M</div>
          <div className="fade">1Y</div>
          <div className="fade">5Y</div>
          <div className="fade">10Y</div>
          <div className="fade">All</div>
        </div>

        <NewsTicker />
      </div>
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        style={{ display: 'none' }}
      />
      <label htmlFor="fileInput" id="fileInputLabel" className="fab-button">
        +
      </label>
    </div>
  );
}
