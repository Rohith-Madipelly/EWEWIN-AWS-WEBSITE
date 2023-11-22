
import React, { useState, useEffect } from 'react';
import './nav.css';
import './newButton.css'
import { upcoming_contestAPI, Mycoming_contestAPI } from '../Services2/ApiCalls'


import UpComing_ContestsCard from '../shared/Cards/UpComing_ContestsCard';
import Your_ContestsCard from '../shared/Cards/Your_ContestsCard';
import Loader from '../shared/Loader/Loader';





const UpComing_ContestPage = () => {

    const [id, setId] = useState("**********");
    const [upcoming_contestData, setUpcoming_contestData] = useState([]);
    const [mycontestData, setMycontestData] = useState([]);
    const [empty, setEmpty] = useState(true);
    const [empty_upcoming_contest, setEmpty_upcoming_contest] = useState(true);


    const token = localStorage.getItem('token');



    //Method for Upcoming contest api 
    const upcoming_contest = async () => {
        try {

            const res = await upcoming_contestAPI(token)

            const userData = res.data.data;
           
            if (userData.length === 0) {
                setEmpty_upcoming_contest(false)

            }
            else {
                setEmpty_upcoming_contest(true)
                setUpcoming_contestData(userData)

            }

        } catch (error) {


            console.error("upcoming_contest >", error)
            // setEmpty_upcoming_contest(true)
        }
    }

    //Method for mycoming_contest api
    const mycoming_contest = async () => {
        try {
            // setIsLoading(true);   loading 

            const res2 = await Mycoming_contestAPI(token)


            const userData1 = res2.data.data;
            if (userData1.length === 0) {
                console.error("no data found")
               
            }
            else {
                console.error("data ??", userData1)
                setMycontestData(userData1)
            }
        } catch (error) {
 

            console.error("Error in Mycoming_contestAPI", error)
        }
    }

    useEffect(() => {
        upcoming_contest()
        mycoming_contest()
    }, []);
    const [isLoading, setIsLoading] = useState(false);

    return (

        <div className='screenPage mt-0 vh-100'> {isLoading && <Loader />}
        <section className='container py-2 marginTopper-80 ' 
        // style={{ background: "linear-gradient(135deg, #F1B94F,#CE7E1C, #8C440A, #592401,#1B0801)" }}
        >
             
            <div className='row'>
 


                {/* Up Coming Contests data */}
                <div className="col col-md-8 col-sm-12">
                    <div className='card  p-3 pb-4 '>
                        <h5 className='ps-4 pt-4'><b>UpComing Contests</b></h5>

                        {empty_upcoming_contest ?
                            <div style={{overflowX: "auto", maxHeight: "535px" }}>
                                {upcoming_contestData.map((item, index) => (
                                    
                                    item.is_joined?"":<UpComing_ContestsCard key={index} iteam={item}/>
                                ))}
                            </div> :
                            <div className='card p-5 bg-red-500'>
                                <div className='d-flex justify-content-center '>
                                    <b>Currently we don't have any contest in upcoming days</b>
                                    <br />
                                </div>
                            </div>
                        }
                    </div>
                </div>

                {/* Your contests */}
                <div className="col col-md-4 col-sm-12 ">
                    <div className='card p-3 pb-4 '>
                        <h5 className='ps-4 pt-4'><b>Your Contests</b></h5>

                        {empty ? 
                        <div style={{overflowX: "auto", maxHeight: "535px" }}>{mycontestData.map((item, index) => (
                            <Your_ContestsCard key={index} iteam={item} />
                        ))}</div> : 
                        <div className='card p-5 bg-red-500'>
                            <div className='d-flex justify-content-center '>
                                <b>You have No Constest. Join and add from Up Coming contests</b>
                                <br />
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>


        </section>
        </div>
    )
}

export default UpComing_ContestPage


