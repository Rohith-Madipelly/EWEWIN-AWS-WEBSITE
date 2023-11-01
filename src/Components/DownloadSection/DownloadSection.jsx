import React, { useEffect, useState } from 'react'
import './Download.css'
import { Slide} from 'react-awesome-reveal';
import { Link } from 'react-router-dom'
import "../StanderdStyles/Style.css"

import { HomePriceMoneyListApi } from '../../Services2/ApiCalls'

function DownloadSection() {
    const [winningData,setWinningData]=useState([])

    const HomePriceMoneyList = async () => {

        try {
          const res = await HomePriceMoneyListApi()
          if (res) {
            const resTime=res.data.first_upcoming[0].winnings;
            if(resTime!=""){
                console.error("HomePriceMoneyListApi",resTime)
// setWinningData(resTime)
                console.error("first Winner",resTime[0].amount)
                console.error("2nd Winner",resTime[1].amount)
                console.error("3nd Winner",resTime[2].amount)
            }
            else{

            }
            
           
          }
          else {
            console.error("res not found in HomePriceMoneyList Api")
          }
    
        } catch (error) {
          console.error("api error in HomePriceMoneyList")
        }
    
      }


      useEffect(()=>{
        HomePriceMoneyList()
      },[])


    














    return (

        <section className='pt-2' id='PriceMoney'
            style={{ background: "linear-gradient(135deg, gold, darkgoldenrod, orange)" }}
        >
              <Slide triggerOnce>
            <div className='container'>


<div className='Gridparent pt-2' >

    <div className='grid1 '>
        <div className="footer-links text-dark my-3">
            <h5 className="text-dark">Install EZEWIN App on</h5>
            <div className="downloadApp w-100">
                <div className="oneApp">
                <a href="/" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
                <a href="/" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
                </div>
            </div>
        </div>

        <div class="d-grid gap-2">
            <span><Link  to="/Register"><button className='btn12'>Register</button></Link></span>
        </div>
        <div class="d-grid gap-2 my-2 ">
            <span><Link  to="/Register"><button className='btn12'>Answer</button></Link></span>
        </div>
        <div class="d-grid gap-2">
            <span><Link  to="/Register"><button className='btn12'>Win</button></Link></span>
        </div>
    </div>
       
    <img  className="grid2 " src="src/assets/img/WinnerModel.png" />
    <div className='textstyle mt-3 grid3 text-center'>
        <h3 className='fontA4'><strong>1Question = 1Answer = Big Win</strong></h3>
        
        <div className='fontA1'><b>10 lakhs</b></div>
        <div className='fontA2'><b>5 lakhs</b></div>
        <div className='fontA3'><b>3 lakhs</b></div>
        <div className='fontA4'><b>2 lakhs</b></div>
        <div className='fontA5'><b>1 lakhs</b></div>
        <div className='fontA6'><b>10 X 10,000</b></div>

        {winningData}
        
    </div>
</div>
</div></Slide>
        </section>



    )
}

export default DownloadSection