import React from 'react'
import "./Footer.css"
import myfiLogo from "../../asset/myfiLogo.jpg"
import { SlSocialFacebook,SlSocialLinkedin} from 'react-icons/sl';
import { SiInstagram} from 'react-icons/si';
import {TfiYoutube} from  'react-icons/tfi';

function Footer() {
  return (
    <>
       <div className='row bg-primary d-flex'>
        <div className="row">
        <div className='col'>
                <h1 className='text-dark'>MYFI <img src={myfiLogo} style={{height:"30px",width:"30px"}} alt="Logo" /></h1>
                <h4 className='text-dark'>fastest growing shopping platform for new genZ</h4>
                <div className='flex'>
                    <div className='text-dark'><SlSocialFacebook className='bg-info'/></div>
                    <div className='text-dark'><SiInstagram className='bg-danger'/></div>
                    <div className='text-dark'><TfiYoutube className='bg-danger'/></div>
                    <div className='text-dark'><SlSocialLinkedin className='bg-info'/></div>
                </div>
            </div>
            <div className='col'>
                <h1 className='text-dark'>reach us</h1>
                <p className='text-dark'>please contact the below details for any other information</p>
                <a className='text-dark' href='000'>email</a>
                <p className='text-dark'>Mify@.co</p>
                <a href='000'>address</a>
                <p className='text-dark'>Mify.in 2055 Limestone rd ste 200.c<br/>Wasington DE.19806 unioted states</p>
            </div> 
        </div>
            
        <div className="row bg-dark text-light p-1">
                
                <p align="center">@copiright 2022 <strong>Myfi.inc</strong><br/>turms and conditions| privacy policy</p>
              
        </div>
       </div>
    </>
  )
}

export default Footer
