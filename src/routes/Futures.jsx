import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../components/Map';
import GraphChart from '../components/GraphChart';
import './Futures.css';
import LineChart from '../components/LineChart';
import StyledLineChart from '../components/StyledLineChart';
import { Card } from '../components/Card';

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

        <Card>
          <h2>Tester</h2>
          <div>tester</div>
        </Card>
        <Card>
          <h2>Tester</h2>
          <div>tester</div>
        </Card>
        <Card>
          <h2>Tester</h2>
          <div>tester</div>
        </Card>
      </div>
    </div>
  );
}
