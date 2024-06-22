import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import './section.scss';
import model3 from '../../assets/Tesla1Video.mp4';
import experienceTesla from '../../assets/TeslaVideo2.webm';

function Section({
  type,
  title,
  description,
  smallText,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  footerText,
  footerTextDetail,
  specialButton,
  specialButtonBorder,
  specialButtonBorderFull,
  whiteText,
}) {
  // ^ Fotoğraf ise arka planda göstermek için bu kod satırlarını kullanıyoruz.
  const backgroundImageStyle = {
    backgroundImage: `url(${require(`../../../public/images/${backgroundImg}`)})`,
  };
  const wrapStyle = type === 'photo' ? backgroundImageStyle : {};
  // ^ Daha sonra yukarıki satırları incele.

  const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     if (e.deltaY > 0) {
  //       if (scrollY > 4809) {
  //         window.scrollTo(0, 0);
  //       } else {
  //         window.scrollTo(0, 0);
  //         setScrollY(scrollY + 687);
  //       }
  //     } else if (e.deltaY < 0) {
  //       if (scrollY < 687) {
  //         window.scrollTo(0, 0);
  //       } else {
  //         window.scrollTo(0, 0);
  //         setScrollY(scrollY - 687);
  //       }
  //     }
  //   };

  //   window.addEventListener('wheel', handleScroll);

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, [scrollY]);

  return (
    <div
      className={`wrap ${type === 'photo' && 'backImage'}`}
      style={{
        ...wrapStyle,
        transform: `translateY(${-scrollY}px)`,
      }}
    >
      {type === 'video' && <video autoPlay loop muted src={model3} />}
      {type === 'video1' && <video autoPlay loop muted src={experienceTesla} />}

      <div className={`content ${type !== 'photo' && 'white-content'}`}>
        <Fade bottom>
          <div className="itemtext" style={{ color: whiteText ? 'white' : '' }}>
            <h1 style={{ fontWeight: 600 }}>{title}</h1>
            {!title && (
              <img
                style={{ width: 450 }}
                src="/images/cyberTruck.svg"
                alt="Tesla Logo"
                width={100}
              />
            )}

            <p style={{ fontWeight: 500 }}>{description}</p>
            <p
              style={{ fontWeight: 400, fontSize: '14px' }}
              className="smallText"
            >
              {smallText}
            </p>
          </div>
        </Fade>
        <div className="bottomPart">
          <Fade bottom>
            <div
              className="button__group"
              style={!footerText ? { marginBottom: '50px' } : {}}
            >
              <div
                className={`leftbutton ${
                  specialButton ? 'specialButton' : ''
                } ${specialButtonBorder ? 'specialButtonBorder' : ''}`}
              >
                {leftBtnText}
              </div>
              {rightBtnText && (
                <div
                  className={`rightbutton ${
                    specialButton ? 'specialButton' : ''
                  } ${
                    specialButtonBorderFull ? 'specialButtonBorderFull' : ''
                  }`}
                >
                  {rightBtnText}
                </div>
              )}
            </div>
          </Fade>
          <div
            className={`button__description ${
              type !== 'photo' && 'white-content'
            }`}
          >
            {footerText && <p>{footerText}</p>}
            {footerTextDetail && (
              <p className="button__description_detail">{footerTextDetail}</p>
            )}
          </div>
          {/* {footer && (
            <ul className="footer">
              <li>Tesla © 2023</li>
              <li>Privacy & Legal</li>
              <li>Vehicle Recalls</li>
              <li>Contact</li>
              <li>News</li>
              <li>Get Updates</li>
              <li>Locations</li>
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Section;
