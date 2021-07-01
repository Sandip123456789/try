import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui inverted secondary pointing menu">
      <Link to="/" className="active item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
