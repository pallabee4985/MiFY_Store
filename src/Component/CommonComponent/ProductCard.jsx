import React from 'react'
import {Link } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice'
import {FaRupeeSign } from 'react-icons/fa';

function ProductCard(props) {
    let{id,name,image,price,category}=props.data
  return (
            <Link to={`/singleProduct/${id}`} className="card m-2 p-2" style={{width: "19rem",position:"relative"}}>
          <img src={image} alt="..."/>
          <span className="bg-light text-dark rounded-pill p-1 nav-link" style={{position:"absolute",right:"20px",top:"8px"}}>{category}</span>
          <div className="card-body d-flex justify-content-evenly">
               <p className="card-title text-dark nav-link">{name}</p>
                  <p className='nav-link' ><FaRupeeSign/><FormatPrice className="nav-link" price={price}/></p>
         </div>
          </Link>
  )
}

export default ProductCard
