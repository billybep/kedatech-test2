import React, { useState } from 'react'
import './Navbar.css'
import { Link as LinkScroll } from 'react-scroll' 
import Login from '../Login/Login'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="navbar bg-base-100 navbar-container">
        <div className="navbar-start">
          <div className="bg-home">
            <img src="./bg-01.png" alt="bg-01.png" />
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><LinkScroll to="about" spy={true} smooth={true} offset={-95} duration={500}>ABOUT</LinkScroll></li>
              <li><LinkScroll to="pricing" spy={true} smooth={true} offset={-95} duration={500}>PRICING</LinkScroll></li>
              <li><LinkScroll to="contact" spy={true} smooth={true} offset={-95} duration={500}>CONTACT</LinkScroll></li>
            </ul>
          </div>
          <div className="navbar-logo">
            <img className='navbar-logo__1' src="logo.svg" alt='logo.png' />
          </div>
          <LinkScroll
            className="normal-case text-xl navbar-home__link"
            to="home" spy={true} smooth={true} offset={-97} duration={500}
          >
            <div className="navbar-home__title">HOME</div>
          </LinkScroll>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex md:flex">
            <ul className="menu-horizontal p-0 menu-link">
              <li className="scroll-link mx-4"><LinkScroll to="about" spy={true} smooth={true} offset={-95} duration={500}>ABOUT</LinkScroll></li>
              <li className="scroll-link mx-4"><LinkScroll to="pricing" spy={true} smooth={true} offset={-95} duration={500}>PRICING</LinkScroll></li>
              <li className="scroll-link mx-4"><LinkScroll to="contact" spy={true} smooth={true} offset={-95} duration={500}>CONTACT</LinkScroll></li>
            </ul>
          </div>
          <div
            className="btn btn-outline btn-login ml-12"
            onClick={() => setIsOpen(true)}
          >
            LOGIN
          </div>
        </div>
      </div>
      {/* <Login /> */}
      {isOpen && <Login setIsOpen={setIsOpen}/>}
    </>
  )
}

export default Navbar
