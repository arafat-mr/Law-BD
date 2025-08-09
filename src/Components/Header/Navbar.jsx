import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
 
    return (
        <div className="navbar bg-base-100  w-full md:h-11/12 mulish md:mx-auto lg:w-11/12 lg:mx-auto   text-lg font-medium">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <nav>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-48 text-center ml-6 shadow  ">
              <ul className=" bg-gray-200 menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow absolute -top-5 -left-2">
  <NavLink to="/"> <li>Home </li></NavLink>
  <NavLink to="/bookings"><li>My Bookings</li></NavLink>
  <NavLink to="/blogs"> <li>Blogs</li></NavLink>
  <NavLink to="/contact"> <li>Contact Us</li></NavLink>
</ul>

            </ul>
            </nav>
           
          </div>
          <a className="btn btn-ghost text-xl -ml-3"><img className=' w-8 lg:w-10' src="/logo.png" alt="" /> Law.BD</a>
        </div>
        <div className="navbar-center hidden lg:flex   ">
          <ul className="menu menu-horizontal px-1 lg:text-md mulish lg:flex lg:gap-4">
          <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/bookings">My Bookings</NavLink></li>
  <li><NavLink to="/blogs">Blogs</NavLink></li>
  <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" px-4 py-2 mulish text-sm  text-white bg-[#0EA106] rounded-3xl cursor-pointer">Contact Now </a>
        </div>
      </div>
      
    )
}


export default Navbar;