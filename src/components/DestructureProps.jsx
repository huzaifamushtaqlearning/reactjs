import React from 'react'
function DestructureProps({curElem}) {
    console.log(curElem);
    
  const  {id,img_url,cast,name,description,rating,genre,watch_url}=curElem
  return (
    <div>
     <li key={id}>
  <div>
     <img src={img_url}  width={300} />
   <p>cast:{cast}</p>
    <h1>{name}</h1>
    <p>{description}</p>
    <p>{rating}</p>
    <p>Genre: {genre}</p>
    <a href={watch_url} target="_blank">Watch Now</a>
  </div>

   </li>
    </div>
  )
}

export default DestructureProps