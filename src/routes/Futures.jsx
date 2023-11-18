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

        <NewsTicker />
      </div>
    </div>
  );
}
