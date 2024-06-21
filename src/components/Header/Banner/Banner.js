import React, { useEffect, useRef } from 'react';
import './banner.scss';
import Details from '../../Detail.js/Detail';

const Banner = ({ openDetail, setOpenDetail, setBannerHeight }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="OuterContainer" ref={bannerRef}>
      <div className="banner">
        <span className="banner__header">$7,500 Federal Tax Credit </span>
        <span className="banner__main">
          Available for new Model 3, Model Y and certain Model X. Reductions to
          tax credit likely after Dec 31.{' '}
          <span className="banner__details" onClick={() => setOpenDetail(true)}>
            See Details
          </span>
        </span>
      </div>
      {openDetail && <Details setOpenDetail={setOpenDetail} />}
    </div>
  );
};

export default Banner;
