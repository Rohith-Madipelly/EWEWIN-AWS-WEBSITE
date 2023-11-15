import React from 'react';
import './Layout.css';
import '../StanderdStyles/Button29.css'

import { lazy } from 'react';
const TypingH2 = lazy(() => import('./TypingH2'));

import { Link } from 'react-router-dom';



function HeroSection() {
    return (
        <div className="HeroSection">
            <section className='Layout Box b1 marginTopper-50 marginBottom-50' id='HomeTop'>
                <video playsInline autoPlay muted loop className='background-video'>
                    <source src="/src/assets/video/BackgroundVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className='container2 LayoutCom2'>
                    
                    <div className='inner-box  d-flex align-items-center  mb-5 ms-4 mt-5'>
                        <div>
                            <TypingH2 text="EZEWIN" />
                            <div className='hello'>
                                <p class="text-white-75 captionss pok2">
                                    "We Make dreams come true"
                                </p>
                                <div></div>
                                <Link to="/Register"><button class="bn632-hover bn20 ms-auto pok">Get Started!</button></Link>
                            </div></div>
                    </div>

                    <div>
                        <div className='inner-box d-flex align-items-center'>
                            <img src="src/assets/img/indianQuizApp.png" loading={"lazy"} alt="no logo" className='imgesize-100' />
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default HeroSection