import React from 'react'
import "./Navbar.css"
import myfiLogo from "../../../asset/myfiLogo.jpg"
import { HiShoppingCart } from 'react-icons/hi';
import { FcBusinesswoman } from 'react-icons/fc';
import {Link,useLocation} from 'react-router-dom'

function Navbar() {
  // const loc=useLocation()
  // const showSearch=loc.pathname==="/product";
  return (
    <>
      <div className='Nav d-flex flex-wrap navbar navbar-expand-sm bg-body-tertiary fluid'>
        <div className='col-1 d-flex ustify-content-left '>
        <img className='NavItem NavLogo' src={myfiLogo} alt="myfilogo"  />
        </div>
        <div className='col-5 d-flex justify-content-right collapse flex-wrap '>
        
      <Link to="/" className='NavItem nav-link' href="link">Home</Link>
      <Link to="./about" className='NavItem nav-link' href="link">About</Link>
      <Link to="./contact" className='NavItem nav-link' href="link">Contact</Link>
      <Link to="./product" className='NavItem nav-link' href="link" >Product</Link>
      <Link to="./login" className='NavItem nav-link' href="link">Login</Link>
      <Link to="./register"className='NavItem nav-link' href="link">Register</Link>
      <Link to="./cart"className='NavItem nav-link Logo'><HiShoppingCart/></Link>
      <Link to="./profile"className='NavItem nav-link Logo'><FcBusinesswoman/></Link>
        </div>            
      </div>
    </>
  )
}

export default Navbar
