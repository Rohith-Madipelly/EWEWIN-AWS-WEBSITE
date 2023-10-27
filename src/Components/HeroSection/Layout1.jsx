import React from 'react'
import './Layout.css';
import TypingH2 from '../TypingH2';

import '../StanderdStyles/Button29.css'
import { Link } from 'react-router-dom';

function Layout1() {

    return (
        <div>
        <section className='Layout Box b1 marginTopper-50 marginBottom-50' id='HomeTop'>
            <video playsInline autoPlay muted loop className='background-video'>
                <source src="/src/assets/video/BackgroundVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
       


            <div className='container container2 LayoutCom2 mt-3'>
                <div className='inner-box w-100 d-flex align-items-center m-5 mb-4'>
                    <div>
             
                        <TypingH2 text="EZEWIN" />

                        <p class="text-white-75 mb-5 left-100">
                        "We Make dreams come true"
                        </p>

                        <Link  to="/Register"><button class="bn632-hover bn20">Get Started!</button></Link>
                    </div>
                </div>

                <div>
                    <div className='inner-box d-flex align-items-center '>
                       
                     <img src="src/assets/img/indianQuizApp.png" loading={"lazy"} alt="no logo" className='imgesize-100'/>
                      
                    
                        
                    </div>
                </div>
            </div>



        </section >
        </div>
    )
}

export default Layout1