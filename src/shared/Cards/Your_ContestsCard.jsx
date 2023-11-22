import React, { useState } from 'react'
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import Loader from '../Loader/Loader'


import '@leenguyen/react-flip-clock-countdown/dist/index.css'
const Your_ContestsCard = (item) => {

    // const [timeData, setTimeData] = useState('FEB 1, 2024 18:30:00')
    const [timeData, setTimeData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);



    item = item.iteam




    const Timer =  ({ resTime }) => {
        // const resTime = item.starts_at;
    
        // const dsd = async (resTime) => {
    
        // var startDate = new Date("2023-10-31T06:30:00.000Z");
        var startDate = new Date(item.starts_at);
        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var month = monthNames[startDate.getMonth()];
        var day = startDate.getDate();
        var year = startDate.getFullYear();
        var hours = startDate.getHours();
        var minutes = startDate.getMinutes();
        var seconds = startDate.getSeconds();
    
        var formattedDate =`${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
        // setTimeData(formattedDate)
        // }
    
        return (        
                <FlipClockCountdown className='m-1 mb-3 me-2 p-3 pb-0'
    
                style={{ background: "linear-gradient(135deg, #F1B94F,#CE7E1C, #8C440A, #592401,#1B0801)" }}
    
                    digitBlockStyle={{ width: 24, height: 40, fontSize: 25 }}
                    // to={new Date('OCT 31, 2024 18:30:00').getTime()}
                    to={new Date(formattedDate).getTime()}
                    labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                    duration={0.5} />
    
        )
    }



    return (
        <div className="card123 shadow mt-3" 
        // style={{ background: "linear-gradient(135deg, #F1B94F,#CE7E1C, #8C440A, #592401,#1B0801)" }}
        > 
        {isLoading && <Loader />}
            <div className='border '>
                <div className='imgbox pt-3 ps-4' >
                    {/* <b>Id: {item._id}</b><br /> */}
                    <b>Contest Name: {item.name}</b><br />
                    <b>Price: {item.entry_fee}</b> <br />

                    <b>Status: <b className='text-danger'>{item.status}</b></b><br />

                    {item.status === "Upcoming" ? (
                        <b>
                            Time Left for quiz <br />
                            {/* <b>Price: {item.starts_at}</b> <br /> */}
                            <Timer resTime={item.starts_at}/></b>
                    ) : <div className='mt-3'></div>}
                </div>
            </div>
        </div>
    )
}

export default Your_ContestsCard
