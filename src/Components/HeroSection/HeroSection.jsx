import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='HeroSection'>
            <div className='Layout Box b1' id='HomeTop'>
                <video playsInline autoPlay muted loop className='background-video'>
                    <source src="./Assets/km3.mp4" type="video/mp4" />
                    {/* Your browser does not support the video tag. */}
                </video>

                <div className='container container2 LayoutCom2 mt-3'>
                    <div className='inner-box w-100 d-flex align-items-center m-5'>
                        <div>

                            {/* <TypingH2 text="EZEWIN" /> */}

                            <p class="text-white-75 mb-5 left-100">
                                "-We Make dreams come true" Testing
                            </p>
                            <a class="btn1 btn-light btn-xl" href="#Offer">Get Started!</a>
                        </div>
                    </div>

                    <div>
                        <div className='inner-box d-flex align-items-center '>

                            <img src="./Assets/logooo.png" alt="no logo" className='imgesize-100' />



                        </div>
                    </div>
                </div>



            </div >

        </div>
    )
}

export default HeroSection