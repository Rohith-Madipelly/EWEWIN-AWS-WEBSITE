import React, { useState, useEffect} from 'react'
import './TimerPage.css'
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

import {Fade} from 'react-awesome-reveal';


function LPattern2() {
    const [size,setSize]=useState({ width: 40, height: 60, fontSize: 30 })
    useEffect(() => {
        const handleResize = () => {
          const windowWidth = window.innerWidth;
          if (windowWidth < 569) {
           setSize({ width: 27, height: 55, fontSize: 26 })

          } else {
            setSize({ width: 40, height: 60, fontSize: 30 });

          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set the initial size
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [size]);
    return (
        <div className='TimerPage' id='nextContest'>

            <div className='w-100 TimerL2 hellodd gridSetting'>
                <div className=''>
                    <h2 className='mb-3'>Get Ready To Win in</h2>
                   <Fade> <FlipClockCountdown 
                 
                    digitBlockStyle={size}
                    
                        to={new Date('DEC 20, 2023 00:00:00').getTime()}
                        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                       
                        duration={0.5} /></Fade>
                </div> 
            </div>

            <div className='TimerGrid-2 gridSetting'>
                <img src="src/assets/img/Timer.png" alt="no logo" className='TimerImg' />
            </div>


        </div>

    )
}

export default LPattern2