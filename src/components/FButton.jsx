import React from 'react';
import './FButton.css';

export const FButton = (props) => {
  const { children } = props;

  return (
    <a href={props.reference} class="button">
      {children}
    </a>
  );
};
