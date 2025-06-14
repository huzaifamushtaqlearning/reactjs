


import React from 'react';
import seriesData from "../api/seriesData.json";
import PropasChild from './PropasChild';

function LoopingCard() {
  return (
    <ul>
      {seriesData.map((item) => {
        return(
       <PropasChild key={item.id} item={item} />)
      })}
    </ul>
  );
}

export default LoopingCard;
