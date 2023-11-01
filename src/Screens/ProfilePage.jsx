
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

  const [ProfileData, setProfileData] = useState("");


  const token = localStorage.getItem('token');

  useEffect(() => {
    const userData = async () => {
      try {
      // setIsLoading(true);   loading 

        const res = await UserGetProfileDetails(token)
        const userData=res.data.user;
        
        setId(userData._id)
        setName(userData.Name)
        setEmail(userData.Email)
        setPhone_Number(userData.Phone_Number)
        setGender(userData.Gender)

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
                src='./src/assets/img/ProfileOther.jpg'
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
        <PaymentScreen profile={ProfileData} />
      </section>

    </section>

  )
}

export default ProfilePage


function PaymentScreen(profile) {

  const navigate = useNavigate();
  const [formError, setFormError] = useState("");
  const token = localStorage.getItem('token');
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };




  const payMoney = async () => {
    try {

      const res = await loadScript(RAZORPAY_URL);
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const Price = 49
      const token = localStorage.getItem('token');
      const order = await createOrder(Price, token);
      if (order?.data) {
        const options = {
          key: RAZORPAY_KEY,
          amount: 4900,
          currency: "INR",
          name: "Ezewin",
          description: `Wallet Transaction`,
          image: "",
          order_id: order.data.data.id,
          handler: function (response) {
            console.error("payment data>>>", response.razorpay_order_id)
            verifySignature(response);


          },
          // prefill: {
          //   name: profile.Name,
          //   email: profile.Email,
          //   contact: profile.Phone,
          // },
          prefill: {
            name: "dd",//profile.Name,
            email: "dd",//profile.Email,
            contact: "9951072005",//profile.Phone,
          },
          notes: {
            address: "dd", //profileData.address,
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);

        rzp1.on("payment.failed", function (response) {
          setFormError(
            `${response.error.reason}\n${response.error.description}`
          );

        });

        rzp1.open();
      }
    } catch (error) {

      if (error?.response?.status === 401) {

      } else {
        setFormError("Something went wrong.");
      }
    }
  };



  const verifySignature = async (paymentData) => {

    try {

      const res = await verifySignatureApi(paymentData, token);

      console.error(paymentData.razorpay_order_id)

      if (res?.data.message) {

        // alert("scdf",profile.Name)
        setTimeout(() => {
          alert("scdf")

          navigate('/PaymentDone');
          // alert("Successfull")
        }, 2000);
      }
    } catch (error) {
      console.error("error>>>", error)

      setFormError("Something went wrong.");
      setTimeout(() => {
        navigate('/PaymentDone');

      }, 2000);
    }
  };

  return (
    <div>

      <button className='button-75' style={{ marginLeft: "30vw", marginTop: "20px" }} onClick={() => payMoney()}>Pay Now 49</button>

    </div>
  )
}
