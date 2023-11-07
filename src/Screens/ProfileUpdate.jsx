
import React, { useState, useEffect } from 'react';
import './nav.css';
import './ProfileScreens.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import './newButton.css'
import { UserGetProfileDetails, UpdatePasswordAPI, UpdateProfileAPI, transactionsAPI } from '../Services2/ApiCalls'
import TextField from '@mui/material/TextField';
import { BsCurrencyRupee } from "react-icons/bs";



import { toast, ToastContainer, Zoom } from 'react-toastify';

import { setToken } from '../redux/actions/loginAction';
import { useDispatch } from "react-redux";
import { Button } from 'bootstrap';
import PaymentScreen from './PaymentScreen/NewPaymentMethod';
import Loader from '../shared/Loader/Loader';


const ProfileUpdate = () => {
  const [isLoading, setIsLoading] = useState(false);

    //Profile api
    const [id, setId] = useState("**********");
    const [Name, setName] = useState("**********");
    const [Email, setEmail] = useState("****************");
    const [Phone_Number, setPhone_Number] = useState("**********");
    const [Gender, setGender] = useState("******");
    const [wallet, setWallet] = useState("**");

    const [Address, setAddress] = useState("");
    const [Profile, setProfile] = useState(null);

    const [btnDisabledPay,setBtnDisabledPay]=useState(false)

    const [addwallet, setAddWallet] = useState();
    const [transactionData,setTransactionData]=useState([])

    const navigate = useNavigate();
    const dispatch = useDispatch();


    //to updated password
    const [editProfile, setEditProfile] = useState(false);
    //Updated Profile 

    const [UpdatedName, setUpdatedName] = useState();
    const [erroruserName, setErrorUserName] = useState(null)

    const [UpdatedEmail, setUpdatedEmail] = useState();
    const [erroremail, setErroremail] = useState(null)

    const [UpdatedPhone_Number, setUpdatedPhone_Number] = useState()
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(null)


    const [UpdatedGender, setUpdatedGender] = useState();
    const [errorgender, setErrorGender] = useState(null);

    const [UpdatedAddress, setUpdatedAddress] = useState();
    const [errorUpdatedAddress, seterrorUpdatedAddress] = useState();

    const [UpdatedProfilePic, setUpdatedProfilePic] = useState(null);
    // const [selectedFile, setSelectedFile] = useState(null);


    const handleFileChange = (e) => {
        setUpdatedProfilePic(e.target.files[0]);
    };

    useEffect(() => {
        setUpdatedName(Name)
        setUpdatedEmail(Email)
        setUpdatedPhone_Number(Phone_Number)
        setUpdatedGender(Gender)
        setUpdatedAddress(Address)
        setUpdatedProfilePic(null)


    }, [editProfile])

    const UpdateProfile = async () => {

        if (!UpdatedName) {
            setErrorUserName("Please enter your full name.*")
            // toast.error('Please enter your full name.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else {
            setErrorUserName(null);
        }
        if (/^[a-zA-Z]+$/.test(UpdatedName)) {
            event.preventDefault();
        }





        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(UpdatedEmail)) {
            setErroremail('Please enter valid email address.')
            // toast.error('Please enter valid email address.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else {
            setErroremail(null);
        }

        // console.error("Phone number",UpdatedPhone_Number.length < 10)
        if (UpdatedPhone_Number.length < 10) {
            setErrorPhoneNumber("Please enter 10 digits valid mobile number");
            // toast.error('Please enter 10 digits valid mobile number', { position: toast.POSITION.TOP_CENTER })

            return false;
        }
        else {
            setErrorPhoneNumber(null);
        }


        if (!UpdatedAddress) {
            setErrorUserName("Please enter your full name.*")
            // toast.error('Please enter your full name.', { position: toast.POSITION.TOP_CENTER })
            return false;
        }
        else {
            setErrorUserName(null);
        }





        setIsLoading(true)

        try {
            const res = await UpdateProfileAPI(UpdatedName, UpdatedEmail, UpdatedPhone_Number, UpdatedGender, UpdatedAddress, UpdatedProfilePic, token)
            setIsLoading(false)

            // toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER })
            setTimeout(() => {
                navigate('/Profileupdate');
                setEditProfile(false)
            }, 1000);

            setTimeout(() => {
                window.location.reload();
            }, 100);

        } catch (error) {
            setIsLoading(false)

            toast.error(res.data.message, { position: toast.POSITION.TOP_CENTER })

        }
    }


    //updated password 
    const [PasswordBox, setPasswordBox] = useState(false);

    const [password, setpassword] = useState(null)
    const [errorpassword, setErrorpassword] = useState(null)
    const [confirmpassword, setConfirmpassword] = useState(null)


    const handleLogout = () => {
        // Clear the token from localStorage
        // console.error("Clear the token from localStorage")
        dispatch(setToken(""));
        localStorage.removeItem('token');
    };

    //Allow only Alphabets
    function handleInputOnlyAlphabets(e) {
        const input = e.target.value;
        const regex = /^[a-zA-Z ]*$/;

        if (!regex.test(input)) {
            // toast.error('Only Alphabets are allowed' , { position: toast.POSITION.TOP_CENTER })   
            return;
        }
        setUpdatedName(e.target.value)
    }
    //Allow only Numbers
    function handleInputOnlyNumbers(e) {
        const input = e.target.value;
        const regex = /^[0-9]*$/;

        if (!regex.test(input)) {
            //   toast.error('Only numbers are allowed', { position: toast.POSITION.TOP_CENTER });
            return;
        }

        setUpdatedPhone_Number(e.target.value);
    }






    //Updated password Handle
    const updatedPassword = async () => {
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
        setIsLoading(true)

        try {
            const response = await UpdatePasswordAPI(password, confirmpassword, token);
        setIsLoading(false)

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
            setIsLoading(false)

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


    // TransactionsAPI
    









    //Profile API
    useEffect(() => {
        const userData = async () => {
        setIsLoading(true)

            try {
                // setIsLoading(true);   loading 
                // console.error("Sfdddf>>>>>>>")
                const res = await UserGetProfileDetails(token)
                const userData = res.data.user;
                console.error(userData)

                if (res) {
        setIsLoading(false)

                    setId(userData._id)
                    setName(userData.Name)
                    setEmail(userData.Email)
                    setPhone_Number(userData.Phone_Number)
                    setGender(userData.Gender)
                    setWallet(userData.wallet)
                    setProfile(userData.photo)

                    if (userData.address === undefined) {
                        setAddress("Pending ...")

                    }
                    else {
                        setAddress(userData.address)

                    }

                }
                else {

                }



            } catch (error) {
        setIsLoading(false)

                console.error("Error in api ", error)
            }
        }
        userData()
      
    }, []);

    return (
        <section className='container py-2 marginTopper-80'>
      {isLoading && <Loader />}

            <h1 className='profileHeading'>Profile Page</h1>

            <div className='row'>
                {/* col first-left */}
                <div className='col-sm-12 col-md-3'>
                    <div className='card pt-4 pb-2'>
                        <div className='profileCard text-center'>
                            {/* {Gender === "Female" ? <img
                                src="src/assets/img/ProfileFemale.png"
                                alt='profilePic'
                                className='rounded-circle img-fluid'
                                style={{ maxWidth: '100px',width:'100px',height:'150px' }}
                            /> : Gender === 'Male' ? <img
                                src={Profile}   //MzFfMTY5ODQyODY2NzgxOF8zNjQ=.jpeg
                                alt='profilePic'
                                className='rounded-pill img-fluid'
                                style={{ maxWidth: '150px',maxheight:'150px' }}
                            /> : <div><img
                                src={Name}
                                alt='profilePic'
                                className='rounded-circle img-fluid'
                                style={{ maxWidth: '100px',width:'90px' }}
                            /></div>}  profilePic */}

                            <div className='' >
                                <img
                                    src={Profile}
                                    alt='profilePic'
                                    className='img-fluid profilePic'
                                    style={{ maxWidth: '180px', width: '200px', maxHeight: '200px' }}
                                />
                            </div>
                            <div></div>

                            {!editProfile ? <diV className="d-flex justify-content-center"></diV> : <div className="d-flex flex-column mx-2"><input type="file" accept="image/*" className='mx-5 btn btn-primary' onChange={handleFileChange} />

                                <div className='my-1'></div>
                                <button onClick={UpdateProfile} className='w-75 mx-5'>Upload Profile Picture</button></div>}


                            <div className='data mt-2'>
                                <h4 className='my-1'><b>{Name}</b></h4>
                                {/* <p className='mb-1'>{id}</p> */}
                                <h5 className='mb-4 '><b>Wallet Amount : <BsCurrencyRupee size={22} />{wallet}</b></h5>

                                <button type="button" class="btn btn-secondary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Money</button>

                                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog ">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel"><b>Ezewin Wallet Balance</b></h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body d-flex justify-content-center me-3">

                                                <div> <h4><b>Balance</b></h4>
                                                    <div><h2><BsCurrencyRupee size={45} /><b  >{wallet}</b></h2></div>
                                                    {/* <div><TextField
                                                        id="outlined-Name-input"
                                                        value=""
                                                        error={erroruserName !== null}
                                                        helperText={erroruserName}
                                                        onChange={(e) => handleInputOnlyNumbersPay(e)}
                                                        required size="small" />
                                                        </div> */}
                                                        {/* <span>₹ Enter recharge amount</span> */}
                                                    <div><input type='number' placeholder='₹ Enter recharge amount' value={addwallet} onChange={(e) => setAddWallet(e.target.value)} /></div>

                                                </div>


                                            </div>
                                            <div class="modal-footer">
                                                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                                {/* <button type="button" class="btn btn-primary">Send message</button> */}
                                                
                                                <PaymentScreen price2={addwallet} btnDisabledP={btnDisabledPay}/>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* <PaymentScreen price2={90} /> */}


                                
                            </div>
                        </div>
                    </div>
                    <div className='card mt-2 p-3'>
                         {/* transactionsAPI  */}
                         <Link to="/Transactions"><b> Click Here to view Transactions  </b></Link>
                    </div>

                </div>
                <div className="col col-md-6 col-sm-12">
                    <div className='card'>
                        {/* <div className='float-left'>Edit Profile</div> */}
                        {/* {editProfile ? <div>edit now here </div> : <div>false</div>} */}
                        <div className='m-2'>

                            {/* <button type="button" class="btn btn-primary d-flex justify-content-end" onClick={() => setEditProfile(!editProfile)}>{!editProfile ? <b>Edit Profile</b> : <b>close</b>}</button> */}

                            <div className="row ms-1 mt-3">
                                <div className="col-3">
                                    <strong>Full Name</strong>
                                </div>
                                <div className="col-6">
                                    {!editProfile ? <diV>{Name}</diV> : <TextField
                                        id="outlined-Name-input"
                                        className=''
                                        // label="Name as per Aadhaar card"
                                        // placeholder="Name as per Aadhaar card"
                                        value={UpdatedName}
                                        error={erroruserName !== null}
                                        helperText={erroruserName}
                                        onChange={(e) => handleInputOnlyAlphabets(e)}
                                        required size="small" />}
                                </div>
                                <div className='col-3'>
                                    <button type="button" className={`btn ${editProfile ? 'btn-danger' : 'btn-primary'} d-flex justify-content-end`} onClick={() => setEditProfile(!editProfile)}>{!editProfile ? <b>Edit Profile</b> : <b>X</b>}</button>
                                </div>
                            </div>
                            <hr />
                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Email</strong>
                                </div>
                                <div className="col-9">
                                    {!editProfile ? <diV>{Email}</diV> : <TextField
                                        id="outlined-email-input"
                                        className='my-1 formobject text-white'
                                        label="Email" placeholder="Email"
                                        value={UpdatedEmail}
                                        onChange={(e) => setUpdatedEmail(e.target.value)}
                                        error={erroremail !== null}
                                        helperText={erroremail}
                                        required size="small" />}
                                </div>
                            </div>
                            <hr />
                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Gender</strong>
                                </div>
                                <div className="col-9">
                                    {!editProfile ? <diV>{Gender}</diV> : <TextField size="small"
                                        id="outlined-select-currency"
                                        select
                                        label="Gender"
                                        defaultValue=""
                                        // helperText="Please select your Gender"
                                        className='my-1'
                                        value={UpdatedGender}
                                        onChange={(e) => setUpdatedGender(e.target.value)}
                                        // error={errorgender !== null}
                                        // helperText={errorgender}
                                        required
                                    >

                                        <MenuItem value="Male">
                                            Male
                                        </MenuItem>
                                        <MenuItem value="Female">
                                            Female
                                        </MenuItem>


                                    </TextField>}
                                </div>
                            </div>
                            <hr />
                            <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Phone</strong>
                                </div>
                                <div className="col-9">
                                    {!editProfile ? <diV>{Phone_Number}</diV> : <TextField
                                        id="outlined-phone-input"
                                        className='my-1 formobject text-white'
                                        label="Mobile number"
                                        placeholder="Mobile number"
                                        value={UpdatedPhone_Number}
                                        onChange={(e) => handleInputOnlyNumbers(e)}
                                        error={errorPhoneNumber !== null}
                                        helperText={errorPhoneNumber}
                                        required size="small" />}
                                </div>
                            </div>



                            {/* <div className="row ms-1">
              <div className="col-3">
                  <strong>Address</strong>
              </div>
              <div className="col-9">
                  11-24-140,2nd Bank Colony, Shanthi Nagar,Warangal,Telangana,India. 
              </div>
            </div>
            <hr/> */} <hr />
                            <div className="row ms-1">

                                <div className="col-3">
                                    <strong>Address</strong>
                                </div>
                                <div className="col-9">
                                    {!editProfile ? <diV>{Address}</diV> : <TextField
                                        id="outlined-phone-input"
                                        className='my-1 w-75 formobject text-white'
                                        // label=" Address"
                                        // placeholder="Address"
                                        value={UpdatedAddress}
                                        onChange={(e) => setUpdatedAddress(e.target.value)}
                                        error={errorUpdatedAddress !== null}
                                        helperText={errorUpdatedAddress}
                                        required size="small" />}



                                </div>
                                {editProfile && <button type="button" style={{ marginLeft: "27vw", marginTop: "1vw", display: 'flex', float: 'left', justifyContent: "center" }} onClick={() => UpdateProfile()} class="btn btn-primary w-25">{!editProfile ? "" : <b>Save</b>}</button>}

                            </div>
                            {/* <button type="button" class="btn btn-primary w-25" onClick={() => setEditProfile(!editProfile)}>{!editProfile ? <b>Edit Profile</b> : <b>close</b>}</button> */}
                            <hr />
                            {/* <div className="row ms-1">
                                <div className="col-3">
                                    <strong>UserID</strong>
                                </div>
                                <div className="col-9">
                                    {id}  

                                </div>
                            </div>

                            <hr /> */}




                            {/* <div className="row ms-1">
                                <div className="col-3">
                                    <strong>Wallet</strong>
                                </div>
                                <div className="col-9">
                                    {wallet} Rs
                                </div>
                            </div>

                            <hr /> */}


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
                            <marquee width="50%" direction="right" height="30%">
                                EZEWIN PLAY WIN
                            </marquee>

                            <marquee width="50%" direction="right" height="30%">
                                EZEWIN PLAY WIN
                            </marquee>


                        </div>
                    </div>
                </div>

                {/* <div className="col col-md-3 col-sm-12">
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
                    </div>
                </div> */}
            </div> <ToastContainer></ToastContainer>

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


