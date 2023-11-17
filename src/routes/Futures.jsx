import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../components/Map';

export default function Futures() {
  return (
    <div id="graph-container">
      <MapComponent />
    </div>
  );
}
