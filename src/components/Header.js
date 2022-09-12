import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
const Header = () => {
  return (
    <div className='header'>
        <div className="header_logo">
            <img className="logo_img" src={TeslaLogo} alt='Tesla Logo'/>
        </div>

        <div className='safa'>
          <p>by Safa</p>
        </div>

        <div className="header_center">
            <a href="/">Model S</a>
            <a href='/'>Model 3</a>
            <a href='/'>Model X</a>
            <a href='/'>Model Y</a>
            <a href='/'>Solar Roof</a>
            <a href='/'>Solar Panels</a>
        </div>

        <div className="header_right">
            <a href='/'>Shop</a>
            <a href='/'>Account</a>
            <a href='/'>Menu</a>
        </div>
        
    </div>
  )
}

export default Header