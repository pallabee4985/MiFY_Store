import React from 'react'
import { BsFillGrid3X3GapFill,BsList } from 'react-icons/bs';
import { useFilter } from './Context/ContexFilterData';

function SortingAndView() {
  let x=useFilter()
  console.log(x);
  return (
    <>
      <div className="col">
            <button className='btn' style={{margin:"5px"}}><BsFillGrid3X3GapFill/></button>
            <button className='btn' style={{margin:"5px"}}><BsList/></button>
          </div>
          <div className="col">
            N no. of products available
          </div>
          <div className="col">
          <select id="sort">
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled=""></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled=""></option>
            <option value="A-Z">Name(A-Z)</option>
            <option value="#" disabled=""></option>
            <option value="Z-A">Name(Z-A)</option>
            </select>
          </div>
    </>
  )
}

export default SortingAndView
