import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__top">
        <li>
          Price before estimated savings is $47,490, excluding taxes and fees.
          Subject to change.
          <span className="footer__top-span">
            Learn about est. gas savings.
          </span>
        </li>
        <li>
          Price before estimated savings is $44,990, excluding taxes and fees.
          Subject to change.
          <span className="footer__top-span">
            Learn about est. gas savings.
          </span>
        </li>
        <li>
          Price before estimated savings is $77,990, excluding taxes and fees.
          Subject to change.
          <span className="footer__top-span">
            Learn about est. gas savings.
          </span>
        </li>
        <li>
          Price before estimated savings is $72,990, excluding taxes and fees.
          Subject to change.
          <span className="footer__top-span">
            Learn about est. gas savings.
          </span>
        </li>
      </ul>
      <ul className="footer__bottom">
        <li>Tesla © 2024</li>
        <li>Privacy & Legal</li>
        <li>Vehicle Recalls</li>
        <li>Contact</li>
        <li>News</li>
        <li>Get Updates</li>
        <li>Locations</li>
      </ul>
    </div>
  );
};

export default Footer;
