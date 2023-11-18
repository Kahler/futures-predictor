import React from 'react';
import './Card.css';

export const Card = (props) => {
  const { children } = props;
  return <div className="info-card">{children}</div>;
};
