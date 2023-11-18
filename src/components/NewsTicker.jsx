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
      credibility: 3,
    },
    {
      header: 'Major Freeze in Florida Threatens Orange Juice Supply',
      body: "An unexpected and severe freeze in Central Florida could potentially destroy a significant portion of this year's orange crop, causing orange juice prices to skyrocket in futures markets.",
      tags: ['weather', 'crop', 'Florida'],
      author: 'Michael Tanner',
      credibility: 7,
    },
    {
      header: 'Innovative Recycling in Orange Juice Production Cuts Costs',
      body: 'A new recycling process implemented by major orange juice producers has cut production costs by 20%, allowing for cheaper retail prices and more competitive market positioning.',
      tags: ['innovation', 'recycling', 'cost cutting'],
      author: 'Rachel Stevens',
      credibility: 3,
    },
    {
      header: 'Health Study Reveals Benefits of Orange Juice for Heart Health',
      body: 'A recent study by the National Health Institute has linked regular consumption of orange juice with improved heart health, leading to an increased consumer interest in orange juice products.',
      tags: ['health study', 'heart health', 'consumer'],
      author: 'Dr. Sanjay Patel',
      credibility: 8,
    },
    {
      header: 'Orange Juice Brand Faces Recall Due to Contamination',
      body: 'Popular orange juice brand CitraSqueeze faces a massive recall after reports of contamination in their product line, which could lead to a temporary dip in consumer trust and stock value.',
      tags: ['product recall', 'contamination', 'brand'],
      author: 'Linda Gomez',
      credibility: 1,
    },
    {
      header: 'Surge in Orange Juice Sales Following Viral Marketing Campaign',
      body: 'A viral marketing campaign featuring celebrities enjoying orange juice has led to a surge in sales, with orange juice brands experiencing a significant stock market boost.',
      tags: ['marketing', 'sales surge', 'campaign'],
      author: 'Tom Chen',
      credibility: 5,
    },
  ];

  return (
    <>
      {orangeData.map((o) => (
        <Card key={o.header}>
          <h3 className="info-header">{o.header}</h3>
          <div className="info-body">{o.body}</div>
          <Tags className="info-tags" tags={o.tags} />
          <div className="info-author">{o.author}</div>
          <div
            style={{ opacity: o.credibility * 0.1 }}
            className="info-credibility">
            {o.credibility}
          </div>
        </Card>
      ))}
    </>
  );
};
