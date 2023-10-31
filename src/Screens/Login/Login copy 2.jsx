import React, { useState } from 'react'
import './Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import {UserLoginApi} from '../../Services2/ApiCalls'
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
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setsuccessMessage] = useState();
  const [loginBtn, setloginBtn] = useState(false);
  const [error,setError]=useState()
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
      setEmailError("");
    }


    if (!password) {
      // toast.error('Please enter your Password.', { position: toast.POSITION.TOP_CENTER })
      setPasswordError('Please enter your Password.')
      // setErrorMessage("Please enter your Password.");
      return false;
    }
    else {
      setErrorMessage("");
    }

    try {
      const res = await UserLoginApi(email,password);
      if (res) {
               console.error(res)
        localStorage.setItem('token', res.data.Token);

        toast.success("success",{position:toast.POSITION.TOP_CENTER})
     
        dispatch(setToken(res.data.Token));

        setTimeout(() => {
          navigate('/Profile');
        }, 1000);
      }
      else{
      // toast.error(res.msg, { position: toast.POSITION.TOP_CENTER })
      setPasswordError(res)
      setEmailError(res)
      }

    } catch (error) {
      // toast.error(error.response.data.msg, { position: toast.POSITION.TOP_CENTER })
      setError(error)
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

                          <div>
                            <TextField error helperText="Incorrect entry." id="outlined-email-input" className='my-2 formobject text-white' label="User Email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  <br />
                            {emailError&&<span className='text-danger'>{emailError}</span>}
                            <div className='mt-1'>

                            </div>
                            <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="UserPassword" placeholder="UserPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            {passwordError&&<span className='text-danger'>{passwordError}</span>}
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