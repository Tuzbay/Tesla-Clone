import React from 'react';
import './home.scss';
import Section from '../Section/Section';
const Home = ({ marginTop }) => {
  const containerStyle = {
    marginTop: `${marginTop}px`,
    // zIndex: 0,
  };

  return (
    <div className="container" style={containerStyle}>
      <Section
        type="photo"
        title="Model 3"
        description="Long Range AWD From $34,990"
        smallText="After Est. Savings"
        backgroundImg="model3.avif"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
        // footerText="*Price before incentives and savings is $40,240, excluding taxes and fees. Subject to change."
        // footerTextDetail="Learn about est. gas savings."
        marginTop={marginTop}
      />
      <Section
        type="photo"
        title="Model Y"
        description="From $31,490*"
        smallText="After Est. Savings"
        backgroundImg="model-y.avif"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
        // footerText="*Price before incentives and savings is $47,740, excluding taxes and fees. Subject to change."
        // footerTextDetail="Learn about est. gas savings."
        marginTop={marginTop}
      />
      <Section
        type="photo"
        title="Model X"
        description="From $63,990"
        smallText="After Est. Savings"
        backgroundImg="modelX.avif"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
        // footerText="*Price before savings is $74,990, excluding taxes and fees. Subject to change."
        // footerTextDetail="Learn about est. gas savings."
        marginTop={marginTop}
      />
      <Section
        type="photo"
        title="Model S"
        description="From $66,490*"
        smallText="After Est. Savings"
        backgroundImg="modelS.avif"
        leftBtnText="Order Now"
        whiteText
        rightBtnText="Demo Drive"
        // footerText="*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change."
        // footerTextDetail="Learn about est. gas savings."
        marginTop={marginTop}
      />
      <Section
        // type="video1"
        type="photo"
        // title="Cybertruck"
        // smallText="Schedule a Demo Drive Today"
        backgroundImg="cybertruck.avif"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        marginTop={marginTop}
        specialButton
        specialButtonBorder
        specialButtonBorderFull
      />
      <Section
        type="photo"
        title="Solar Panels"
        smallText="Schedule a Virtual Consultation"
        backgroundImg="solarpanels.avif"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        marginTop={marginTop}
        whiteText
      />
      <Section
        type="photo"
        title="Solar Roof"
        smallText="Produce Clean Energy From Your Roof"
        backgroundImg="solarroof.avif"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        marginTop={marginTop}
      />
      <Section
        type="photo"
        title="Powerwall"
        backgroundImg="powerwall.avif"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        marginTop={marginTop}
      />
      <Section
        type="photo"
        title="Accessories"
        backgroundImg="accessories.avif"
        leftBtnText="Shop Now"
        // footer
        marginTop={marginTop}
      />
    </div>
  );
};

export default Home;
