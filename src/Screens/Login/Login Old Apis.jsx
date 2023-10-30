import React, { useState } from 'react'
import './Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../Enviornment'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { setToken } from '../../redux/actions/loginAction';
import { useSelector } from "react-redux";


function Login() {
  const loginSelector = useSelector((state) => state.isLogin);
  if (loginSelector.isLogin) {
    dispatch(setToken(""));
    // history.push("/");
  } else {
    // history.push("Login");
  }



  const [loginInfo, setLoginInfo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setsuccessMessage] = useState();
  const [loginBtn, setloginBtn] = useState(false);



  const location = useLocation();
  const apiUrl1 = `${BASE_URL}/login`;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // e.preventDefault();
    const loginData = {
      Email: email,
      Password: password
    };


    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {

      toast.error('Please enter valid email address.', { position: toast.POSITION.TOP_CENTER })

      // setErrorMessage("Please enter valid email address.");
      return false;
    }
    else {
      setErrorMessage("");
    }


    if (!password) {
      toast.error('Please enter your Password.', { position: toast.POSITION.TOP_CENTER })

      // setErrorMessage("Please enter your Password.");
      return false;
    }
    else {
      setErrorMessage("");
    }





    axios.post(apiUrl1, loginData)
      .then((responsed) => {
        // alert(responsed.data.Token)
        // Set the token in localStorage
        localStorage.setItem('token', responsed.data.Token);


        toast.success(responsed.data.message,{position:toast.POSITION.TOP_CENTER})

        // setsuccessMessage(responsed.data.message);
        dispatch(setToken(responsed.data.Token));

        setTimeout(() => {
          navigate('/Profile');
        }, 1000);

      })
      .catch(error => {
        // Handle errors
        // setErrorMessage(error.message)
        // console.error('Error during login:', error.message);
        if (error.response) {

          if (error.response.status === 401) {
            toast.error('You have Entered Invalid password', { position: toast.POSITION.TOP_CENTER })
     
            // setErrorMessage('You have Entered Invalid password');
          } else if (error.response.status === 404) {
            toast.error('User Not Found.', { position: toast.POSITION.TOP_CENTER })

            // setErrorMessage('User Not Found');

          } else if (error.response.status === 500) {
            toast.error('Internal server error', { position: toast.POSITION.TOP_CENTER })

            // setErrorMessage('Internal server error');
          } else {
            toast.error('An error occurred during .', { position: toast.POSITION.TOP_CENTER })

            // setErrorMessage('An error occurred during registration.');
          }
        } else if (error.request) {
          toast.error('No response received from the server.', { position: toast.POSITION.TOP_CENTER })
          // setErrorMessage('No response received from the server');
        } else {
          toast.error('Error setting up the request.', { position: toast.POSITION.TOP_CENTER })

          // setErrorMessage('Error setting up the request.');
        }









      });

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

                          <div>
                            <TextField id="outlined-email-input" className='my-2 formobject text-white' label="User Email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  <br />
                            <div className='mt-1'>

                            </div>
                            <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="UserPassword" placeholder="UserPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />

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

                    {successMessage &&

                      <div className='text-center bg-success'>
                        {successMessage}

                      </div>}
                    {errorMessage &&
                      <div className='text-center bg-danger'>
                        {errorMessage}
                      </div>}


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