import React from 'react';
import Navbar from '../Navbar/Navbar';
import './header.scss';

const Header = ({ openLanguage, setOpenLanguage }) => {
  return (
    <div className="header__container">
      <Navbar openLanguage={openLanguage} setOpenLanguage={setOpenLanguage} />
    </div>
  );
};

export default Header;
