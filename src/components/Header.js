import React from 'react';
import {Link} from "react-router-dom";
import Title from './Title';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="header">
 
      <Navbar/>
      {/* <div className="nav-items">
         <ul>
          <li>Home</li>
          <li>Donation</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Signup</li>
         </ul>
      </div> */}

    </div>
  )
}

export default Header;
