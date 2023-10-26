import React from 'react'
import Wrapper from './CommonComponent/Wrapper'
import ProductListing from './ProductListing';
import { useProduct } from './Context/ContextData';
import { useFilter } from './Context/ContexFilterData';


function Product() {
  let {all_product}=useProduct()
  let{setFilterValue}=useFilter()
  // console.log("all product=",all_product); //array of 12
  let catagory=all_product.filter((obj)=>{
    return obj.catagory
  })
  function getData(data,option){
    let newData=data.map((obj)=>{
      return obj[option]
    })
    newData=["All",...new Set(newData)]  //removing duplicates
    return newData;
  }
  let categoryData=getData(all_product,"category")
  let companyData=getData(all_product,"company")
  let color=getData(all_product,"colors")
  //converting single array bcoz colors itself is an array  [[][][]]=>[]
  let colorData=[...new Set(color.flat())]
  return (
    <Wrapper>
      <div className="row ">
      <div className="col-3">
        <div className="p-2 m-3">
        <input type="search" placeholder='SEARCH' name="text" />
        </div>
        <div className="m-2">
        <h1 className='mb-2'>Category</h1>
        {categoryData.map((ele)=>{
          return <div><button style={{backgroundColor:"white",border:"none"}} onClick={setFilterValue}>{ele}</button><br/></div>
        })}
        </div>

        <div className="m-2">
        <h1 className='mb-2'>Company</h1>
        <select name="company" id="comp">
          {companyData.map((ele)=>{
            return <option value={ele} onChange={setFilterValue}>{ele}</option>
          })}
        </select>
        </div>

        <div className="m-2">
          <h1 className="mb-2">Colors</h1>
          {colorData.map((data)=>{
            return <button style={{backgroundColor:data,border:"none",height:"25px",width:"25px",borderRadius:"50%",margin:"5px"}} onClick={setFilterValue} value={data}>{data==="All"?"All":null}</button>
          })}
        </div>
      </div>
      <div className="col">
       <ProductListing/>
      </div>
      </div>
    </Wrapper>
  )
}

export default Product
