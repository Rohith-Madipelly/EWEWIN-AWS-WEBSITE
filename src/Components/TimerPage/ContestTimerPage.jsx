import React, { useState, useEffect } from 'react'
import './TimerPage.css'

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import '@leenguyen/react-flip-clock-countdown/dist/index.css'


import { HomeTimerApi } from '../../Services/ApiCalls'
import { Fade } from 'react-awesome-reveal';



function LPattern2() {
  const [size, setSize] = useState({ width: 40, height: 60, fontSize: 30 })
  // const [timeData, setTimeData] = useState('FEB 1, 2024 18:30:00')
  const [timeData, setTimeData] = useState(null)

  const HomeTimer = async () => {
    try {
      const res = await HomeTimerApi()
      if (res) {
        const resTime = res.data.contest.starts_at;
       
        console.error(resTime)
        dsd(resTime)
      }
      else {
        console.error("res not found in HomeTimer Api")
      }

    } catch (error) {
      console.error("api error in HomeTime",error)
    }

  }

  const dsd = (resTime) => {

    // var startDate = new Date("2023-10-31T06:30:00.000Z");
    var startDate = new Date(resTime);

    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    var month = monthNames[startDate.getMonth()];
    var day = startDate.getDate();
    var year = startDate.getFullYear();
    var hours = startDate.getHours();
    var minutes = startDate.getMinutes();
    var seconds = startDate.getSeconds();

    var formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
    setTimeData(formattedDate)
  }


  useEffect(() => {

    HomeTimer()

  }, [])





  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 569 && windowWidth > 370) {
        setSize({ width: 24, height: 40, fontSize: 25 })
        //  console.error(">320")

      }
      else if (windowWidth < 370) {
        setSize({ width: 15, height: 22, fontSize: 25 })
        //  console.error(">320 22")

      }

      else {
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
        <div className='Indexerr'>
          <h2 className='mb-3'>Get Ready To Win in</h2>
          <Fade> <FlipClockCountdown

            digitBlockStyle={size}
            to={new Date(timeData).getTime()}
            // to={new Date('OCT 31, 2023 18:30:00').getTime()}
            // to={new Date('OCT 20, 2023 06:30:00').getTime()}
            labels={['DAYS', 'HOURS', 'MINS', 'SECS']}
            // labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}

            duration={0.5} />

          </Fade>
        </div>
      </div>

      <div className='TimerGrid-2 gridSetting'>
        {/* <img src="src/assets/img/Timer.png" alt="no logo" className='TimerImg' /> */}
        <img src="src/assets/img/TimerDanceing.gif" alt="no logo" className='TimerImg' />

      </div>


    </div>

  )
}

export default LPattern2