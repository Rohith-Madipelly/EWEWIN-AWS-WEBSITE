import React from 'react'
import { useNavigate } from "react-router-dom";
function PaymentDone() {
  
  const navigate = useNavigate();
  return (
    <section className='NotFoundPage'>
    <div className='centerDiv mt-5 flex-column'>
        <h1 className='text-dark'><b>Payment successful</b></h1>
     
        <img src="Hello.gif" alt="" />
        {setTimeout(() => {
          navigate('/')
        },2000)
    
      }
    </div>
</section>
  )
}

export default PaymentDone

