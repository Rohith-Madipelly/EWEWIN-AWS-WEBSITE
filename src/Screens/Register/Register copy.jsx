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

    const handleRegister = () => {

        if (!userName) {
            setError("Please enter your full name.");
            return false;
          }
          else{
            setError("");
          }
      
          if (phone.length !== 10) {
            setError("Please enter 10 digit valid mobile number.");
            return false;
          }
          else{
            setError("");
          }
      
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError("Please enter valid email address.");
            return false;
          }
          else{
            setError("");
          }
      
          if (!gender) {
            setError("Please select gender.");
            return false;
          }
          else{
            setError("");
          }
      
      
          if (!terms) {
            setError("Please accept the terms & conditions.");
            return false;
          }
          else{
            setError("");
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
                    setsuccessMessage("User registered successfully. Please login.");
                    setTimeout(() => {
                        setsuccessMessage("");
                        navigate('/Login');
                    }, 2000);
                }

            })
            .catch((error) => {

                setErrorMessage('Error during Register:', error)
                console.error(error.data)
                if (error.response) {

                    if (error.response.status === 403) {
                        setErrorMessage('User is already registered. Please Login ...');
                    } else if (error.response.status === 402) {
                        setErrorMessage('Invalid password.');
                    } else if (error.response.status === 401) {
                        setErrorMessage('Invalid user data.');
                    } else if (error.response.status === 500) {
                        setErrorMessage('Internal server error');
                    } else {
                        setErrorMessage('An error occurred during registration.');
                    }
                } else if (error.request) {
                    setErrorMessage('No response received from the server.');
                } else {
                    setErrorMessage('Error setting up the request.');
                }


                setTimeout(() => {
                    setErrorMessage("")
                    navigate('/Register');
                }, 2000);
            });
    };






    return (
        <div className='Register'>
            <section className="vh-50 gradient-custom mt-5">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-cente">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-coustm text-dark    hover12" style={{ borderRadius: "1rem" }}>
                                <div className="card-body pt-5 text-center ">
                                 <form>
                                    <div className="t-4 pb-4 r">

                                        <h2 className="fw-bold mb-2 text-uppercase text-dark">Register</h2>
                                        <p className="mb-3 text-dark-50">Please Register your self</p>

                                        <div className="form-outline form-white mb-4">

                                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
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
                                                        
                                                        <TextField id="outlined-Name-input" className='my-2 formobject text-white' label="User Full Name" placeholder="User Full Name" value={userName} onChange={(e) => setUserName(e.target.value)} required />  <br />
                                                        <TextField id="outlined-email-input" className='my-2 formobject text-white' label="User Email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  <br />
                                                        <TextField id="outlined-phone-input" className='my-2 formobject text-white' label="Phone Number" placeholder="Phone Number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />  <br />

                                                        <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="User Password" placeholder="User Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                                                        <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="confirm Password" placeholder="confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required />
                                                        <TextField
                                                            id="outlined-select-currency"
                                                            select
                                                            label="Gender"
                                                            defaultValue="Male"
                                                            helperText="Please select your Gender"
                                                            className='w-75'
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

                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox value={terms} onChange={() => setTerms(!terms)} />
                                                                }
                                                                label="*I Accept Terms & Conditions of Ezewin"
                                                            />

                                                        </div>
                                                   
                                                    </div>

                                                </Box>
                                            </div>



                                        </div>





                                        <button className="btn btn-primary btn-lg px-5 text-dark" type="submit" onClick={handleRegister}>Register</button>
                                     
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
                                        <p className="mb-0">Have an account? <Link to="/Login" className='text-dark'>Login</Link>
                                        </p>
                                    </div>
                                    </form>
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