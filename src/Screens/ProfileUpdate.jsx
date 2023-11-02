
import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './newButton.css'
import { UserGetProfileDetails, UpdatePasswordAPI } from '../Services2/ApiCalls'
import TextField from '@mui/material/TextField';

import { toast, ToastContainer, Zoom } from 'react-toastify';

import { setToken } from '../redux/actions/loginAction';
import { useDispatch } from "react-redux";
import { Button } from 'bootstrap';

const ProfileUpdate = () => {
    //Profile api
    const [id, setId] = useState("**********");
    const [Name, setName] = useState("**********");
    const [Email, setEmail] = useState("****************");
    const [Phone_Number, setPhone_Number] = useState("**********");
    const [Gender, setGender] = useState("******");
    const [wallet, setWallet] = useState("**");


    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Updated Profile 

    const [UpdatedName, setUpdatedName] = useState("**********");
    const [UpdatedEmail, setUpdatedEmail] = useState("****************");
    const [UpdatedPhone_Number, setUpdatedPhone_Number] = useState("**********");
    const [UpdatedGender, setUpdatedGender] = useState("******");
    const [UpdatedAddress, setUpdatedAddress] = useState("**");
    const [UpdatedProfilePic, setUpdatedProfilePic] = useState();


    const [editProfile, setEditProfile] = useState(false);




    //updated password 
    const [PasswordBox, setPasswordBox] = useState(false);

    const [password, setpassword] = useState("")
    const [errorpassword, setErrorpassword] = useState(null)
    const [confirmpassword, setConfirmpassword] = useState("")


    const handleLogout = () => {
        // Clear the token from localStorage
        // console.error("Clear the token from localStorage")
        dispatch(setToken(""));
        localStorage.removeItem('token');
    };

    //Updated Profile Handle
    const updatedPasswords = async () => {

        if (!password) {
            setErrorpassword("Please enter your password.*")
            // toast.error('Please enter your full name.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else {
            setErrorpassword(null);
        }
        if (!confirmpassword) {
            setErrorpassword("Please enter your confirmpassword.*")
            // toast.error('Please enter your confirmpassword.', { position: toast.POSITION.TOP_CENTER })
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

        try {
            const response = await UpdatePasswordAPI(password, confirmpassword, token);
            if (response) {
                if (response?.status === 200) {
                    toast.success("Password Updated Successfully. Please Login Again ", { position: toast.POSITION.TOP_CENTER })

                    setTimeout(() => {
                        navigate('/Login');
                        handleLogout()
                    }, 2000);
                }
            }
            else {
                toast.success("No Data Found in api", { position: toast.POSITION.TOP_CENTER })
            }
        } catch (error) {

            console.error(error.data)
            if (error.response) {

                if (error.response.status === 409) {
                    toast.error('409...', { position: toast.POSITION.TOP_CENTER })

                    // setErrorMessage('User is already registered. Please Login ...');
                } else if (error.response.status === 401) {
                    toast.error('Please Enter Password must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.', { position: toast.POSITION.TOP_CENTER })

                    // setErrorMessage('Please Enter Password must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.');
                } else if (error.response.status === 409) {
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
                {
                    setpassword("")
                }
                // setBtnDisabled(false);
                navigate('/Profile');
            }, 1000);

        }
    }

    //Updated password Handle
    const updatedPassword = async () => {

        if (!password) {
            setErrorpassword("Please enter your password.*")
            // toast.error('Please enter your full name.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else {
            setErrorpassword(null);
        }
        if (!confirmpassword) {
            setErrorpassword("Please enter your confirmpassword.*")
            // toast.error('Please enter your confirmpassword.', { position: toast.POSITION.TOP_CENTER })
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

        try {
            const response = await UpdatePasswordAPI(password, confirmpassword, token);
            if (response) {
                if (response?.status === 200) {
                    toast.success("Password Updated Successfully. Please Login Again ", { position: toast.POSITION.TOP_CENTER })

                    setTimeout(() => {
                        navigate('/Login');
                        handleLogout()
                    }, 2000);
                }
            }
            else {
                toast.success("No Data Found in api", { position: toast.POSITION.TOP_CENTER })
            }
        } catch (error) {

            console.error(error.data)
            if (error.response) {

                if (error.response.status === 409) {
                    toast.error('409...', { position: toast.POSITION.TOP_CENTER })

                    // setErrorMessage('User is already registered. Please Login ...');
                } else if (error.response.status === 401) {
                    toast.error('Please Enter Password must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.', { position: toast.POSITION.TOP_CENTER })

                    // setErrorMessage('Please Enter Password must be 5+ characters with at least 1 uppercase, 1 lowercase, and 1 digit.');
                } else if (error.response.status === 409) {
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
                {
                    setpassword("")
                }
                // setBtnDisabled(false);
                navigate('/Profile');
            }, 1000);

        }
    }



    const token = localStorage.getItem('token');


    const openPasswordBox = () => {
        setPasswordBox(!PasswordBox)
    }

    //Profile API
    useEffect(() => {
        const userData = async () => {
            try {
                // setIsLoading(true);   loading 

                const res = await UserGetProfileDetails(token)
                const userData = res.data.user;
                console.error(userData)


                setId(userData._id)
                setName(userData.Name)
                setEmail(userData.Email)
                setPhone_Number(userData.Phone_Number)
                setGender(userData.Gender)
                setWallet(userData.wallet)

            } catch (error) {
                console.error("Error in api ", error)
            }
        }
        userData()
    }, []);

    return (
        <section className='container py-2 marginTopper-80'>

            <h1 style={{ marginLeft: "21vw", color: "black" }}>Profile Page</h1>

            <div className='row'>
                {/* col first-left */}
                <div className='col-sm-12 col-md-3'>
                    <div className='card'>
                        <div className='profileCard text-center'>
                            {Gender === "Female" ? <img
                                src="src/assets/img/ProfileFemale.png"
                                alt='profilePic'
                                className='rounded-circle img-fluid'
                                style={{ maxWidth: '150px' }}
                            /> : Gender === 'Male' ? <img
                                src="src/assets/img/ProfileMale.jpg"
                                alt='profilePic'
                                className='rounded-circle img-fluid'
                                style={{ maxWidth: '150px' }}
                            /> : <div><img
                                src="src/assets/img/ProfileOthers.jpg"
                                alt='profilePic'
                                className='rounded-circle img-fluid'
                                style={{ maxWidth: '150px' }}
                            /></div>}

                            <div className='data'>
                                <p className='my-1'>{Name}</p>
                                <p className='mb-4'>{id}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col col-md-6 col-sm-12">
                    <div className='card'>
                        <div className='float-left'>Edit Profile</div>
                        <button type="button" class="btn btn-primary w-25" onClick={() => setEditProfile(!editProfile)}>{!editProfile ? <b>Edit Profile</b> : <b>close</b>}</button>
                        {editProfile ? <div>edit now here </div> : <div>false</div>}
                        <div className='m-4'>
                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Full Name</strong>
                                </div>
                                <div className="col-9">
                                    {Name}
                                </div>
                            </div>
                            <hr />
                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Email</strong>
                                </div>
                                <div className="col-9">
                                    {Email}
                                </div>
                            </div>
                            <hr />
                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Gender</strong>
                                </div>
                                <div className="col-9">
                                    {Gender}
                                </div>
                            </div>
                            <hr />
                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Phone</strong>
                                </div>
                                <div className="col-9">
                                    {Phone_Number}
                                </div>
                            </div>

                            <hr />

                            {/* <div className="row ms-1">
              <div className="col-3">
                  <strong>Address</strong>
              </div>
              <div className="col-9">
                  11-24-140,2nd Bank Colony, Shanthi Nagar,Warangal,Telangana,India. 
              </div>
            </div>
            <hr/> */}
                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>UserID</strong>
                                </div>
                                <div className="col-9">
                                    {id}  { /*<Link to='/PaymentScreen'>Pay 49 rs</Link> */}

                                </div>
                            </div>

                            <hr />


                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Wallet</strong>
                                </div>
                                <div className="col-9">
                                    {wallet} Rs
                                </div>
                            </div>

                            <hr />


                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Change Password</strong>
                                </div>
                                <div className="col-9">
                                    <strong>
                                        {/* <Link to='/PaymentScreen'>Pay 49 rs</Link> */}
                                        {!PasswordBox && <div className='text-danger' onClick={openPasswordBox}>Click Here</div>}


                                        {PasswordBox && <div className=' p-2 card rounded-4'>
                                            <div>

                                                <TextField
                                                    id="outlined-password-input"
                                                    className='my-1 formobject'
                                                    type="password"
                                                    label="New Password"
                                                    placeholder="New Password"
                                                    // value={password}
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
                                                    // value={confirmpassword}
                                                    onChange={(e) => setConfirmpassword(e.target.value)}
                                                    error={errorpassword !== null}
                                                    helperText={errorpassword}
                                                    required size="small" />
                                                <br />

                                                <button onClick={updatedPassword}>Submit</button>
                                                <button onClick={openPasswordBox}>close</button>
                                            </div>
                                        </div>}
                                    </strong>


                                </div>
                            </div>
                            <hr />





                        </div>
                    </div>
                </div>

                <div className="col col-md-3 col-sm-12">
                    <div className='card'>

                        <h5 className='ps-4 pt-4'><b>Your Contests</b></h5>

                        <div className='card bg-danger mx-3 mt-1 p-2'>
                            contests IDs
                        </div>
                        <div className='card bg-danger mx-3 mt-1 p-2'>
                            contests IDs
                        </div>
                        <div className='card bg-danger mx-3 my-1 p-2'>
                            contests IDs
                        </div>


                        <ToastContainer></ToastContainer>



                    </div>
                </div>
            </div>

            {/* <div className="">
                    <span className="editicon btn btn-primary btn-file">
                      <AttachmentIcon />
                      <input
                        type="file"
                        placeholder="Choose profile pic"
                        accept="image/*"
                        onChange={(e) => {
                          const reader = new FileReader();
                          reader.readAsDataURL(e.target.files[0]);
                          reader.onloadend = function (e) {
                            setPhoto(reader.result);
                          }.bind(this);
                          setUserDetails({
                            ...userDetails,
                            photo: e.target.files[0],
                          });
                        }}
                      />

                    </span>
                    
                  </div> */}
            <section>

            </section>

        </section>

    )
}

export default ProfileUpdate


