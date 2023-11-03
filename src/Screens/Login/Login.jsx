import React, { useState } from 'react'
import './Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { UserLoginApi } from '../../Services2/ApiCalls'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { setToken } from '../../redux/actions/loginAction';
import { useSelector } from "react-redux";


function Login() {
  // const loginSelector = useSelector((state) => state.isLogin);
  // if (loginSelector.isLogin) {
  //   dispatch(setToken(""));
  //   // history.push("/");
  // } else {
  //   // history.push("Login");
  // }

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);


  const [errorMessage, setErrorMessage] = useState();

  const [loginBtn, setloginBtn] = useState(false);


  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      // toast.error('Please enter valid email address.', { position: toast.POSITION.TOP_CENTER })
      setEmailError("Please enter valid email address.*")
      // setErrorMessage("Please enter valid email address.");
      return false;
    }
    else {
      setEmailError(null)
    }


    if (!password) {
      // toast.error('Please enter your Password.', { position: toast.POSITION.TOP_CENTER })
      setPasswordError('Please enter your Password.')
      // setErrorMessage("Please enter your Password.");
      return false;
    }
    else {
      setPasswordError(null)
    }

    try {
      const responsed = await UserLoginApi(email, password);
      if (responsed) {
        localStorage.setItem('token', responsed.data.Token);
        toast.success(responsed.data.message, { position: toast.POSITION.TOP_CENTER })
        dispatch(setToken(responsed.data.Token));
      console.error("login Res",responsed)
        setEmailError(null)
        setPasswordError(null)

        setTimeout(() => {
          navigate('/Profileupdate');
        }, 1000);
      }
      else {

      }

    } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            setPasswordError("You have Enter Invalid password")
            // toast.error('You have Entered Invalid password', { position: toast.POSITION.TOP_CENTER })
          } else if (error.response.status === 404) {
            toast.error('User Not Found', { position: toast.POSITION.TOP_CENTER })
          } else if (error.response.status === 500) {
            toast.error('Internal server error', { position: toast.POSITION.TOP_CENTER })
          } else {
            toast.error('An error occurred during .', { position: toast.POSITION.TOP_CENTER })
          }
        } else if (error.request) {
          toast.error('No response received from the server.', { position: toast.POSITION.TOP_CENTER })
        } else {
          toast.error('Error setting up the request.', { position: toast.POSITION.TOP_CENTER })
        }
    }
  };


  return (
    <div className='Login'>
      <section className="vh-50 gradient-custom mt-5 hover12">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-coustm text-dark" style={{ borderRadius: "0rem" }}>
                <div className="card-body pt-5 text-center">
                  <div className="t-4 pb-2">
                    <h2 className="fw-bold mb-2 text-uppercase text-dark">EZEWIN</h2>
                    <p className="text-dark-50 mb-3">Login to your account</p>
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

                          <div >
                            <TextField 
                            id="outlined-email-input" 
                            className='my-2 formobject text-white' 
                            label="User Email" placeholder="User Email" 
                            value={email} onChange={(e) => setEmail(e.target.value)} 
                            error={emailError !== null}
                            helperText={emailError} 
                            required  />  
                            <br />

                            {emailError && <span className='text-danger'>{emailError}</span>}
                          

                            <TextField 
                            id="outlined-password-input" 
                            className='my-2 formobject' 
                            type="password" 
                            label="UserPassword" 
                            placeholder="UserPassword" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            error={passwordError !== null}

                            helperText={passwordError} 
                            required />
                            <br />


                            {passwordError && <span className='text-danger'>{passwordError}</span>}
                          </div>

                        </Box>
                      </div>



                    </div>



                    {/* disabled={loginBtn} */}

                    <button className="btn btn-primary w-75 mb-2 " disabled={loginBtn} onClick={handleLogin} type="submit"><b>LOGIN</b></button>
                    <p className="small mb-3 pb-lg-2">


                      <Link to="/Forget_Password" className='text-primary'>Forgot password?</Link>
                    </p>
                    <ToastContainer></ToastContainer>




                    <p className="mb-0 ">Don't have an account? <Link to="/Register" className='text-danger'>Register</Link>
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

export default Login