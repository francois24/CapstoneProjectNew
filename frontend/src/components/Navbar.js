import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className='navbar sticky-top d-flex justify-content-between'>
        <Link to='/' onClick={closeMobileMenu}>
            <img className='navbar-logo' src={require('../media/jusLogoImg.png')} alt='Rental Car'/>
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
          <li className='nav-item'>
            <a href='/#'
              className='nav-links'
            >
              HOME
            </a>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/Autolistings'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              AUTOLISTINGS
            </Link>
          </li>
         
          <li className='nav-item'>
            <a href='/#indexaboutus'
              className='nav-links'
            >
              ABOUT US
            </a>
          </li>

          <li className='nav-item'>
            <a href='/#testimonials'
              className='nav-links'
            >
              TESTIMONIALS
            </a>

          </li>

          <li className='nav-item'>
            <Link
              to='/News'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              NEWS
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/Contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             CONTACT
            </Link>
          </li>

        </ul>
       
      </nav>
    </>
  );
}

export default Navbar