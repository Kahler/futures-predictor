import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../components/Map';
import GraphChart from '../components/GraphChart';
import './Futures.css';

export default function Futures() {
  return (
    <div id="graph-container">
      <MapComponent />
      <div class="sidebar">
        <GraphChart />

        <GraphChart />
      </div>
    </div>
  );
}
