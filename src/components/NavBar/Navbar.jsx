import React from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";

const navlist = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About Us',
    link: '/about'
  },
  {
    name: 'Contact',
    link: '/contact'
  },
   {
    name: 'Services',
    link: '/services'
  },
  {
    name:"Doctors",
    link: '/doctors'
  },
   {
    name: 'News',
    link: '/news'
  }
   
   
]

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='Navlist'>
        {navlist.map((item, index) => {
       return (
          <div className='Navitem' key={item.name}>
            <a href={item.link}>{item.name}</a>
          </div>
        )
      })}
      </div> 
      <div >
        <div className='Search-box-container'>
          <FaSearch fontSize="25px" fill='white'/>
          <button className='Appointment-btn'>Appointment</button>
        </div>
      </div>
    </div>
  )
}
