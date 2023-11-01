import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function App() {

  const [otp, setotp] = useState('');

  return (
    <OtpInput
      value={otp}
      onChange={setotp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
}