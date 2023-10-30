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
import {ForgetPasswordApi} from '../../Services2/ApiCalls'

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setsuccessMessage] = useState();

  const handleForgetPassword = async (event) => {

    event.preventDefault();
    setErrorMessage(null);

    try {
      const res = await ForgetPasswordApi(email);
      if (res) {
        toast.success(responsed.data.message, { position: toast.POSITION.TOP_CENTER })
      }
    } catch (error) {
      toast.error("Fail", { position: toast.POSITION.TOP_CENTER })
    }


  };

  return (
    <div className='Login py-5'>
      <section className="vh-50 gradient-custom mt-5 hover12">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-coustm text-dark" style={{ borderRadius: "1rem" }}>
                <div className="card-body pt-5 text-center">
                  <div className="t-4 pb-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-dark">EZEWIN</h2>
                    <p className="text-dark-50 mb-3">ForgetPassword ?</p>
                    <div className="form-outline form-white mb-4">
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
                            <TextField id="outlined-email-input" className='my-2 formobject text-white' label="User Email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  <br />
                            <div className='mt-3'>

                            </div>
                            {/* <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="UserPassword" placeholder="UserPassword" value={password} onChange={(e) => setPassword(e.target.value)} required /> */}

                          </div>

                        </Box>
                      </div>



                    </div>



                    {/* <p className="small mb-3 pb-lg-2"> */}
                    {/* <Link to="/Forget_Password" className='text-dark'>Forgot password?</Link> */}
                    {/* </p> */}

                    <button className="btn btn-outline-dark btn-lg px-5" onClick={handleForgetPassword} type="submit">Submit</button>
                    <ToastContainer></ToastContainer>

                    {successMessage &&

                      <div className='text-center bg-success'>
                        {successMessage}

                      </div>}
                    {errorMessage &&
                      <div className='text-center bg-danger'>
                        {errorMessage}
                      </div>}




                  </div>

                  <div>
                    <p className="mb-0 ">Don't have an account? <Link to="/Register" className='text-dark'>Register</Link>
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