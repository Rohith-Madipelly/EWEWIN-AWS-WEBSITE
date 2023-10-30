import React, { useState } from 'react'
// UI Part
import './Register.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//Router 
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//Api calls
import axios from 'axios';
import { BASE_URL } from '../../Enviornment'
import { RegisterAPI } from "../../Services2/userApiCallings";



import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function Register() {
    //form fields
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [gender, setGender] = useState();


    const [terms, setTerms] = useState(false);
    const [error, setError] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [phone, setphone] = useState(false);


    //error display fields
    const [successMessage, setsuccessMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    const RegisterURL12 = `${BASE_URL}register`;


    function handleInputOnlyAlphabets(e) {
        const input = e.target.value;
        const regex = /^[a-zA-Z]*$/;
    
        if (!regex.test(input)) {
            // toast.error('Only Alphabets are allowed' , { position: toast.POSITION.TOP_CENTER })
          
          return;
        }
    
        setUserName(e.target.value)
      }

      function handleInputOnlyNumbers(e) {
        const input = e.target.value;
        const regex = /^[0-9]*$/;
      
        if (!regex.test(input)) {
        //   toast.error('Only numbers are allowed', { position: toast.POSITION.TOP_CENTER });
          return;
        }
      
        setPhoneNumber(e.target.value);
      }
      

    const handleRegister = () => {

        if (!userName) {
            // setErrorMessage("Please enter your full name.");
            toast.error('Please enter your full name.', { position: toast.POSITION.TOP_CENTER })


            return false;
        }
        else {
            setErrorMessage("");
        }
        if (/^[a-zA-Z]+$/.test(userName)) {
            event.preventDefault();
        }
        // if (!/^[A-Za-z]+$/.test(userName)) {
        //      toast.error('Numerical Values are not allowed in user name', { position: toast.POSITION.TOP_CENTER })


        //     return false;
        // }
        // else {
        //     setErrorMessage("");

        // }





        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            // setErrorMessage("Please enter valid email address.");
            toast.error('Please enter valid email address.', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorMessage("");
        }


        if (PhoneNumber.length !== 10) {
            // setErrorMessage("Please enter 10 digit valid mobile number");
            toast.error('Please enter 10 digit valid mobile number', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorMessage("");
        }

        if (confirmpassword !== password) {
            // setErrorMessage("Please enter Same Password");
            toast.error('Please enter Same Password.', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorMessage("");
        }

        if (!gender) {
            // setErrorMessage("Please select gender.");
            toast.error('Please select gender.', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorMessage("");
        }


        if (!terms) {
            // setErrorMessage("Please accept the terms & conditions.");
            toast.error('Please accept the terms & conditions.', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorMessage("");
        }

        setBtnDisabled(true);

















        const RegisterData = {
            Name: userName,
            Email: email,
            Phone_Number: PhoneNumber,
            Gender: gender,
            Password: password
            // ConfirmPassword: confirmpassword,
        };

        axios.post(RegisterURL12, RegisterData)

            //    const response= RegisterAPI(userName,email,PhoneNumber,gender,password)
            .then((response) => {

                if (response?.status === 200) {
                    // setsuccessMessage(response.message)
                    console.error(response)
                    // setsuccessMessage("User registered successfully. Please login.");
                    toast.success("User registered successfully. Please login.", { position: toast.POSITION.TOP_CENTER })

                    setTimeout(() => {
                        // setsuccessMessage("");
                        navigate('/Login');
                    }, 2000);
                }

            })
            .catch((error) => {

                setErrorMessage('Error during Register:', error)
                console.error(error.data)
                if (error.response) {

                    if (error.response.status === 409) {
                        toast.error('User is already registered. Please Login ...', { position: toast.POSITION.TOP_CENTER })

                        // setErrorMessage('User is already registered. Please Login ...');
                    } else if (error.response.status === 401) {
                        toast.error('Please Enter Password must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.', { position: toast.POSITION.TOP_CENTER })

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
            });
    };






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
                                                    <TextField id="outlined-Name-input" className='my-1 formobject text-white' label="Name as per Aadhaar card" placeholder="Name as per Aadhaar card" value={userName} onChange={(e) => handleInputOnlyAlphabets(e)} required size="small" /> <br />
                                                    <TextField id="outlined-email-input" className='my-1 formobject text-white' label="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required size="small" />  <br />
                                                    <TextField id="outlined-phone-input" className='my-1 formobject text-white' label="Mobile number" placeholder="Mobile number" value={PhoneNumber} onChange={(e) => handleInputOnlyNumbers(e)} required size="small" />  <br />

                                                    <TextField id="outlined-password-input" className='my-1 formobject' type="password" label="New Password" placeholder="New Password" value={password} onChange={(e) => setpassword(e.target.value)} required size="small" />
                                                    <TextField id="outlined-password-input" className='my-1 formobject' type="password" label="Confirm Password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required size="small" />
                                                    <TextField size="small" 
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Gender"
                                                        defaultValue=""
                                                        // helperText="Please select your Gender"
                                                        className='my-1'
                                                        value={gender}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        required
                                                    >

                                                        <MenuItem value="Male">
                                                            Male
                                                        </MenuItem>
                                                        <MenuItem value="Female">
                                                            Female
                                                        </MenuItem>
                                                        <MenuItem value="other">
                                                            Other
                                                        </MenuItem>

                                                    </TextField>



                                                    <div className="mb-2">

                                                        <FormControlLabel size="small" className='ms-3 me-4'
                                                            control={
                                                                <Checkbox value={terms} onChange={() => setTerms(!terms)} />
                                                            }
                                                            label="*I hereby confirm that the information provided above is accurate and true."
                                                        />

                                                    </div>
                                                </div>

                                            </Box>
                                        </div>



                                    </div>





                                    <button className="btn btn-success w-75 mb-2 py-2  text-white" type="submit" disabled={btnDisabled} onClick={handleRegister}><b>REGISTER</b></button>
                                    <ToastContainer></ToastContainer>

                                    {successMessage &&
                                        <div className='text-center bg-success'>
                                            {successMessage}
                                        </div>}
                                    {errorMessage &&
                                        <div className='text-center bg-danger'>
                                            {errorMessage}
                                        </div>}



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