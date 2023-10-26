import React from 'react'
import "./Service.css"
import { FaShippingFast } from 'react-icons/fa';
import { FcAlarmClock ,FcApproval,FcFeedback} from 'react-icons/fc';

function Service() {
  return (
        <div className="row d-flex justify-content-around">
          <div className="col d-flex flex-column border border-success justify-content-center align-items-center">
          <div className='icon'><FaShippingFast/></div>
            <p><b>Free Shiping</b><br/>on all order above 500/-</p>
          </div>
          <div className="col">
          <div className="row d-flex border border-success justify-content-center">
            <div className='icon'><FcFeedback/></div>
            <h><b>Easy Order Process</b><br/>Order ready in 30 minutes</h>
          </div>
          <div className="row d-flex border border-success justify-content-center">
            <div className='icon'><FcAlarmClock/></div>
            <p><b>Same Day Delivery</b><br/>delivery before 8.PM same day </p>
          </div>
          </div>
          <div className="col d-flex flex-column border border-success justify-content-center align-items-center">
            <div className='icon'><FcApproval/></div>
            <p><b>100% secure checkout</b><br/>security double check</p>
          </div>
      </div>
  )
}

export default Service
