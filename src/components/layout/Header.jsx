import React from 'react'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'

function Header() {
  return (
    <div className="header">
      <div className="header__body general-container">
        <a className="header__body__left" href='/'>
          <img src={logo} alt='logo' />
        </a>

        <div className="header__body__right">
          <div>HI, Mohamed</div>
          <img src={user} alt='user avatar' />
        </div>
      </div>
    </div>
  )
}

export default Header;
