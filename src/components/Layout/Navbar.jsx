import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <i className='fas fa-film'></i> KMS
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Movies</a>
        </li>
        <li>
          <a href='register.html'>Transfer</a>
        </li>
        <li>
          <a href='login.html'>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
