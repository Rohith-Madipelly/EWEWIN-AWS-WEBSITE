
import React, { useState, useEffect } from 'react';
import './nav.css';
import './ProfileScreens.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import './newButton.css'
import { UserGetProfileDetails, UpdatePasswordAPI, UpdateProfileAPI, transactionsAPI } from '../Services/ApiCalls'
import { onTop } from '../Services/commonService'

import TextField from '@mui/material/TextField';
import { BsCurrencyRupee } from "react-icons/bs";

import { FaCamera } from "react-icons/fa";


import { toast, ToastContainer, Zoom } from 'react-toastify';

import { setToken } from '../redux/actions/loginAction';
import { useDispatch } from "react-redux";


import PaymentScreen from './PaymentScreen/NewPaymentMethod';
import Loader from '../shared/Loader/Loader';


import FormControl from '@mui/material/FormControl';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Asset_Path } from '../Enviornment'
const ProfileUpdate = () => {



    // const [ProfileimageSrc, setImageSrc] = useState('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg');

    const [isLoading, setIsLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleClickShowConfirmPassword = () => setConfirmPassword((show) => !show);
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    }

    //Profile api
    const [id, setId] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone_Number, setPhone_Number] = useState("");
    const [Gender, setGender] = useState("");
    const [wallet, setWallet] = useState("");
    const [Address, setAddress] = useState("");

    const [Profile, setProfile] = useState(null);

    const [btnDisabledPay, setBtnDisabledPay] = useState(false)
    const [addwallet, setAddWallet] = useState();
    const [erroraddwallet, setErrorAddWallet] = useState(null);


    function walletPoints(e) {
        const input = e.target.value;
        const regex = /^[0-9]*$/;

        if (!regex.test(input)) {
            setErrorAddWallet("Only numbers are allowed");

            return;
        }
        if (input.startsWith('0')) {
            setErrorMessage("Amount cannot start with '00'");
            return;

        }

        if (input.length > 10) {
            setErrorAddWallet("You can enter only 10 digits");

            return;

        }
        else {
            setErrorAddWallet(null);

        }


        setAddWallet(e.target.value);
    }


    const [transactionData, setTransactionData] = useState([])

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
    const [errorUpdatedAddress, seterrorUpdatedAddress] = useState(null);

    const [UpdatedProfilePic, setUpdatedProfilePic] = useState(null);
    // const [selectedFile, setSelectedFile] = useState(null);




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
        onTop()
        userData()

    }, []);
    // hello 



    const handleFileChange = (e) => {
        setUpdatedProfilePic(e.target.files[0]);
        console.error("adsda>>222", e.target.files[0])
        console.error("adsda>>333", UpdatedProfilePic)

    };

    const handleFileChange2 = async (e) => {
        const file = e.target.files[0];
        setUpdatedProfilePic(e.target.files[0]);
        console.error("adsda>Pink>", UpdatedProfilePic)

        // UpdateProfile();
    };

    const handleUploadButtonClick = () => {
        document.getElementById('fileInput').click();
        // This will open the file manager to select the pic for input >>type >file
    };


    return (
        <div className='screenPage mt-0 vh-100'>
            <section className='container py-2 marginTopper-80 '>
                {isLoading && <Loader />}

                <h1 className='profileHeading'>Profile Page</h1>

                <div className='row'>
                    {/* col first-left */}
                    <div className='col-sm-12 col-md-3'>
                        <div className='card pt-4 pb-2'>
                            <div className='profileCard text-center'>
                                {Gender === "Female" ? <img
                                    src={Profile}
                                    alt='profilePic'
                                    className='rounded-circle img-fluid'
                                    style={{ maxWidth: '180px', width: '200px', maxHeight: '200px' }}
                                    onError={(e) => {
                                        e.target.src = 'src/assets/img/ProfileFemale.png';
                                    }}
                                /> : Gender === 'Male' ? <img
                                    src={Profile}   //MzFfMTY5ODQyODY2NzgxOF8zNjQ=.jpeg
                                    alt='profilePic'
                                    className='rounded-pill img-fluid'
                                    style={{ maxWidth: '180px', width: '200px', maxHeight: '200px' }}
                                    onError={(e) => {
                                        e.target.src = 'src/assets/img/ProfileMale.jpg';
                                    }}
                                /> : <div><img
                                    src={Name}
                                    alt='profilePic'
                                    className='rounded-circle img-fluid'
                                    style={{ maxWidth: '180px', width: '200px', maxHeight: '200px' }}
                                /></div>}


                                {/* <div className='' >
                                <img
                                    src={Profile}
                                    alt='profilePic'
                                    className='img-fluid profilePic'
                                    style={{ maxWidth: '180px', width: '200px', maxHeight: '200px' }}
                                />
                            </div> */}
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

                                                        <div>
                                                            <TextField
                                                                id="outlined-phone-input"
                                                                className='my-1 formobject text-white'
                                                                label="₹ Enter recharge amount"
                                                                placeholder="₹ Enter recharge amount"
                                                                value={addwallet}
                                                                onChange={(e) => { addwalletMethod(e) }}
                                                                error={erroraddwallet !== null}
                                                                helperText={erroraddwallet}
                                                                required size="small" />
                                                        </div>

                                                    </div>


                                                </div>
                                                <div class="modal-footer">


                                                    <PaymentScreen price2={addwallet} btnDisabledP={btnDisabledPay} />

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
                                            onChange={(e) => setUpdatedEmail(e.target.value.toLowerCase())}
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
                                <hr />
                                <div className="row ms-1">

                                    <div className="col-3">
                                        <strong>Address</strong>
                                    </div>
                                    <div className="col-9">
                                        {!editProfile ? <diV>{Address}</diV> : <TextField
                                            id="outlined-phone-input"
                                            className='my-1 w-75 formobject text-white'
                                            value={UpdatedAddress}
                                            onChange={(e) => setUpdatedAddress(e.target.value)}
                                            error={errorUpdatedAddress !== null}
                                            helperText={errorUpdatedAddress}
                                            required size="small" />}



                                    </div>
                                    {editProfile && <button type="button" style={{ marginLeft: "27vw", marginTop: "1vw", display: 'flex', float: 'left', justifyContent: "center" }} onClick={() => UpdateProfile()} class="btn btn-primary w-25">{!editProfile ? "" : <b>Save</b>}</button>}

                                </div>
                                <hr />

                                <div className="row ms-1">
                                    <div className="col-3">
                                        <strong>Change Password</strong>
                                    </div>
                                    <div className="col-9">
                                        <strong>

                                            {!PasswordBox && <div className='text-danger' onClick={openPasswordBox}>Click Here</div>}


                                            {PasswordBox && <div className=' p-3 card rounded-4'>
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-8 p-0">
                                                            <TextField
                                                                id="outlined-password-input"
                                                                className='my-1 formobject'

                                                                label="New Password"
                                                                placeholder="New Password"
                                                                // value={password}
                                                                onChange={(e) => setpassword(e.target.value)}
                                                                error={errorpassword !== null}
                                                                helperText={errorpassword}
                                                                required size="small"
                                                                type={showPassword ? 'text' : 'password'}
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
                                                                }} />

                                                            <TextField
                                                                id="outlined-password-input"
                                                                className='my-1 formobject'

                                                                label="Confirm Password"
                                                                placeholder="Confirm Password"
                                                                // value={confirmpassword}
                                                                onChange={(e) => setConfirmpassword(e.target.value)}
                                                                error={errorpassword !== null}
                                                                helperText={errorpassword}
                                                                required size="small"
                                                                type={showConfirmPassword ? 'text' : 'password'}

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
                                                                }} />
                                                        </div>

                                                        <div class="col-4 p-0">
                                                            <button onClick={openPasswordBox} className='w-100 bg-danger mt-3'>close</button>

                                                            <button onClick={updatedPassword} className='w-100 mt-2'>Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>





                                                </div>
                                                <div>    </div>

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

                </div> <ToastContainer></ToastContainer>

                <section>

                </section>

            </section>
        </div>

    )
}

export default ProfileUpdate

