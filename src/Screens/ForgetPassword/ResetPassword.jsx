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
import { ResetPasswordAPI } from '../../Services/ApiCalls'
import { ReportGmailerrorred } from '@mui/icons-material';
import OtpInput from 'react-otp-input';
import Loader from '../../shared/Loader/Loader';



import FormControl from '@mui/material/FormControl';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function ResetPassword() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  const [otp, setOtp] = useState();
  const [errorOtp, setErrorOtp] = useState(null);

  const [newpassword, setNewPassword] = useState();
  const [errorpassword, setErrorPassword] = useState(null);


  const [newconfirmPassword, setNewConfirmPassword] = useState();
  const [errorconfirmPassword, setErrorConfirmPassword] = useState();



  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleClickShowConfirmPassword = () => setConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };


  const navigate = useNavigate();

  const handleForgetPassword = async (event) => {
console.error("username:>",email, otp, newpassword)
    event.preventDefault();
    // setErrorMessage(null);

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {

      setEmailError("Please enter valid email address.*")
      return false;
    }
    else {

      setEmailError(null)

    }

    if(!otp)
    {
      setErrorOtp("Please enter valid email address.*")
      return false;

    }
    else {

      setErrorOtp(null)

    }


    if (!newpassword) {
      // toast.error('Please enter your Password.', { position: toast.POSITION.TOP_CENTER })
      setErrorPassword('Please enter your Password.')
      // setErrorMessage("Please enter your Password.");
      return false;
    }
    else {
      setErrorPassword(null)
    }

    setIsLoading(true);
    try {
      const res = await ResetPasswordAPI(email, otp, newpassword);
      setIsLoading(false)

      if (res) {

        toast.success(res.data.msg, { position: toast.POSITION.TOP_CENTER })
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
      else {
        console.error("not res found")
      }
    } catch (error) {
      setIsLoading(false)

      if (error.response) {
        toast.error(error.response.data.msg, { position: toast.POSITION.TOP_CENTER })

        if (error.response.status === 400) {
          toast.error(error.response.data.msg, { position: toast.POSITION.TOP_CENTER })
        }
      }
      else {
        console.error("not res found")
      }

    }

  };



  return (
    <div className='Login py-5 screenPage vh-100 mt-1'>
      {isLoading && <Loader />}

      <section className="mt-5 gradient-custom hover12">
        <div className="container ">
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
                            <TextField
                              id="outlined-email-input"
                              className='my-2 formobject text-white'
                              label="User Email"
                              placeholder="User Email"
                              value={email}
                              error={emailError !== null}
                              helperText={emailError}
                              onChange={(e) => setEmail(e.target.value.toLowerCase())}
                              required />  <br />


                            <TextField
                              id="outlined-otp"
                              className='my-2 formobject text-white'
                              label="otp"
                              placeholder="otp"
                              value={otp}
                              error={errorOtp !== null}
                              helperText={errorOtp}
                              onChange={(e) => setOtp(e.target.value)}
                              required />  <br />


                            <TextField
                              id="outlined-password-input"
                              className='my-2 formobject'
                              type={showPassword ? 'text' : 'password'}
                              label="User Password"
                              placeholder="User Password"
                              value={newpassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              error={errorpassword !== null}
                              helperText={errorpassword}
                              required


                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />

                            <TextField
                              id="outlined-confirm-input"
                              className='my-2 formobject'
                              type={showConfirmPassword ? 'text' : 'password'}
                              label="Confirm Password"
                              placeholder="Confirm Password"
                              value={newconfirmPassword}
                              error={errorpassword !== null}
                              helperText={errorpassword}
                              onChange={(e) => setNewConfirmPassword(e.target.value)}
                              required
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle confirm password visibility"
                                      onClick={handleClickShowConfirmPassword}
                                      onMouseDown={handleMouseDownConfirmPassword}
                                      edge="end"
                                    >
                                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />






                          </div>
                        </Box>
                      </div>
                    </div>
                    <button className="btn btn-outline-success w-75 btn-lg px-5" onClick={handleForgetPassword} type="submit"><b>Submit</b></button>
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