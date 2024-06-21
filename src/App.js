import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  const [openDetail, setOpenDetail] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);

  return (
    <div className="container ">
      <Header
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        openLanguage={openLanguage}
        setOpenLanguage={setOpenLanguage}
        setBannerHeight={setBannerHeight}
      />
      <Home
        openLanguage={openLanguage}
        setOpenLanguage={setOpenLanguage}
        marginTop={bannerHeight}
      />
      <Footer />
    </div>
  );
}

export default App;
