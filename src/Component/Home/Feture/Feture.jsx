import React from 'react'
import ProductCard from '../../CommonComponent/ProductCard'
import Loading from "../../CommonComponent/Loading"
import { useProduct } from '../../Context/ContextData'
import Error from "../../CommonComponent/Error"

function Feture() {
  let{loading,feature_product,error}=useProduct()
  // console.log("inside feture...",loading,error,feature_product);
  return (
    <>
      <div className="row "> 
      <p style={{color:"blue"}}>CHECK NOW</p>
      <h3>Our Feature Services</h3>
      <div className="row d-flex justify-content-evenly">
        {loading && <Loading/>}
        {!loading && error && <Error/>}
        {!loading && !error && feature_product &&
        feature_product.map((obj,i)=>{
          return <ProductCard data={obj} key={i}/> 
        })}
      </div>
      </div>
    </>
  )
}

export default Feture
