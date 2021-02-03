import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1 className='my-lg'>Page NOT Found.</h1>
      <Link to='/' className='btn'>
        Go to Homepage
      </Link>
    </div>
  );
};

export default Error;
