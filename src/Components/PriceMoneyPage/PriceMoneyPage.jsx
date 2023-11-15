import React, { useEffect, useState } from 'react'
import './Download.css'
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom'
import "../StanderdStyles/Style.css"

import { HomePriceMoneyListApi } from '../../Services2/ApiCalls'

function PriceMoneyPage() {
  const [winnersList, setWinningList] = useState([])
  const [winningData1, setWinningData1] = useState([])
  const [winningData2, setWinningData2] = useState([])
  const [winningData3, setWinningData3] = useState([])
  const [winningData4, setWinningData4] = useState([])
  const [winningData5, setWinningData5] = useState([])
  const [winningData6, setWinningData6] = useState([])
  const [winningData7, setWinningData7] = useState([])
  const [mycontest, setMycontest] = useState([]);


  const HomePriceMoneyList = async () => {

    try {
      const res = await HomePriceMoneyListApi()
      if (res) {
        const resTime = res.data.contest.winnings;
        
        if (resTime != "") {
          setWinningList([resTime])
          console.error("HomePriceMoneyListApi >>>>>>", resTime)

          // setWinningData(resTime)

          setWinningData1(resTime[0].amount)
          setWinningData2(resTime[1].amount)
          setWinningData3(resTime[2].amount)
          setWinningData4(resTime[3].amount)
          setWinningData5(resTime[4].amount)
          setWinningData6(resTime[5].amount)
          // setWinningData7(resTime[6].amount)



        }
        else {

        }


      }
      else {
        console.error("res not found in HomePriceMoneyList Api")
      }

    } catch (error) {
      console.error("api error in HomePriceMoneyList")
    }

  }


  useEffect(() => {
    HomePriceMoneyList()
  }, [])

  return (

    <section className='pt-2' id='PriceMoney'
      style={{ background: "linear-gradient(135deg, gold, darkgoldenrod, orange)" }}
    >
      <Slide triggerOnce>
        <div className='container'>


          <div className='Gridparent pt-2' >

            <div className='grid1  mb-4'>
              <div className="footer-links text-dark my-3">
                <h5 className="text-dark">Install EZEWIN App on</h5>
                <div className="downloadApp w-100">
                  <div className="oneApp">
                    <a href="https://www.appcracy.com/category/app/" target='_blank' tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" /></a>
                    <a href="https://www.apple.com/app-store/" target='_blank' tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></a>
                  </div>
                </div>
              </div>

              {winnersList.map((item, index) => (
                console.error(item)
                              //  <div>{item}</div>
                            ))}
              <div class="d-grid gap-2">
                <span><Link to="/Register"><button className='btn12 btn-rr'>Register</button></Link></span>
              </div>
              <div class="d-grid gap-2 my-2 ">
                <span><Link to="/Register"><button className='btn12'>Answer</button></Link></span>
              </div>
              <div class="d-grid gap-2">
                <span><Link to="/Register"><button className='btn12'>Win</button></Link></span>
              </div>
            </div>

            {/* <img  className="grid2 " src="src/assets/img/WinnerModel.png" /> */}
            <div> </div>
            <div className='textstyle mt-3 grid3 text-center'>
              <h3 className='fontA4'><strong>1Question = 1Answer = Big Win</strong></h3>

              {/* <div className='fontA1'><b>{winningData1?winningData1:<b>10 lakhs</b>}</b></div>
        <div className='fontA2'><b>{winningData2?winningData2:<b>5 lakhs</b>}</b></div>
        <div className='fontA2'><b>{winningData3?winningData3:<b>3 lakhs</b>}</b></div>
        <div className='fontA2'><b>{winningData4?winningData4:<b>2 lakhs</b>}</b></div>
        <div className='fontA2'><b>{winningData5?winningData5:<b>1 lakhs</b>}</b></div>
        <div className='fontA2'><b>{winningData6?winningData6:<b>10 X 10,000</b>}</b></div> */}





              <div className='fontA1'><b>{winningData1 ? winningData1 : <b>10 lakhs</b>}</b></div>
              <div className='fontA2'><b>5 lakhs</b></div>
              <div className='fontA3'><b>3 lakhs</b></div>
              <div className='fontA4'><b>2 lakhs</b></div>
              <div className='fontA5'><b>1 lakhs</b></div>
              <div className='fontA6'><b>10 X 10,000</b></div>


            </div>
          </div>
        </div></Slide>
    </section>



  )
}

export default PriceMoneyPage