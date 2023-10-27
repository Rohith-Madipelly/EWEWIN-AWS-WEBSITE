import React from 'react'

import Layout1 from '../Components/HeroSection/Layout1';
import TimerPage from '../Components/TimerPage/TimerPage';
import DownloadSection from '../Components/DownloadSection/DownloadSection';
import Gallary from '../Components/Gallery/Gallery';
import FAQSection from '../Components/FAQSection';
import Footer from '../Components/Footer/Footer';
import ArrowBackToTopButton from '../shared/ArrowButtons/ArrowBackToTopButton';

function Home() {
  return (
    <div>
        
      

      <Layout1 />
   
      <TimerPage/>

      <DownloadSection/>
      <Gallary/>
      
       <FAQSection/>

       <Footer/>
       <ArrowBackToTopButton/>
    </div>
  )
}

export default Home