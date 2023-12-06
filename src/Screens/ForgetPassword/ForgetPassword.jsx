import React, { useState } from 'react'
import './ForgetPassword.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { setToken } from '../../redux/actions/loginAction';
import { useSelector } from "react-redux";
import {ForgetPasswordApi} from '../../Services/ApiCalls'
import { ReportGmailerrorred } from '@mui/icons-material';
import Loader from '../../shared/Loader/Loader';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [erroremail, setErroremail] = useState(null)

  const [errorMessage, setErrorMessage] = useState();

  const [successMessage, setsuccessMessage] = useState();

  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();

  const handleForgetPassword = async (event) => {
    



    event.preventDefault();
    setErrorMessage(null);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErroremail('Please enter valid email address.')
      // toast.error('Please enter valid email address.', { position: toast.POSITION.TOP_CENTER })
      return false;
  }
  else {
      setErroremail(null);
  }

  setIsLoading(true)

    try {
      const res = await ForgetPasswordApi(email);
      setIsLoading(false)

      if (res) {
        toast.success(res.data.msg, { position: toast.POSITION.TOP_CENTER })
        setIsLoading(false)
        setTimeout(() => {
          navigate('/ResetPassword');
        }, 1000);
      }
    } catch (error) {
      setIsLoading(false)

      setErroremail("We can not find your email")
      toast.error("We can not find your email", { position: toast.POSITION.TOP_CENTER })
    }

  };

  return (
    <div className='Login py-5 screenPage vh-100 mt-0'>
      {isLoading && <Loader />}

      <section className="vh-50 gradient-custom mt-5 hover12">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-coustm text-dark" style={{ borderRadius: "1rem" }}>
                <div className="card-body pt-5 text-center">
                  <div className="t-4 pb-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-dark">EZEWIN</h2>
                    <p className="text-dark-50 mb-1">Forget Password ?</p>

                    <div className="form-outline form-white my-3">
                      <div className="mb-2">
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "90%" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <div>
                            {/* <TextField id="outlined-email-input" className='my-2 formobject text-white' label="User Email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  <br /> */}
                            <TextField
                                                        id="outlined-email-input"
                                                        className='my-2 formobject text-white'
                                                        label="User Email" placeholder="User Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                                        error={erroremail !== null}
                                                        helperText={erroremail}
                                                        required />  <br />
                          </div>
                        </Box>
                    <span style={{ fontSize:"15px",color:"red"}}>Enter your email and we will send you a link to reset your password *</span>

                      </div>
                    </div>
                    <button className="btn btn-outline-success  w-75 btn-lg px-5" onClick={handleForgetPassword} type="submit"><b>Submit</b></button>
                    <ToastContainer></ToastContainer>

                    
                




                  </div>

                  <div>
                    <p className="mb-0 "> <Link to="/Login" className='text-primary'>Back to Login</Link>
                    {/* <p className="mb-0 ">Don't have an account? <Link to="/Register" className='text-dark'>Register</Link> */}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForgetPassword