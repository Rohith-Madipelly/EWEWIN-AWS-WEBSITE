
import React, { useState, useEffect } from 'react';
import './nav.css';
import './newButton.css'
import './Contest.css'
import { upcoming_contestAPI, Mycoming_contestAPI } from '../Services/ApiCalls'
import { onTop } from '../Services/commonService'


import UpComing_ContestsCard from '../shared/Cards/UpComing_ContestsCard';
import Your_ContestsCard from '../shared/Cards/Your_ContestsCard';
import Loader from '../shared/Loader/Loader';


import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


const UpComing_ContestPage = () => {

    const [id, setId] = useState("**********");
    const [upcoming_contestData, setUpcoming_contestData] = useState([]);
    const [mycontestData, setMycontestData] = useState([]);
    const [mycontestDataReady, setMycontestDataReady] = useState([]);
    const [mycontestDataCompleted, setMycontestDataCompleted] = useState([]);
    const [empty, setEmpty] = useState(true);
    const [emptyReady, setEmptyReady] = useState(true);
    const [empty_upcoming_contest, setEmpty_upcoming_contest] = useState(true);
    const [emptyCompleted, setEmptyemptyCompleted] = useState(true);


    const token = localStorage.getItem('token');



    //Method for Upcoming contest api 
    const upcoming_contest = async () => {
        try {

            const res = await upcoming_contestAPI(token)

            const userData = res.data.data;
            console.error("sc>",userData)

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

            console.error(">>>>>>>>>")
            console.error("opened_contests >", res2.data.opened_contests)
            console.error("ready_contests >", res2.data.ready_contests)
            console.error("upcoming_contests >", res2.data.upcoming_contests)
            console.error("completed_contests >", res2.data.completed_contests)
            console.error("<<<<<<<<<<")


            // const userData1 = res2.data.data;
            // const userData1 = res2.data.upcoming_contests;
            const userData01 = res2.data.opened_contests.concat(res2.data.ready_contests);
            const userData0 = userData01.concat(res2.data.upcoming_contests);
            const userData03 = userData0.concat(res2.data.completed_contests);

            const userData1 = res2.data.upcoming_contests
            const userData2 = res2.data.ready_contests
            const userData3 = res2.data.completed_contests



            // >>>>>
            if (userData1.length === 0) {
                console.error("no data found")

            }
            else {

                setMycontestData(userData1)
            }


            // >>>>>


            if (userData2.length === 0) {

                console.error("no data found userData2")
                setEmptyReady(false)

            }
            else {

                setMycontestDataReady(userData1)
            }


            // >>>>>

            if (userData3.length === 0) {

                console.error("no data found userData2")
                setEmptyemptyCompleted(false)

            }
            else {

                setMycontestDataCompleted(userData3)
            }






        } catch (error) {


            console.error("Error in Mycoming_contestAPI", error)
        }
    }

    useEffect(() => {
        onTop()
        upcoming_contest()
        mycoming_contest()
    }, []);
    const [isLoading, setIsLoading] = useState(false);

    return (

        <div className='screenPage mt-2'> {isLoading && <Loader />}
            <section style={{ width: "100%", height: "100vh", }} className='container py-2 marginTopper-80 '>
                
                <Tabs
                    defaultActiveKey="Upcoming Contest"
                    // id="uncontrolled-tab-example"
                    // id="justify-tab-example"
                    className="mb-3"
                    id="noanim-tab-example"
                    // fill
                >
                    <Tab eventKey="Upcoming Contest" title="Upcoming Contest">
                    <div className='card  p-3 pb-4'>
                            <h5 className='ps-4 pt-4'><b>UpComing Contests</b></h5>

                            {empty_upcoming_contest ?
                                <div style={{ overflowX: "auto", maxHeight: "535px" }}>
                                    {upcoming_contestData.map((item, index) => (
              


                                        item.is_joined ?  "" : <UpComing_ContestsCard key={index} iteam={item} />
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
                    </Tab>
                    <Tab eventKey="Your Upcoming Contests" title="Your Upcoming Contests">
                    <div className='card p-3 pb-4 '>
                            <h5 className='ps-4 pt-4'><b>Your Upcoming Contests for Play </b></h5>

                            {empty ?
                                <div style={{ overflowX: "auto", maxHeight: "535px" }}>{mycontestData.map((item, index) => (
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
                    </Tab>
                    {/* <Tab eventKey="Opened Contests" title="Opened Contests">
                        Opened Contests
                    </Tab> */}
                    <Tab eventKey="Ready Contests" title="Ready Contests">
                    <div className='card p-3 pb-4 '>
                            <h5 className='ps-4 pt-4'><b> Ready Contests For Live</b></h5>

                            {emptyReady ?
                                <div style={{ overflowX: "auto", maxHeight: "535px" }}>{mycontestDataReady.map((item, index) => (
                                    <Your_ContestsCard key={index} iteam={item} />
                                ))}</div> :
                                <div className='card p-5 bg-red-500'>
                                    <div className='d-flex justify-content-center '>
                                        <b>No Constest for Live</b>
                                        <br />
                                    </div>
                                </div>
                            }
                        </div>
                    </Tab>
                    <Tab eventKey="Completed Contests" title="Completed Contests">
                    <div className='card p-3 pb-4 '>
                            <h5 className='ps-4 pt-4'><b> Completed Contests</b></h5>

                            {emptyCompleted ?
                                <div style={{ overflowX: "auto", maxHeight: "535px" }}>{mycontestDataCompleted.map((item, index) => (
                                    <Your_ContestsCard key={index} iteam={item} />
                                ))}</div> :
                                <div className='card p-5 bg-red-500'>
                                    <div className='d-flex justify-content-center '>
                                        <b>No Constest for Live</b>
                                        <br />
                                    </div>
                                </div>
                            }
                        </div>
                    </Tab>

                </Tabs>
            </section>

        </div>
    )
}

export default UpComing_ContestPage


