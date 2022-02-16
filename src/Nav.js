import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
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
          <MdClose
            style={{
              color: '#fff',
              width: '40px',
              height: '40px'
            }}
          />
        ) : (
          <FiMenu style={{ color: '#f9ef23', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        <a href="https://gitness-ga-team-earth.herokuapp.com/#home" onClick={() => closeMenu()}>
          Home
        </a>
        <a href="https://gitness-ga-team-earth.herokuapp.com/#routines" onClick={() => closeMenu()}>
          Routines
        </a>
        <a href="https://gitness-ga-team-earth.herokuapp.com/#team" onClick={() => closeMenu()}>
          Dev Team
        </a>
        <a href="https://gitness-ga-team-earth.herokuapp.com/#footer" onClick={() => closeMenu()}>
          About Us
        </a>
      </ul>
    </nav>
  );
}
export default Nav;
