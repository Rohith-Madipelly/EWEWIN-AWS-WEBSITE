
import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../Enviornment'
import { useLocation } from "react-router-dom";
import './newButton.css'
import { upcoming_contest } from '../Services2/ApiCalls'


import { RAZORPAY_KEY, RAZORPAY_URL } from "./../Enviornment";

import { verifySignatureApi, createOrder } from './../Services2/ApiCalls'



const ProfileUpdate = () => {
    const [id, setId] = useState("**********");
    const [Name, setName] = useState([]);
    const [Email, setEmail] = useState("****************");
    const [Phone_Number, setPhone_Number] = useState("**********");
    const [Gender, setGender] = useState("******");
    const [wallet, setWallet] = useState("**");

    const [ProfileData, setProfileData] = useState("");


    const token = localStorage.getItem('token');

    useEffect(() => {
        const userData = async () => {
            try {
                // setIsLoading(true);   loading 

                // const res = await UserGetProfileDetails(token)
                const res = await upcoming_contest(token)
                const userData = res.data;
                console.error(userData)
                // setName(userData)
                setName([ {name:"rohith" , price:25},{name:"rohith sir" , price:79},{name:"sai sir", price:49}])

                console.error(Name)
                // setName(userData.Name)
                // setEmail(userData.Email)
                // setPhone_Number(userData.Phone_Number)
                // setGender(userData.Gender)
                // setWallet(userData.wallet)

            } catch (error) {
                console.error("Error in api ", error)
            }
        }
        userData()
    }, []);

    return (
        <section className='container py-2 marginTopper-80'>

{console.error("sds",Name)}

            {Name.map((item, index) => (
                <div key={index}>
                     <span>Name: </span>
                    <span>Price: </span> 
                </div>
            ))}

            {/* <h1 style={{ marginLeft: "0vw", color: "black" }}>Your Contests</h1> */}

            <div className='row'>
                {/* col first-left */}

                <div className="col col-md-10 col-sm-12">
                    <div className='card mx-5 p-3 pb-4 '>

                        <h5 className='ps-4 pt-4'><b>Up Coming Contests</b></h5>

                        <div className='card p-2'>
                            contests IDs

                        </div>

                        {/* <div className='card bg-danger mx-3 mt-1 p-2'>
                contests IDs
            </div> */}

                        <div className='row px-5 py-2'>
                            <div className='col bg-dark'>
                                sc
                            </div>
                            <div className='col bg-dark'>
                                ssssssssd
                            </div>
                        </div>

                        <div className='row px-5 py-2'>
                            <div className='col card bg-dark'>
                                sc
                            </div>

                            <div className='col card  bg-dark'>
                                ssssssssd
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <section>

            </section>

        </section>

    )
}

export default ProfileUpdate


