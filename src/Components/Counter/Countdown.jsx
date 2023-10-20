import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Countdown.css'
import {Slide} from "react-awesome-reveal"
const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      // clearInterval(intervalId);
      setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: ('0' + days).slice(-2),
        hours: ('0' + hours).slice(-2),
        minutes: ('0' + minutes).slice(-2),
        seconds: ('0' + seconds).slice(-2)
      });
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const endDate = new Date('DEC 20, 2023 00:00:00').getTime();

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="container" className='mt-5' >
      <Slide>
      <h1 className='headingH1'>Get Ready To Win in</h1>
      <div id="countdown">
        <div id="cdDays">
          <div id="daysNum">{timeLeft.days}</div>
          <div className="label">DAY(S)</div>
        </div>
        <div id="cdHours">
          <div id="hoursNum">{timeLeft.hours}</div>
          <div className="label">HOURS</div>
        </div>
        <div id="cdMins">
          <div id="minsNum">{timeLeft.minutes}</div>
          <div className="label">MINUTES</div>
        </div>
        <div id="cdSecs">
          <div id="secsNum">{timeLeft.seconds}</div>
          <div className="label">SECONDS</div>
        </div>
      </div></Slide>
    </div>
  );
};

export default Countdown;
