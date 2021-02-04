import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <h2>Choose a Collection</h2>

      <div>
        <Link to='/yeye' className='btn btn-main'>
          Yeye's
        </Link>
        <Link to='/moimoi' className='btn btn-main'>
          Moimoi's
        </Link>
      </div>
    </div>
  );
};

export default Menu;
