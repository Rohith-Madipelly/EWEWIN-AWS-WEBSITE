
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


    const [ProfileData, setProfileData] = useState("");


    const token = localStorage.getItem('token');

    useEffect(() => {
        const upcoming_contest = async () => {
            try {
                // setIsLoading(true);   loading 


                const res = await upcoming_contestAPI(token)
                const userData = res.data.data;
                // console.error("Error in api ", res)

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
                const userData1 = res2.data.data;
                setMycontest(userData1)
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
                            {mycontest.map((item, index) => (
                                <ShopCard2 key={index} iteam={item} />
                            ))}

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


