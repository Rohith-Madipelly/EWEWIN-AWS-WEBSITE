import React, { useState } from 'react'
// UI Part
import './Register.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, Typography } from "@mui/material";

//Router 
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//Api calls
import axios from 'axios';
import { BASE_URL } from '../../Enviornment'
import { RegisterAPI } from "../../Services2/userApiCallings";

import { UserRegisterApi } from '../../Services2/ApiCalls'

import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function Register() {
    //form fields
    const [userName, setUserName] = useState("")
    const [erroruserName, setErrorUserName] = useState(null)

    const [email, setEmail] = useState("")
    const [erroremail, setErroremail] = useState(null)

    const [PhoneNumber, setPhoneNumber] = useState("")
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(null)


    const [password, setpassword] = useState("")
    const [errorpassword, setErrorpassword] = useState(null)

    const [confirmpassword, setConfirmpassword] = useState("")

    const [gender, setGender] = useState();
    const [errorgender, setErrorGender] = useState(null);


    const [terms, setTerms] = useState(false);
    const [errorterms, setErrorTerms] = useState(null);


    const [btnDisabled, setBtnDisabled] = useState(false);



    //error display fields

    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    const RegisterURL12 = `${BASE_URL}register`;


    function handleInputOnlyAlphabets(e) {
        const input = e.target.value;
        const regex = /^[a-zA-Z ]*$/;

        if (!regex.test(input)) {
            setErrorUserName("Only Alphabets are allowed")

            // toast.error('Only Alphabets are allowed' , { position: toast.POSITION.TOP_CENTER })   
            return;
        }
        setUserName(e.target.value)
    }

    function handleInputOnlyNumbers(e) {
        const input = e.target.value;
        const regex = /^[0-9]*$/;

        if (!regex.test(input)) {
            setErrorPhoneNumber("Only numbers are allowed");
            //   toast.error('Only numbers are allowed', { position: toast.POSITION.TOP_CENTER });
            return;
        }
        if (input.length > 10) {
            setErrorPhoneNumber("you can enter only 10 digits");
            
            return;
        }

        setPhoneNumber(e.target.value);
    }


    const handleRegister = async (event) => {

        event.preventDefault();
        setErrorMessage(null);

        if (!userName) {
            setErrorUserName("Please enter your full name.*")
            // toast.error('Please enter your full name.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else {
            setErrorUserName(null);
        }
        if (/^[a-zA-Z]+$/.test(userName)) {
            event.preventDefault();
        }





        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setErroremail('Please enter valid email address.')
            // toast.error('Please enter valid email address.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else {
            setErroremail(null);
        }


        if (PhoneNumber.length !== 10) {
            setErrorPhoneNumber("Please enter 10 digits valid mobile number");
            // toast.error('Please enter 10 digits valid mobile number', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorPhoneNumber(null);
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
        if (!password) {
            setErrorpassword("Please enter your password.*")
            // toast.error('Please enter your full name.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else if (!password.match(passwordRegex)) {
            setErrorpassword("Please enter a valid password. It must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.");
            // Display an error message using a toast or other method here.
            return false;
        }
        else {
            setErrorpassword(null);
        }
        if (!confirmpassword) {
            setErrorpassword("Please enter your confirmpassword.*")
            // toast.error('Please enter your full name.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else {
            setErrorpassword(null);
        }
        if (confirmpassword !== password) {
            setErrorpassword("Please enter Same Password.")
            // toast.error('Please enter Same Password.', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorpassword(null);
        }

        if (gender !== "male" && gender !== "female") {
            setErrorGender("Please select gender");
            // toast.error('Please select gender.', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorGender(null);
        }


        if (terms==false) {
            setErrorTerms("Please accept the terms & conditions.")
            // toast.error('Please accept the terms & conditions.', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorTerms(null);
        }

        setBtnDisabled(true);


        try {
            const response = await UserRegisterApi(userName, email, PhoneNumber, password, gender);
            if (response) {
                if (response?.status === 200) {
                    console.error("response Data", response)
                    // toast.success("User registered successfully. Please login.", { position: toast.POSITION.TOP_CENTER })
                    setTimeout(() => {
                        navigate('/Login');
                    }, 2000);
                }
            }
            else {
                // toast.error("No response Found", { position: toast.POSITION.TOP_CENTER })
            }
        } catch (error) {
            setErrorMessage('Error during Register:', error)
                console.error(error.data)
                if (error.response) {

                    if (error.response.status === 409) {
                        toast.error('User is already registered. Please Login ...', { position: toast.POSITION.TOP_CENTER })

                        // setErrorMessage('User is already registered. Please Login ...');
                    } else if (error.response.status === 401) {
                        toast.error('Please Enter Password must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.', { position: toast.POSITION.TOP_CENTER })

                        // setErrorMessage('Please Enter Password must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.');
                    }else if (error.response.status === 409) {
                        toast.error('User Exisited ', { position: toast.POSITION.TOP_CENTER })

                        // setErrorMessage('Please Enter Password must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.');
                    } else if (error.response.status === 404) {
                        toast.error('Invalid user data.', { position: toast.POSITION.TOP_CENTER })

                        // setErrorMessage('Invalid user data.');
                    } else if (error.response.status === 500) {
                        toast.error('Internal server error', { position: toast.POSITION.TOP_CENTER })

                        // setErrorMessage('Internal server error');
                    } else {
                        toast.error('An error occurred during registration.', { position: toast.POSITION.TOP_CENTER })

                        // setErrorMessage('An error occurred during registration.');
                    }
                } else if (error.request) {
                    toast.error('No response received from the server.', { position: toast.POSITION.TOP_CENTER })

                    // setErrorMessage('No response received from the server.');
                } else {
                    toast.error('Error setting up the request.', { position: toast.POSITION.TOP_CENTER })

                    // setErrorMessage('Error setting up the request.');
                }


                setTimeout(() => {
                    setErrorMessage("")
                    setUserName("")
                    {
                        setEmail("")
                        setPhoneNumber("")
                        setpassword("")
                        setConfirmpassword("")
                        setGender("")
                        setTerms("")
                    }
                    setBtnDisabled(false);
                    navigate('/Register');
                }, 1000);
            
        }
    }





    return (
        <div className='Register py-3'>
            <section className="">


                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-coustm text-dark" style={{ borderRadius: "0rem" }}>
                                <div className="card-body text-center ">




                                    <h2 className="fw-bold mb-2 text-uppercase text-dark text-center">EZEWIN</h2>
                                    <p className="mb-2 text-dark-50">Please Register Yourself</p>

                                    <div className="form-outline form-white mb-4 px-2">


                                        <div className="">
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
                                                        id="outlined-Name-input"
                                                        className='my-1 formobject text-white'
                                                        label="Name as per Aadhaar card"
                                                        placeholder="Name as per Aadhaar card"
                                                        value={userName}
                                                        error={erroruserName !== null}
                                                        helperText={erroruserName}
                                                        // onClick={}
                                                        onChange={(e) => handleInputOnlyAlphabets(e)}
                                                        required size="small" /> <br />


                                                    <TextField
                                                        id="outlined-email-input"
                                                        className='my-1 formobject text-white'
                                                        label="Email" placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        error={erroremail !== null}
                                                        helperText={erroremail}
                                                        required size="small" />  <br />

                                                    <TextField
                                                        id="outlined-phone-input"
                                                        className='my-1 formobject text-white'
                                                        label="Mobile number"
                                                        placeholder="Mobile number"
                                                        value={PhoneNumber}
                                                        onChange={(e) => handleInputOnlyNumbers(e)}
                                                        error={errorPhoneNumber !== null}
                                                        helperText={errorPhoneNumber}
                                                        required size="small" />  <br />

                                                    <TextField
                                                        id="outlined-password-input"
                                                        className='my-1 formobject'
                                                        type="password"
                                                        label="New Password"
                                                        placeholder="New Password"
                                                        value={password}
                                                        onChange={(e) => setpassword(e.target.value)}
                                                        error={errorpassword !== null}
                                                        helperText={errorpassword}
                                                        required size="small" />

                                                    <TextField
                                                        id="outlined-password-input"
                                                        className='my-1 formobject'
                                                        type="password"
                                                        label="Confirm Password"
                                                        placeholder="Confirm Password"
                                                        value={confirmpassword}
                                                        onChange={(e) => setConfirmpassword(e.target.value)}
                                                        error={errorpassword !== null}
                                                        helperText={errorpassword}
                                                        required size="small" />

                                                    <TextField size="small"
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Gender"
                                                        defaultValue=""
                                                        // helperText="Please select your Gender"
                                                        className='my-1'
                                                        value={gender}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        error={errorgender !== null}
                                                        helperText={errorgender}
                                                        required
                                                    >

                                                        <MenuItem value="Male">
                                                            Male
                                                        </MenuItem>
                                                        <MenuItem value="Female">
                                                            Female
                                                        </MenuItem>
                                                      

                                                    </TextField>



                                                    <div className="mb-2 text-start" >

                                                        <FormControlLabel size="small" className='ms-3 me-4'
                                                            control={
                                                                <Checkbox value={terms} onChange={() => setTerms(!terms)} />
                                                            }
                                                            // error={errorterms !== null}

                                                            label="*I hereby confirm that the information provided above is accurate and true."
                                                        />
                                                        {errorterms && (
                                                            <Typography variant="body2" color="error" className='ms-5'>
                                                                You must accept the terms to proceed.
                                                            </Typography>
                                                        )}

                                                    </div>
                                                </div>

                                            </Box>
                                        </div>



                                    </div>





                                    <button className="btn btn-success w-75 mb-2 py-2  text-white" type="submit" disabled={btnDisabled} onClick={handleRegister}><b>REGISTER</b></button>
                                    <ToastContainer></ToastContainer>




                                    <p className="mb-0">Have an account? <Link to="/Login" className='text-danger'>Login</Link>
                                    </p>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Register