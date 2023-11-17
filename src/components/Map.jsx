import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import './Map.css';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Futures Prediction',
    }).addTo(mapRef.current);

    // TODO do we need this?
    const triangle = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]).addTo(mapRef.current);

    // Cleanup on unmount
    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
      }}
    />
  );
};

export default MapComponent;
