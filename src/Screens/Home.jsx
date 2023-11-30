import { React ,lazy, Suspense } from 'react';

//Toast Alerts
import { toast, ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

const HeroSection = lazy(() => import('../Components/HeroSection/HeroSection'));
const ContestTimerPage = lazy(() => import('../Components/TimerPage/ContestTimerPage'));
const PriceMoneyPage = lazy(() => import('../Components/PriceMoneyPage/PriceMoneyPage'));
const Gallary = lazy(() => import('../Components/Gallery/Gallery'));
const FAQSection = lazy(() => import('../Components/FAQSection'));
const Footer = lazy(() => import('../Components/Footer/Footer'));

const ArrowBackToTopButton = lazy(() => import('../shared/ArrowButtons/ArrowBackToTopButton'));

function Home() {

  return (
    <>
      <HeroSection />
      <ContestTimerPage />
      <PriceMoneyPage />
      <Gallary />
      <FAQSection />
      <Footer />


      <ArrowBackToTopButton />
    </>
  )
}

export default Home