import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineCheck}  from 'react-icons/ai';
import AddToCartToggler from './AddToCartToggler';

function AddToCart({obj}) {
  // console.log("inside addtocart:",obj)
  let{colors,stock}=obj
  // console.log(colors,stock);
  let[colorData,setColorData]=useState("white")
  let[counterCount,setCounterCount]=useState(1)

  function incHandler(){
    stock>counterCount?setCounterCount(counterCount+1)
    :setCounterCount(stock);
  }
  function decHandler(){
    counterCount>1?setCounterCount(counterCount-1)
    :setCounterCount(1)
  }


  return (
    <>
      <div className="row">
      {colors &&
      <> colors:{colors.map((clr,i)=>{
        return <button style={{backgroundColor:clr,
          height:"4vh",width:"3vw",borderRadius:"50%",padding:"3px",margine:"5px",
          border:"none", opacity:0.5}} key={i}
         className={colorData===clr?"color_active":null}
          onClick={()=>{setColorData(clr);}}>
            {colorData===clr?<span ><AiOutlineCheck  style={{color:"white",fontWeight:"bold",fontSize:"25px"}}/> </span>:null}
          </button>
      })}
      </> } 
      </div>
     
      <AddToCartToggler incHandler={incHandler} decHandler={decHandler} count={counterCount}/>
     <NavLink to="/cart"><button className='btn btn-primary border-dark'>Add To Cart</button> </NavLink>
    
    </>
  )
}

export default AddToCart
