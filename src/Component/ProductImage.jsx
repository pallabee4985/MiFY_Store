import React,{useState} from 'react'

function ProductImage({image=[{url:''}]}) {    //{img=[{url:''}]} to mAKE IT BY DEFAULT AN EMPTY STRING
  let [data,setData]=useState(image[0])
  // console.log("productimage props",image)
  function imageHandler(i){
    setData(image[i])
  }
  return (
    <>
      <div className="row d-flex justify-content-evenly">
        <div className="col">
          {image.map((data,i)=>{
            return <img src={data.url} alt={data.id} key={i} className='img-fluid p-2'
             onClick={()=>{imageHandler(i)}}/>
          })}
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src={data.url} alt={data.id} key={data.id} className='img-fluid' />
        </div>
      </div>
    </>
  )
}

export default ProductImage
