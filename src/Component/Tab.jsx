import React from 'react'
import { NavLink } from 'react-router-dom'

function Tab({name}) {
  // console.log("pageNavigator",name);
  return (
    <div className='p-4 bg-light'>
      <NavLink to="/">Home</NavLink>/<span>{name}</span>
    </div>
  )
}

export default Tab
