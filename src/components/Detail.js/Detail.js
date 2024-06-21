import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Fade from 'react-reveal/Fade';
import './detail.scss';

function Details({ setOpenDetail }) {
  return (
    <Fade bottom>
      <div className="detail__container">
        <div className="detail__innerContainer">
          <div className="detail__icon">
            <CloseIcon
              className="detail__closeIcon"
              onClick={() => setOpenDetail(false)}
            />
          </div>

          <h1>$7,500 Federal Tax Credit</h1>
          <p className="detail__detailParaghrap">
            Customers who take delivery of a qualified new Tesla and meet all
            federal requirements are eligible for a tax credit up to $7,500.
            Reductions to current federal tax credit likely after Dec 31.
          </p>
          <h4>Adjusted Gross Income Limitations</h4>
          <ul className="detail__detailList">
            <li className="detail__detailListItem">
              $300,000 for married couples filing jointly
            </li>
            <li className="detail__detailListItem">
              $225,000 for heads of households
            </li>
            <li className="detail__detailListItem">
              $150,000 for all other filers
            </li>
          </ul>
          <h4>Price Caps</h4>
          <p className="detail__detailParaghrap">
            The vehicle MSRP at time of delivery must not exceed the following
            caps. This price includes optional equipment physically attached to
            the vehicle at the time of delivery and excludes software features,
            accessories, taxes and fees.
          </p>
          <ul className="detail__detailList">
            <li className="detail__detailListItem">Model 3: $55,000</li>
            <li className="detail__detailListItem">Model Y: $80,000</li>
          </ul>
          <p className="detail__detailParaghrap learn_more">Learn More</p>
          <p className="detail__detailParaghrap">
            Your eligibility for any tax credits depends on your personal tax
            situation. We recommend speaking with a tax professional for
            guidance.
          </p>
        </div>
      </div>
    </Fade>
  );
}

export default Details;
