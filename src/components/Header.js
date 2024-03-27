import React from 'react';
import {Link} from "react-router-dom";
import Title from './Title';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="header">
 
      <Navbar/>
      <h1>MAkichu</h1>

    </div>
  )
}

export default Header;
