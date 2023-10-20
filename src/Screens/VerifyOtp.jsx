import React,{useState} from 'react'
import OtpInput from 'react-otp-input';
import './nav.css'

function VerifyOtp() {
  const [otp, setOtp] = useState('');

  return (
    <div className='centerDiv mt-5 flex-column marginTopper-80'>
      <h1>Hello</h1>
<OtpInput 

      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
    </div>
    
  );
}

export default VerifyOtp

