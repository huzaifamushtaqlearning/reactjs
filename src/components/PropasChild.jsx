import React from 'react'

function PropasChild(props) {
    return (
        <li >
          <h2>{props.item.title}</h2>
          <p>{props.item.description}</p>
          <img
            src={props.item.img_url}
            alt={props.item.title}
            style={{
              width: "200px",
              height: "300px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <p>Rating: {props.item.rating}</p>
          <p>Genre: {props.item.genre}</p>
          <p>Cast: {props.item.cast}</p>
          
        </li>
      );
}

export default PropasChild