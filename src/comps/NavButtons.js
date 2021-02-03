import React from 'react';
import { FaHome, FaTasks } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

const NavButtons = () => {
  const history = useHistory();
  return (
    <nav className='navButtons'>
      <Link to='/'>
        <FaHome />
      </Link>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://docs.google.com/spreadsheets/d/14WygMRnGA3QWRDYvPOGTWGWNH68cUyOUE2VYumS0NUo/'>
        <FaTasks />
      </a>
    </nav>
  );
};

export default NavButtons;
