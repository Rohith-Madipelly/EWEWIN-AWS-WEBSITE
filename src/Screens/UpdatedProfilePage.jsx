
import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../Enviornment'
import { useLocation } from "react-router-dom";
import './newButton.css'
import { UserGetProfileDetails } from '../Services2/ApiCalls'


import { RAZORPAY_KEY, RAZORPAY_URL } from "./../Enviornment";

import { verifySignatureApi, createOrder } from './../Services2/ApiCalls'



const ProfilePage = () => {
  const [id, setId] = useState("**********");
  const [Name, setName] = useState("**********");
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

        const res = await UserGetProfileDetails(token)
        const userData=res.data.user;
        console.error(userData)
        setId(userData._id)
        setName(userData.Name)
        setEmail(userData.Email)
        setPhone_Number(userData.Phone_Number)
        setGender(userData.Gender)
        setWallet(userData.wallet)

      } catch (error) {
        console.error("Error in api ", error)
      }
    }
    userData()
  }, []);

  return (
    <section className='container py-2 marginTopper-80'>

      <h1 style={{ marginLeft: "21vw", color: "black" }}>Profile Page</h1>

      <div className='row'>
        {/* col first-left */}
        <div className='col-sm-12 col-md-3'>
          <div className='card'>
            <div className='profileCard text-center'>
              {Gender === "Female" ? <img
                src="src/assets/img/ProfileFemale.png"
                alt='profilePic'
                className='rounded-circle img-fluid'
                style={{ maxWidth: '150px' }}
              /> : Gender === 'Male' ? <img
                src="src/assets/img/ProfileMale.jpg"
                alt='profilePic'
                className='rounded-circle img-fluid'
                style={{ maxWidth: '150px' }}
              /> : <div><img
                src="src/assets/img/ProfileOthers.jpg"
                alt='profilePic'
                className='rounded-circle img-fluid'
                style={{ maxWidth: '150px' }}
              /></div>}

              <div className='data'>
                <p className='my-1'>{Name}</p>
                <p className='mb-4'>{id}</p>
              </div>
            </div>
          </div>

        </div>
        <div className="col col-md-9 card col-sm-12">
          <div className='m-4'>
            <div className="row ms-1">
              <div className="col-3">
                <strong>Full Name</strong>
              </div>
              <div className="col-9">
                {Name}
              </div>
            </div>
            <hr />
            <div className="row ms-1">
              <div className="col-3">
                <strong>Email</strong>
              </div>
              <div className="col-9">
                {Email}
              </div>
            </div>
            <hr />
            <div className="row ms-1">
              <div className="col-3">
                <strong>Gender</strong>
              </div>
              <div className="col-9">
                {Gender}
              </div>
            </div>
            <hr />
            <div className="row ms-1">
              <div className="col-3">
                <strong>Phone</strong>
              </div>
              <div className="col-9">
                {Phone_Number}
              </div>
            </div>

            <hr />

            {/* <div className="row ms-1">
              <div className="col-3">
                  <strong>Address</strong>
              </div>
              <div className="col-9">
                  11-24-140,2nd Bank Colony, Shanthi Nagar,Warangal,Telangana,India. 
              </div>
            </div>
            <hr/> */}
            <div className="row ms-1">
              <div className="col-3">
                <strong>UserID</strong>
              </div>
              <div className="col-9">
                {id}  { /*<Link to='/PaymentScreen'>Pay 49 rs</Link> */}

              </div>
            </div>

            <hr />


            <div className="row ms-1">
              <div className="col-3">
                <strong>Wallet</strong>
              </div>
              <div className="col-9">
                {wallet} Rs
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="">
                    <span className="editicon btn btn-primary btn-file">
                      <AttachmentIcon />
                      <input
                        type="file"
                        placeholder="Choose profile pic"
                        accept="image/*"
                        onChange={(e) => {
                          const reader = new FileReader();
                          reader.readAsDataURL(e.target.files[0]);
                          reader.onloadend = function (e) {
                            setPhoto(reader.result);
                          }.bind(this);
                          setUserDetails({
                            ...userDetails,
                            photo: e.target.files[0],
                          });
                        }}
                      />

                    </span>
                    
                  </div> */}
      <section>

      </section>

    </section>

  )
}

export default ProfilePage



