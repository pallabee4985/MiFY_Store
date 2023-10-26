import React, { useEffect } from 'react'
import Wrapper from './CommonComponent/Wrapper'
import { useParams } from 'react-router-dom'
import { useProduct } from './Context/ContextData';
import  Tab  from './Tab';
import Loading from './CommonComponent/Loading';
import ProductImage from './ProductImage';
import { FaShippingFast } from 'react-icons/fa';
import { FcFeedback,FcAlarmClock,FcApproval } from 'react-icons/fc';
import Error from './CommonComponent/Error';
import AddToCart from './AddToCart';
import Stars from './Stars'


function SingleProduct() {
const api="https://api.pujakaitem.com/api/products"
let {id}=useParams();
let x=useProduct();
// console.log(".............",x);
let{singleFetch,singleLoading,singleError,singleData}=x
  
  useEffect(()=>{
    singleFetch(`${api}?id=${id}`)
  },[]);
  let{name,company,description,stars,stock,price,image }=singleData;

  return (
    <Wrapper>
      {singleLoading && <Loading/>}
      {!singleLoading && singleError && <Error/>}
      <div className="row">
          <Tab name={singleData.name} />
      </div>
      {singleLoading && <Loading/>}
      {!singleLoading && singleError && <Error/>}
      {!singleLoading && !singleError&&
      <div className="row">
        <div className="col">
          <ProductImage image={image}/>
        </div>
        <div className="col">
          <h1>{name}</h1>
          <p><Stars stars={stars}/></p>
          <p>MRP: <del>{price}</del> </p>
          <h5 className='text-success '><p className='text-primary inline'>deal of the day { Math.floor(price*0.9)}</p>10% off</h5>
          <p>{description}</p>
          <div className="row">
              <div className="col"><FaShippingFast/><br/>Free Shiping</div>
              <div className="col"><FcFeedback/><br/>Easy Order Process</div>
              <div className="col"><FcAlarmClock/><br/>Same Day Delivery</div>
              <div className="col"><FcApproval/><br/>100% secure</div>
          </div>
          <hr/>
          <p>Available:{stock>0?<b>In stock</b>:<b>Out of stock</b>}</p>
          <p>ID:<b>{id}</b></p>
          <p>BRAND: <b> {company}</b></p>
          <hr/>
          <AddToCart obj={singleData}/>
        </div>
      </div>
      }
    </Wrapper>
  )
}

export default SingleProduct
