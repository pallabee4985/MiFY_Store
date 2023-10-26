import React from 'react'
import "./Hero.css"
import myfiLogo from "../../../asset/myfiLogo.jpg"
import heroimg from "../../../asset/heroimg.jpg" 

function Hero() {
  return (
    <>
      <div className="row">
          <div className="col img-fluid" align="center">
             <img className='HeroImg' src={heroimg} alt="heroimg" />
          </div>
          <div className="d-flex col justify-content-center align-items-center flex-column m-2 p-2">
            <h2 className='p-2'><img style={{display:'inline',width:'30px',height:'30px'}}src={myfiLogo} alt="myfiLogo" /> Make Your Fashion Iconic</h2>
            <p align="justify" className='p-3 mt-3'>A good experience with online shopping. First of all, this site gives you a huge discount as a reward therefore, you get products at a reasonable price. Secondly, the material and quality of the product were amazing. In other words, You received the same as you ordered.</p>
          </div>
      </div>

    </>
  )
}

export default Hero
