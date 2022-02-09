import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        <NavLink to={'./'} onClick={() => closeMenu()}>
          home
        </NavLink>
        <NavLink to={'./'} onClick={() => closeMenu()}>
          About
        </NavLink>
        <NavLink to={'./'} onClick={() => closeMenu()}>
          Routines
        </NavLink>
      </ul>
    </nav>
  );
}
export default Nav;
