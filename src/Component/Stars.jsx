import React, { useState } from 'react'
import { VscStarEmpty,VscStarFull,VscStarHalf } from 'react-icons/vsc';

function Stars({stars}) {
    // let[star,setStar]=useState("")
    console.log(stars);
    // for(let i=1;i<=5;i++){
    //     if(i<star){
    //       return setStar(star+<VscStarFull/>)
    //     }
    // }
    
    
  return (
    <div>
      <p>{stars}</p>
    </div>
  )
}

export default Stars
