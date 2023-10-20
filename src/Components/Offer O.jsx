import React from 'react'
import Countdown from './Counter/Countdown'

function LPattern2() {
    return (
        <div className='Layout2 my-1' id='OfferTop'>
    <div className='background-Img w-100 mt-4'>
        <img src="./Assets/Timer2.jpg" alt="" className='timerImg'/>
    </div>
    <div className='aligncenter'>
        <Countdown/>
    </div>
</div>

    )
}

export default LPattern2