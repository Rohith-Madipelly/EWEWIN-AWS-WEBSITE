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
import { ResetPasswordAPI } from '../../Services2/ApiCalls'
import { ReportGmailerrorred } from '@mui/icons-material';
import OtpInput from 'react-otp-input';


function ResetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newpassword, setNewPassword] = useState('Rohith@78');
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setsuccessMessage] = useState();

  const navigate = useNavigate();

  const handleForgetPassword = async (event) => {

    event.preventDefault();
    setErrorMessage(null);

    try {
      const res = await ResetPasswordAPI(email, otp, newpassword);
      if (res) {
        toast.success(res.data.msg, { position: toast.POSITION.TOP_CENTER })
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
      else{
        console.error("not res found")
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error(error.response.data.msg, { position: toast.POSITION.TOP_CENTER })
        }
      }
      else{
        console.error("not res found")
      }

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
                    <p className="text-dark-50 mb-3">Reset Password</p>
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
                            <TextField id="outlined-otp" className='my-2 formobject text-white' label="otp" placeholder="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />  <br />
                            <TextField 
                            id="outlined-password-input" 
                            className='my-2 formobject' 
                            type="password" 
                            label="UserPassword" 
                            placeholder="UserPassword" 
                            value={newpassword} 
                            onChange={(e) => setNewPassword(e.target.value)} 
                            // error={passwordError !== null}

                            // helperText={passwordError} 
                            required />
                            <br />
                          
                            {/* <OtpInput className='ms-2 formobject'
                              value={otp}
                              onChange={setOtp}
                              numInputs={4}
                              renderSeparator={<span>-</span>}
                              renderInput={(props) => <input {...props} />}

                              inputStyle={{
                                // border: "1px solid transparent",
                                // borderRadius: "8px",
                                width: "25px",
                                height: "25px",
                                fontSize: "12px",
                                color: "#000",
                                fontWeight: "400",
                                caretColor: "blue"
                              }}
                              // focusStyle={{
                              //   border: "1px solid #CFD3DB",
                              //   outline: "none"
                              // }}
                            /> */}

                          </div>
                        </Box>
                      </div>
                    </div>
                    <button className="btn btn-outline-dark btn-lg px-5" onClick={handleForgetPassword} type="submit">Submit</button>
                    <ToastContainer></ToastContainer>


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

export default ResetPassword