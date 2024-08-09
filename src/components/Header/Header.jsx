import React from 'react'
import './Header.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMdTime } from "react-icons/io";




export default function Header() {
  return (
    <div className='Header'>
      <div className='Logo-container'>
      <p className='logo'>ASHISH<span>CARE</span></p>
      </div> 
      <div className='Header-left-container'>
        <div className='Header-item-container'>
          <div >
            <MdWifiCalling3 size='30px' fill='rgb(32, 189, 236)' />
          </div>
          <div className='item-text-container'>
            <p className='item-header'>EMERGENCY</p>
            <p className='item-para'>900032431</p>
          </div>
        </div>

        <div className='Header-item-container'>
          <div >
            <IoMdTime size='30px' fill='rgb(32, 189, 236)' />
          </div>
          <div className='item-text-container'>
            <p className='item-header'>WORK HOUR</p>
            <p className='item-para'>09:00 - 20:00 Everyday</p>
          </div>
        </div>

        <div className='Header-item-container'>
          <div >
            <FaLocationDot size='30px' fill='rgb(32, 189, 236)' />
          </div>
          <div className='item-text-container'>
            <p className='item-header'>LOCATION</p>
            <p className='item-para'>Mavala,Adilabad,504001</p>
          </div>
        </div>
      </div>
    </div>
  )
}
