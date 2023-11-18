import React from 'react';
import './Grid.css';
import { Card } from './Card';

export const Grid = () => {
  const futures = [
    {
      name: 'Wheat Futures ',
      date: 'Dec 2023',
      divergence: 2.5,
    },
    {
      name: 'Corn Futures ',
      date: 'Mar 2024',
      divergence: -1.0,
    },
    {
      name: 'Orange Juice Futures ',
      date: 'Nov 2024',
      divergence: 11.7,
    },
    {
      name: 'Soybean Futures ',
      date: 'May 2024',
      divergence: 3.75,
    },
    {
      name: 'Cotton Futures ',
      date: 'Jul 2024',
      divergence: -0.5,
    },
    {
      name: 'Coffee Futures ',
      date: 'Sep 2024',
      divergence: 1.25,
    },
    {
      name: 'Sugar Futures ',
      date: 'Oct 2024',
      divergence: -0.8,
    },
    {
      name: 'Rice Futures',
      date: 'Jan 2025',
      divergence: 1.0,
    },
    {
      name: 'Cocoa Futures',
      date: ' Mar 2025',
      divergence: 2.0,
    },
  ];

  return (
    <a href="/futures" className="grid-container">
      {futures.map((fut) => (
        <Card>
          <h3
            style={fut.divergence > 0 ? { color: 'green' } : { color: 'red' }}
            className="fut-header">
            {fut.name}
          </h3>
          <div
            style={fut.divergence > 0 ? { color: 'green' } : { color: 'red' }}
            className="fut-divergence">
            {fut.divergence}
          </div>
          <div className="fut-date">{fut.date}%</div>
        </Card>
      ))}
    </a>
  );
};
