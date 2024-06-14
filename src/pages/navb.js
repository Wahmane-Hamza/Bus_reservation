import React from 'react'
import logo from '../image/logo.png'
import { NavLink,Outlet } from 'react-router-dom'

export default function navb() {
  return (
    <div>
    <nav className='navbar'>
      <img src={logo}/>
      <ul>
        <li><NavLink to={'/'} className={'link'}>Home</NavLink></li>
        <li><NavLink to={'/contact'} className={'link'}>Contact</NavLink></li>
        <li><NavLink to={'/aboutus'} className={'link'}>AboutUs</NavLink></li>
      </ul>
    </nav>
    <Outlet/>
    </div>
  )
}
