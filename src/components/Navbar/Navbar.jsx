
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/Logo/winLads_Logo.png';
import "./NavbarStyle.css";




const Navbar = () => {




  return (
    <nav className='wrapper pt-7 w-full' >

        <div className="Logo size-36 float-left ">
        <Link to="/"> <img  src={HeaderLogo} alt="" /></Link>
        </div>
        <div className='NavLinks float-right NavbarUl' >
      <ul className='' >
        <li className=' ' >
          <Link to="/Review">Review</Link>
        </li>
        <li>
          <Link to="/Tips">Tips</Link>
        </li>
        <li>
          <Link to="/Alerts">Alerts</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li className='' >
          <Link to="/Login"><button className=' bg-white hover:bg-blue-700 text-[#3E86F5] font-medium py-1 px-4 rounded' >Login</button></Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
