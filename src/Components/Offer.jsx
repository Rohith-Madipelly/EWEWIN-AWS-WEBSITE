import React from 'react'

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import '@leenguyen/react-flip-clock-countdown/dist/index.css'


function LPattern2() {
    return (
        <div className='Layout2 my-1' id='OfferTop'>
            <div className='background-Img w-100 mt-4'>
                <img src="./Assets/Timer2.jpg" alt="" className='timerImg' />
            </div>
            <div className='aligncenter'>
               
                <FlipClockCountdown
                    to={new Date('DEC 20, 2023 00:00:00').getTime()}
                    // labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                    duration={0.5}
                />
            </div>
        </div>

    )
}

export default LPattern2