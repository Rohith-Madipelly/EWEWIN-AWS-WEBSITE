import React, {useState,lazy, Suspense,useEffect } from 'react'
import './Login.css'



//UI Part 
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

//UI Part Material UI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Loader = lazy(() => import('../../shared/Loader/Loader'));

import { useDispatch,useSelector } from "react-redux";
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { UserLoginApi } from '../../Services/ApiCalls'
import { setToken } from '../../redux/actions/loginAction';







//firebase

import {messaging} from '../../firebase'
import { getMessaging, getToken } from "firebase/messaging";

function Login() {
const [FCMToken,setFCMToken]=useState()

  const requestPermission = async () => {

    // const permission = await Notification.requestPermission()
    // //permission > default denied granted
    // if (permission === "granted") {

      const newSw = await navigator.serviceWorker.register(
        'firebase-messaging-sw.jsx'
      );

      console.error("fewf")

      const FCMtoken =await getToken(messaging, { vapidKey:'BG69UuiKTGIsERQLTFFvAynES2hMU1uzuzAs-Nv3JHOJz1nbIwZYzGZn4bWToibeUf8a-B3HH8alS94OmvK1DPQ',serviceWorkerRegistration:newSw })
      
      console.error("Token Gen",FCMtoken)
      setFCMToken(FCMtoken)


    // }
    // else if (permission === "denied") {
    //   // requestPermission()
    //   alert("You denied for the notification")
    // }
  }




  useEffect(() => {
    requestPermission()
  }, [])
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

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };  
  


  const handleLogin = async (event) => {

    event.preventDefault();
    setErrorMessage(null);

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Please enter valid email address.*")
      return false;
    }
    else {
      setEmailError(null)
    }


    if (!password) {
      setPasswordError('Please enter your Password.')
      return false;
    }
    else {
      setPasswordError(null)
    }
    setIsLoading(true);

    try {
      const responsed = await UserLoginApi(email, password,FCMToken);
      if (responsed) {
        setIsLoading(false)

        // localStorage.setItem('token', responsed.data.Token);
        
        toast.success(responsed.data.message, { position: toast.POSITION.TOP_CENTER, autoClose: 800, })

        dispatch(setToken(responsed.data.Token));
        
        setEmailError(null)
        setPasswordError(null)


        setTimeout(() => {
          navigate('/Contests');
        }, 3000);
      }
      else {

      }

    } catch (error) {
      setIsLoading(false)
      if (error.response) {
        if (error.response.status === 401) {
          setPasswordError("You have Enter Invalid password")
          // toast.error('You have Entered Invalid password', { position: toast.POSITION.TOP_CENTER })
        } else if (error.response.status === 404) {
          setEmailError('User Not Found Please Register Your Self')
          setPasswordError("User Not Found Please Register Your Self")

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
    <div className='Login screenPage mt-0 vh-100'>
      {isLoading && <Loader />}
      <section className=" gradient-custom mt-5 hover12">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center">  
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className=' pt-5'>
                <div className="card bg-coustm text-dark" style={{ borderRadius: "0rem" }}>
                  <div className="card-body pt-5 text-center">
                    <div className="t-4 pb-2">
                      <h2 className="fw-bold mb-2 text-uppercase text-dark">EZEWIN</h2>
                      {/* <img src='src/assets/img/Logo4.png' alt=""  width={80}/> */}

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
                                value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                error={emailError !== null}
                                helperText={emailError}
                                required />
                              <br />

                              <TextField
                                id="outlined-password-input"
                                className='my-2 formobject'
                                type={showPassword ? 'text' : 'password'}
                                label="User Password"
                                placeholder="User Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={passwordError !== null}
                                helperText={passwordError}
                                required
                                // type={showPassword ? 'text' : 'password'}

                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showPassword ? <Visibility />:<VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />

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
        </div>
      </section>
    </div>
  )
}

export default Login