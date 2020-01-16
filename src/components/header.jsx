import React from 'react';
import logo from '../assets/logo.svg';

function Header(props) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
    </div>
  );
}
export default Header;
