import React, { useRef } from 'react';
import Layout1 from '../Components/HeroSection/Layout1';
import TimerPage from '../Components/TimerPage/TimerPage';
import DownloadSection from '../Components/DownloadSection/DownloadSection';
import Gallary from '../Components/Gallery/Gallery';
import FAQSection from '../Components/FAQSection';
import Footer from '../Components/Footer/Footer';
import ArrowBackToTopButton from '../shared/ArrowButtons/ArrowBackToTopButton';
import { toast, ToastContainer, Zoom } from 'react-toastify';

import Header1 from '../Components/Header/Header2';

function Home() {

  // const div2Ref = useRef(null);
  // const div3Ref = useRef(null);


  return (
    <div>  
      
      <Layout1 />
   
      <TimerPage/>

      <DownloadSection/>
      <Gallary/>
      
       <FAQSection/>

       <Footer/>
       <ArrowBackToTopButton/>
       <ToastContainer></ToastContainer>
      
    </div>
  )
}

export default Home