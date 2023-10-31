
import React,{useState, useEffect} from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../Enviornment'
import {  useLocation } from "react-router-dom";
import './newButton.css'
import { getProfileDetails2 } from '../Services2/ApiCalls'


import { RAZORPAY_KEY, RAZORPAY_URL } from "./../Enviornment";

import {verifySignatureApi, createOrder} from './../Services2/ApiCalls'


const ProfilePage = () => {
  const [id,setId]=useState("**********");
  const [Name,setName]=useState("**********");
  const [Email,setEmail]=useState("****************");
  const [Phone_Number,setPhone_Number]=useState("**********");
  const [Gender,setGender]=useState("******");

  const [ProfileData,setProfileData]=useState("");


  const token = localStorage.getItem('token');

  useEffect(() => {
    const getProfileDetails212 = async (token) => {
      // try {
      //   const res = await UserLoginApi(email,password);
      //   if (res) {
          
         
      //     localStorage.setItem('token', res.data.token);
  
  
      //     toast.success("success",{position:toast.POSITION.TOP_CENTER})
  
        
      //     dispatch(setToken(res.data.token));
  
      //     setTimeout(() => {
      //       navigate('/Profile');
      //     }, 1000);
      //   }
      //   else{
      //   toast.error(res.msg, { position: toast.POSITION.TOP_CENTER })
  
      //   }
  
  
      // } catch (error) {
      //   toast.error(error.response.data.msg, { position: toast.POSITION.TOP_CENTER })
      //   console.error('Error fetching user profile:', error);
      // }

      


      // try {
      //  await axios.get("http://admin.ezewin.analogueitsolutions.com/api/profile",{
      //     headers: { Authorization: "Bearer" + token },
      //   }).then((res) => {
      //       console.error(res)
      //     // setId(res.data._id)
      //     // setName(res.data.Name)
      //     // setEmail(res.data.Email)
      //     // setPhone_Number(res.data.Phone_Number)
      //     // setGender(res.data.Gender)
      //     // setProfileData(res.data)

      //     })

      // } catch (error) {
      //   console.error('Error fetching user profile:', error);
      // }
    };
    const token = localStorage.getItem('token');
    // getProfileDetails212(token);

    getProfileDetails2(token)
  }, []);

  return (
    <section className='container py-2 marginTopper-80'>
      <h1 style={{marginLeft:"21vw",color:"black"}}>Profile Page</h1>
     
      <div className='row'>
        {/* col first-left */}
        <div className='col-sm-12 col-md-3'>
          <div className='card'>
            <div className='profileCard text-center'>
              {Gender === "Female"?<img
                src='https://img.freepik.com/premium-vector/business-woman-cartoon-icon_24908-9389.jpg'
                alt='profilePic'
                className='rounded-circle img-fluid'
                style={{ maxWidth: '150px' }}
              />:Gender === 'male' ?<img
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
              alt='profilePic'
              className='rounded-circle img-fluid'
              style={{ maxWidth: '150px' }}
            />:<div><img
            src='https://img.freepik.com/free-vector/gender-identity-concept-illustrated_23-2148542542.jpg?w=740&t=st=1698393592~exp=1698394192~hmac=d846e4d1befd4f01cd12869ee021d324df2b7390b402f88cbd869161cd7447d4'
            alt='profilePic'
            className='rounded-circle img-fluid'
            style={{ maxWidth: '150px' }}
          /></div> }
              {/* <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                alt='profilePic'
                className='rounded-circle img-fluid'
                style={{ maxWidth: '150px' }}
              /> */}
              <div className='data'>
                <p className='my-1'>{Name}</p>
                <p className='mb-4'>{id}</p> {token}
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
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                   <strong>Email</strong>
              </div>
              <div className="col-9">
              {Email}
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                   <strong>Gender</strong>
              </div>
              <div className="col-9">
                  {Gender}
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                  <strong>Phone</strong>
              </div>
              <div className="col-9">
                  {Phone_Number}
              </div>
            </div>
       
            <hr/>
            
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
              <strong>OrderId</strong>
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
                    <PaymentScreen profile={ProfileData}/>
                  </section>

    </section>
    
  )
}

export default ProfilePage


function PaymentScreen(profile) {
  const navigate = useNavigate();
  const [formError,setFormError]=useState("");

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
const Price=49
    const order = await createOrder(Price);
    if (order?.data) {
      const options = {
        key: RAZORPAY_KEY,
        amount: order.data.data.amount,
        currency: "INR",
        name: "Ezewin",
        description: `Wallet Transaction`,
        image: "",
        order_id: order.data.data.id,
        handler: function (response) {

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
          contact: "dd",//profile.Phone,
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
        // alert(response.error.code);
        // alert(response.error.description);
        setFormError(
          `${response.error.reason}\n${response.error.description}`
        );
        // updateFormMsg();
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    }
  } catch (error) {
  
    if (error?.response?.status === 401) {
      // await dispatch(setToken(""));
      // history.push({
      //   pathname: "Login",
      //   state: { redirectUrl: "Wallet" },
      // });
    } else {
      setFormError("Something went wrong.");
      // updateFormMsg();
    }
  }
};



const verifySignature = async (paymentData) => {
    
  try {

    const res = await verifySignatureApi(paymentData);
   
    if (res?.data.message) {
    
    // alert("scdf",profile.Name)
      setTimeout(() => {
      
        navigate('/PaymentDone');
        // alert("Successfull")
      }, 2000);
    }
  } catch (error) {
    
    setFormError("Something went wrong.");
    setTimeout(() => {
      navigate('/PaymentDone');
     
    }, 2000);
  }
};

  return (
    <div>

            <button className='button-75' style={{marginLeft:"30vw",marginTop:"20px"}} onClick={() => payMoney()}>Pay Now 49</button>

    </div>
  )
}
