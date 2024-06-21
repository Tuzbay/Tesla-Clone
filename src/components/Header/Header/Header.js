import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './header.scss';

const Header = ({
  openDetail,
  setOpenDetail,
  openLanguage,
  setOpenLanguage,
  setBannerHeight,
}) => {
  return (
    <div className="header__container">
      {/* <Banner
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        setBannerHeight={setBannerHeight}
      /> */}
      <Navbar openLanguage={openLanguage} setOpenLanguage={setOpenLanguage} />
    </div>
  );
};

export default Header;
