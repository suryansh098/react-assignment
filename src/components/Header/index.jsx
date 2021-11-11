import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Reactjs</h1>
      </div>
      <div className="links">
        <Link to='/' className="App-link">People</Link>
        <Link to='/friends' className="App-link">Friends</Link>
      </div>
    </header>
  )
}

export default Header;
