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
      <nav className='navbar'>
        <Link to='/' onClick={closeMobileMenu}>
          <img to='/' className='fa-firstdraft' src={require('../images/Justine-Logo.png')} alt='Rental Car' width="100" height="80"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
             HOME
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/Autolistings' className='nav-links' onClick={closeMobileMenu}>
              AUTOLISTINGS
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              to='/About'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             ABOUT US
            </Link>
          </li>
          <li className='nav-item'>
            <a href='#testimonials'
              className='nav-links'
            >
              TESTIMONIALS
            </a>
          </li>

          <li className='nav-item'>
            <a
              href='/#news'
              className='nav-links'
              // onClick={closeMobileMenu}
            >
              NEWS
            </a>
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