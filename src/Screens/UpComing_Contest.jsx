
import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../Enviornment'
import { useLocation } from "react-router-dom";
import './newButton.css'
import { upcoming_contestAPI,Mycoming_contestAPI } from '../Services2/ApiCalls'


import { RAZORPAY_KEY, RAZORPAY_URL } from "./../Enviornment";

import { verifySignatureApi, createOrder } from './../Services2/ApiCalls'
import ShopCard from '../shared/Card';
import ShopCard2 from '../shared/Card2';



const ProfileUpdate = () => {
    const [id, setId] = useState("**********");
    const [Name, setName] = useState([]);
    const [mycontest, setMycontest] = useState([]);
    const [empty, setEmpty] = useState(false);


    const [ProfileData, setProfileData] = useState("");


    const token = localStorage.getItem('token');

    useEffect(() => {
        const upcoming_contest = async () => {
            try {
                // setIsLoading(true);   loading 


                const res = await upcoming_contestAPI(token)
                const userData = res.data.data;
                // console.error("Error in api ", res)
                console.error("loss>>>>",userData)

                setName(userData)
            } catch (error) {
                console.error("Error in api ", error)
                
            }
        }
        upcoming_contest()

        const mycoming_contest = async () => {
            try {
                // setIsLoading(true);   loading 


                const res2 = await Mycoming_contestAPI(token)
                if(res2.data.data.length === 0){
                    console.error("no data found")
                }
                else{
                    const userData1 = res2.data.data;
                console.error("data vachinda ??",userData1)
                setMycontest(userData1)}
                setEmpty(true)
            

            } catch (error) {
                console.error("Error in api ", error)
            }
        }
        mycoming_contest()
    }, []);

    return (
        <section className='container py-2 marginTopper-80'>

            {console.error("sds", Name)}

            <div className='row'>
                <div className="col col-md-8 col-sm-12">
                    <div className='card ms-5 p-3 pb-4 '>
                        <h5 className='ps-4 pt-4'><b>Up Coming Contests</b></h5>                
                            {Name.map((item, index) => (
                                <ShopCard key={index} iteam={item} />
                            ))}
                    </div>
                </div>
                <div className="col col-md-4 col-sm-12">
                    <div className='card p-3 pb-4 '>

                        <h5 className='ps-4 pt-4'><b>Your Contests</b></h5> 
                        {/* {empty?<div>yes</div>:<div>no</div>}    */}
                       
                            {empty ? <div>{mycontest.map((item, index) => (
                                <ShopCard2 key={index} iteam={item} />
                            ))}</div> :<div className='card p-5 bg-red-500'>
                               <div className='d-flex justify-content-center '>
                                {/* <div>You have No Constest to Play</div> */}
                                <b>You have No Constest. Pay and add for Up Coming contests</b>
                                <br/>
                               {/* <div> Pay and add Now</div> */}
                                </div> 
                            </div>
                            }

                        {/* </div> */}

                    </div>
                </div>
            </div>


            <section>

            </section>

        </section>

    )
}

export default ProfileUpdate


