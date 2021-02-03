import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <h1>Choose a Collection</h1>

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
