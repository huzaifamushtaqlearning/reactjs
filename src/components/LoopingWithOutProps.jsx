import React from 'react';
import seriesData from "../api/seriesData.json";

function LoopingWithOutProps() {
  return (
    <ul>
      {seriesData.map((item, index) => {
        return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img
              src={item.img_url}
              alt={item.title}
              style={{
                width: "200px",
                height: "300px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <p>Rating: {item.rating}</p>
            <p>Genre: {item.genre}</p>
            <p>Cast: {item.cast}</p>
            
          </li>
        );
      })}
    </ul>
  );
}

export default LoopingWithOutProps;
