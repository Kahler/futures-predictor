import React from 'react';
import './Tag.css';

export const Tags = (props) => {
  const { tags } = props;

  return (
    <div className="tags-container">
      {tags.map((tag) => (
        <div href={props.reference} className="news-tag" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
};
