import React from 'react';

import { ToastContainer } from 'react-toastify';

import { lazy, Suspense } from 'react';

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
      <ToastContainer></ToastContainer>
    </>
  )
}

export default Home