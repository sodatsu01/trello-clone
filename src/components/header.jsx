import React from 'react';
import logo from '../assets/logo.svg';
import {Link} from '@reach/router';

function Header(props) {
  return (
    <div className="header">
      <Link to='/'>
        <img className="logo" src={logo} alt="" />
      </Link>
    </div>
  );
}
export default Header;
