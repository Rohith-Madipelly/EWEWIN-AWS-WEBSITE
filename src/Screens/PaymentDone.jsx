import React from 'react'
import { useNavigate } from "react-router-dom";

import TimerPage from '../Components/TimerPage/TimerPageTTTTTt'; 

function PaymentDone() {
  
  const navigate = useNavigate();
  return (
    <section className='NotFoundPage'>
    <div className='centerDiv mt-5 flex-column'>
        <h1 className='text-dark'><b>Payment successful</b></h1>

        {/* <h2  className='text-dark'>Get Ready to Play </h2> */}
        <TimerPage/>
        <img src="Hello.gif" alt="" />
        {/* {setTimeout(() => {
          navigate('/')
        },10000)} */}
    </div>
</section>
  )
}

export default PaymentDone

