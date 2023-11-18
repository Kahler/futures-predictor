import React from 'react';
import { Card } from './Card';
import './NewsTicker.css';
import { Tags } from './Tag';

export const NewsTicker = (props) => {
  const orangeData = [
    {
      header: 'New Orange Juice Processing Method Promises Higher Yields',
      body: 'A breakthrough in agritech has led to a new method of processing orange juice, potentially doubling the yield from orange crops. This innovation could significantly lower production costs and increase supply.',
      tags: ['agritech', 'orange juice', 'innovation'],
      author: 'Jane Doe',
      credibility: 8,
    },
    {
      header: 'Health Trend Increases Demand for Organic Orange Juice',
      body: 'The latest health trend spotlighting the benefits of organic orange juice has led to a sharp increase in demand. Producers are scrambling to certify their products as organic to meet consumer expectations.',
      tags: ['health', 'organic', 'trend'],
      author: 'John Smith',
      credibility: 7,
    },
    {
      header: 'Orange Juice Futures Surge Amidst Poor Harvest Predictions',
      body: 'The commodity market for orange juice has seen a sudden surge in futures trading prices as meteorologists predict an unusually harsh winter, threatening the upcoming harvest.',
      tags: ['commodities', 'orange juice', 'futures'],
      author: 'Alice Johnson',
      credibility: 9,
    },
    // ... 47 more stories
  ];

  return (
    <>
      {orangeData.map((o) => (
        <Card key={o.header}>
          <h3 className="info-header">{o.header}</h3>
          <div className="info-body">{o.body}</div>
          <Tags className="info-tags" tags={o.tags} />
          <div className="info-author">{o.author}</div>
          <div className="info-credibility">{o.credibility}</div>
        </Card>
      ))}
    </>
  );
};
