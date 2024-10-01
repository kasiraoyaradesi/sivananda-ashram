import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './Components/navbar/Navbar';
import Home from './Components/slider/Home';
import Footer from './Components/footer/Footer';
import Ashram from './Components/home/Ashram';
import AboutAshram from './Components/home/AboutAshram';
import AshramServices from './Components/home/AshramServices';
import Photo from './Components/photogallery/Photo';
import Scriptures from './Components/scriptures/Scriptures';
import Contact from './Components/contact/Contact';
import Yogaday from './Components/contact/Yogaday'
import Videos from './Components/videos/Videos';
import News from './Components/news/News';
import KnowMore from './Components/slider/KnowMore'; // Import the KnowMore component
import Header from './Components/header/Header';
import SwamiSivananda from './Components/slider/SwamiSivananda'; // Import the new page component

function App() {
  return (
    <Router basename="/sivananda-ashram">
      <Navbar />
      <Header />
      <Routes >
        <Route path="/" element={
            <>
              <Home />
              <AboutAshram />  {/* These will now only be visible on the home page */}
              <AshramServices />
            </>
          } 
        />
        <Route path="/ashram" element={<Ashram />} />
        <Route path="/news" element={<News />} />
        <Route path="/photogallery" element={<Photo />} />
        <Route path="/scriptures" element={<Scriptures />} />
        <Route path='/Yogaday' element={<Yogaday/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<Videos />} /> 
        <Route path="/knowmore" element={<KnowMore />} />
        <Route path="/swami-sivananda" element={<SwamiSivananda />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
