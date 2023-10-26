import React from 'react'
import FadeLoader from "react-spinners/ClipLoader"

function Loading() {
    let loading=true;
  return (
    <div className='d-flex justify-content-center'>
      <FadeLoader color="#36d7b7" />
    </div>
  )
}

export default Loading