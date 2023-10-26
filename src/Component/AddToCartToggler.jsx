import React from 'react'
import {AiOutlineMinus,AiOutlinePlus}  from 'react-icons/ai';



function AddToCartToggler({incHandler,decHandler,count}) {
  return (
    <div>
        <button onClick={decHandler} style={{border:"none",backgroundColor:"white"}}><AiOutlineMinus style={{fontSize:"20px"}} /></button>
        <span style={{margine:"5px",fontSize:"20px"}}>{count}</span>
        <button onClick={incHandler} style={{border:"none",backgroundColor:"white"}}><AiOutlinePlus style={{fontSize:"20px"}}/></button>
      
    </div>
  )
}

export default AddToCartToggler
