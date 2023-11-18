import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import './Map.css';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map('map').setView([0, 0], 2); // Global view

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 19,
        attribution: 'Futures Prediction',
      }
    ).addTo(mapRef.current);

    mapRef.current.zoomControl.remove();

    // Define polygons for each region
    const regions = {
      saoPaulo: { coords: [[-20.0, -44.0], [-20.0, -53.0], [-25.0, -53.0], [-25.0, -44.0]], color: 'green' },
      indianRiver: { coords: [[27.0, -80.0], [27.0, -80.7], [28.5, -80.7], [28.5, -80.0]], color: 'red' },
      valencia: { coords: [[38.5, -0.5], [38.5, -1.5], [40.5, -1.5], [40.5, -0.5]], color: 'red' },
      andalusia: { coords: [[36.0, -1.5], [36.0, -7.5], [38.5, -7.5], [38.5, -1.5]], color: 'red' },
      centralValley: { coords: [[35.5, -118.5], [35.5, -122.0], [39.5, -122.0], [39.5, -118.5]], color: 'red' },
      sicily: { coords: [[36.5, 12.5], [36.5, 15.5], [38.5, 15.5], [38.5, 12.5]], color: 'red' },
      calabria: { coords: [[38.0, 15.5], [38.0, 17.5], [40.0, 17.5], [40.0, 15.5]], color: 'red' },
      puglia: { coords: [[39.5, 15.0], [39.5, 18.5], [41.5, 18.5], [41.5, 15.0]], color: 'red' },
      veracruz: { coords: [[17.5, -93.5], [17.5, -98.5], [22.5, -98.5], [22.5, -93.5]], color: 'red' },
      michoacan: { coords: [[18.0, -100.5], [18.0, -104.0], [20.5, -104.0], [20.5, -100.5]], color: 'red' },
      limpopo: { coords: [[-22.0, 27.5], [-22.0, 31.5], [-25.5, 31.5], [-25.5, 27.5]], color: 'red' },
      mpumalanga: { coords: [[-24.0, 29.5], [-24.0, 32.0], [-27.0, 32.0], [-27.0, 29.5]], color: 'red' },
      easternCape: { coords: [[-30.5, 22.5], [-30.5, 30.0], [-34.5, 30.0], [-34.5, 22.5]], color: 'red' },
      tucuman: { coords: [[-26.0, -64.5], [-26.0, -66.5], [-28.0, -66.5], [-28.0, -64.5]], color: 'red' },
      entreRios: { coords: [[-30.0, -57.5], [-30.0, -61.0], [-34.0, -61.0], [-34.0, -57.5]], color: 'red' },
      nileDelta: { coords: [[30.0, 30.0], [30.0, 32.0], [31.5, 32.0], [31.5, 30.0]], color: 'red' },
      nileValley: { coords: [[24.5, 30.5], [24.5, 33.0], [31.0, 33.0], [31.0, 30.5]], color: 'red' },
    };

       // Add each region as a polygon to the map
   Object.entries(regions).forEach(([_, { coords, color }]) => {
    L.polygon(coords, { color }).addTo(mapRef.current);
  });

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
