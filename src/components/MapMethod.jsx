import seriesData from "../api/seriesData.json";
import React from 'react'

function MapMethod() {
  // Using map method to iterate over seriesData array
  // and return a JSX element for each series

  return (
 <ul>
   {
  seriesData.map((curElem)=>{
     return (
     <li key={curElem.id}>
  <div>
     <img src={curElem.img_url} alt={seriesData[0].name} width={300} />
   <p>cast:{curElem.cast}</p>
    <h1>{curElem.name}</h1>
    <p>{curElem.description}</p>
    <p>{curElem.rating}</p>
    <p>Genre: {curElem.genre}</p>
    <a href={curElem.watch_url} target="_blank">Watch Now</a>
  </div>

   </li>)
  })
 }
   
 </ul>
  )
}

export default MapMethod