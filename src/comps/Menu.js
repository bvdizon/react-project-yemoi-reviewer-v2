import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <h1>Choose a Collection</h1>

      <div>
        <Link
          to={{
            pathname: '/reviewer',
            state: {
              owner: 'Ayesha',
              sheetNum: '1',
            },
          }}
          className='btn btn-main'>
          Yeye's
        </Link>
        <Link
          to={{
            pathname: '/reviewer',
            state: {
              owner: 'Moiera',
              sheetNum: '2',
            },
          }}
          className='btn btn-main'>
          Moimoi's
        </Link>
      </div>
    </div>
  );
};

export default Menu;
