import seriesData from "../api/seriesData.json";
import React from 'react'
import DestructureProps from "./DestructureProps";

function PropsInNet() {

  return (
 <ul>
   {
  seriesData.map((curElem)=>{
     return <DestructureProps key={curElem.id} curElem={curElem}/>
  })
 }
   
 </ul>
  )
}

export default PropsInNet