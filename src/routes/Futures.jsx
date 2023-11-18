import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../components/Map';
import GraphChart from '../components/GraphChart';
import './Futures.css';
import LineChart from '../components/LineChart';
import StyledLineChart from '../components/StyledLineChart';

export default function Futures() {
  return (
    <div id="graph-container">
      <MapComponent />
      <div className="sidebar">
        <GraphChart
          data={[12, 19, 3, 5, 2]}
          labels={['Oranges', 'Wheat', 'Apples', 'Soybeans', 'Cocoa']}
        />
        {/* <GraphChart
          data={[1, 12, 4, 2, 9]}
          labels={['Oranges', 'Wheat', 'Apples', 'Soybeans', 'Cocoa']}
        /> */}
        <StyledLineChart />
        {/* <LineChart /> */}
      </div>
    </div>
  );
}
