import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '15px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: 'bold',
  };

  const searchInputStyle = {
    padding: '5px',
    marginRight: '10px',
  };

  return (
    <div style={navbarStyle}>
      <div>
        <span style={{ fontSize: '1.5em', marginRight: '10px' }}>Logo</span>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
      </div>
      <div>
        <input type="text" placeholder="Search" style={searchInputStyle} />
        <a href="/" style={linkStyle}>
          createPost
        </a>
        <a href="/read" style={linkStyle}>
          readPost
        </a>
      </div>
    </div>
  );
};

export default Navbar;
