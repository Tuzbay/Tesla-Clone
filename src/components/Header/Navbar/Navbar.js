import React, { useState } from 'react';
import './navbar.scss';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MegaMenu from '../../MegaMenu/MegaMenu';
import Fade from 'react-reveal/Fade';
import Language from '../../Language/Language';

const Navbar = ({ openLanguage, setOpenLanguage }) => {
  const [hover, setHover] = useState({
    vehicles: false,
    energy: false,
    charging: false,
    discover: false,
    shop: false,
  });

  const handleMouseEnter = (hoverType) => {
    setHover(hoverType);
  };

  return (
    <div className="navbar__container">
      <a href="/">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <div className="navbar__menu">
        <ul>
          <li onMouseEnter={() => handleMouseEnter('vehicles')}>Vehicles</li>
          <li onMouseEnter={() => handleMouseEnter('energy')}>Energy</li>
          <li onMouseEnter={() => handleMouseEnter('charging')}>Charging</li>
          <li onMouseEnter={() => handleMouseEnter('discover')}>Discover</li>
          <li onMouseEnter={() => handleMouseEnter('shop')}>Shop</li>
        </ul>
      </div>

      {hover && (
        <Fade top>
          <div
            className="megaMenuNavbar"
            onMouseEnter={() => handleMouseEnter(hover)}
            onMouseLeave={() => setHover('')}
          >
            <MegaMenu openedMenuItem={hover} />
          </div>
        </Fade>
      )}

      {openLanguage && (
        <Fade top>
          <div className="languageMenuNavbar">
            <Language />
          </div>
        </Fade>
      )}

      <div className="navbar__rightmenu">
        <ul>
          <li>
            <HelpOutlineIcon />
          </li>
          <li onClick={() => setOpenLanguage(!openLanguage)}>
            <LanguageIcon />
          </li>
          <li>
            <AccountCircleOutlinedIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
