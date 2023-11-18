import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import './Map.css';

const MapComponent = () => {
  const mapRef = useRef(null);

  function getRandomCoordinatesForCountry(country) {
    // Define bounding boxes for the USA and Germany
    const boundingBoxes = {
      USA: { lat: [24.396308, 49.384358], lng: [-125.0, -66.93457] },
      Germany: { lat: [47.270111, 55.0815], lng: [5.866342, 15.041896] },
      Africa: { lat: [-34.83333, 37.345], lng: [-17.625042, 51.407917] },
      Asia: { lat: [60.269, 25.7558], lng: [25.2637, 100.3] },
      Russia: { lat: [41.185, 81.858122], lng: [19.6389, 168.9979] },
    };

    let bounds = boundingBoxes[country];
    let latRange = bounds.lat;
    let lngRange = bounds.lng;

    let randomLat = Math.random() * (latRange[1] - latRange[0]) + latRange[0];
    let randomLng = Math.random() * (lngRange[1] - lngRange[0]) + lngRange[0];

    return [randomLat, randomLng];
  }

  function createRandomMarkers(map, numberOfMarkers) {
    createMarkers(100, 'USA');
    createMarkers(20, 'Germany');
    createMarkers(30, 'Africa');
    createMarkers(75, 'Asia');
    createMarkers(20, 'Russia');
  }

  const createMarkers = (markers, country) => {
    const maxSize = 10;
    const minSize = 3;

    for (let i = 0; i < markers; i++) {
      let coordinates = getRandomCoordinatesForCountry(country);
      let size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

      L.marker(coordinates, {
        icon: L.divIcon({
          className: 'custom-marker',
          html: `<div class="marker-animation" style="width: ${size}px; height: ${size}px;"></div>`,
          iconSize: L.point(size, size),
        }),
      }).addTo(mapRef.current);
    }
  };

  useEffect(() => {
    mapRef.current = L.map('map').setView([0, 0], 3); // Global view

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 19,
        attribution: 'Futures Prediction',
      }
    ).addTo(mapRef.current);

    mapRef.current.zoomControl.remove();

    // Call this function after initializing your map
    createRandomMarkers(mapRef.current, 100);

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
