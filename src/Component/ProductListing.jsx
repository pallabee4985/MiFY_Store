import React from 'react'
import Wrapper from "./CommonComponent/Wrapper"
import { useFilter } from './Context/ContexFilterData';
import SortingAndView from './SortingAndView';
import ProductCard from "./CommonComponent/ProductCard"

function ProductListing() {
  let {filterData, allData}=useFilter()
  console.log("productlisting-filterdata", filterData);
  return (
    <Wrapper>
      <div className="row">
          <SortingAndView/>
      </div>
      <div className="row">
         {filterData.map((ele,i)=>{
            return <ProductCard data={ele} key={i}/> 
          })}     
      </div> 
    </Wrapper>
  )
}

export default ProductListing
