import React from 'react'

function Wrapper({children}) {
  return (
    <div className="container-fluid">
        {children}
    </div>
  )
}

export default Wrapper
