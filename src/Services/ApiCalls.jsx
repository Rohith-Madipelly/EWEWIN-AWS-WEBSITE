import axios from "axios";


import { GUEST_URL, BASE_URL } from '../Enviornment'


const config = {
  // headers: {
  //   'Access-Control-Allow-Origin': '*', // This header may not be needed here
  //   // You can add other headers if necessary
  // }
  headers: {
    'Content-Type': 'multipart/form-data',
    // 'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
  },
};



export const HomeTimerApi = async () => {
  const formData = new FormData();
  return await axios.post(`${GUEST_URL}/first-upcoming`)
};

export const HomePriceMoneyListApi = async () => {
  const formData = new FormData();
  return await axios.post(`${GUEST_URL}/first-upcoming`,formData)
};


//upcoming_contest

export const upcoming_contestAPI = async (token) => {
  const formData = new FormData();
  return await axios.post(`${BASE_URL}/upcoming-contest`,formData ,{
    headers: { Authorization:"Bearer " + token}
  });
};


export const Mycoming_contestAPI = async (token) => {
  const formData = new FormData();
  return await axios.post(`${BASE_URL}/my-contests`,formData ,{
    headers: { Authorization:"Bearer " + token}
  });
};


export const SettingAPI = async () => {
  const formData = new FormData();
  return await axios.post(`${GUEST_URL}/setting`,formData)
};






// User Login API Call 
export const UserLoginApi = async (email, password,FCMToken) => {
  const loginData = {
    Email: email,
    Password: password,
    fcm_token:FCMToken
  };

  console.error("Login Data >>>>>>>>>>>>>>>>>>>",loginData)
  return await axios.post(`${GUEST_URL}/login`, loginData, config);
};

export const UserLoginApi12 = async (email, password) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  return await axios.post(`${GUEST_URL}/login`, formData);
  // return await axios.post("http://admin.ezewin.analogueitsolutions.com/guest-api/login", formData);
};

//User Register API Call
export const UserRegisterApi = async (userName, email, phone, password, gender) => {
  const RegisterData = {
    Name: userName,
    Email: email,
    Phone_Number: phone,
    Gender: gender,
    Password: password
  }

  return await axios.post(`${GUEST_URL}/register`, RegisterData, config);
};




// User Subscribe /newslater 
export const SubscribeAPI = async (email) => {
  const Data = {
    email: email,
  };
  return await axios.post(`https://admin.ezewin.analogueitsolutions.com/guest-api/newslater `, Data, config);
};

export const getProfileDetails2 = async (token) => {
  const formData = new FormData();
  const hello = await axios.post("https://admin.ezewin.analogueitsolutions.com/api/profile", formData, {
    headers: { Authorization: "Bearer" + token },
    'Content-Type': 'multipart/form-data',
    Accept: '*/*',
  });

  return hello
};


//Profile api 
export const UserGetProfileDetails = async (token) => {
  const formData = new FormData();

  return await axios.post(`${BASE_URL}/profile`,formData ,{
    headers: { Authorization:"Bearer " + token}
  });
};



// {{base_url}}/transactions
export const transactionsAPI = async (token) => {
  console.error("log from Transactions API ",token)
  const formData = new FormData();
 const res= await axios.post("https://admin.ezewin.analogueitsolutions.com/api/transactions",formData ,{
    headers: { Authorization:"Bearer " + token}
  });
  console.error("log form trans ",res)
  return res
};

//update Profile api
export const UpdateProfileAPI = async (UpdatedName,UpdatedEmail,UpdatedPhone_Number,UpdatedGender,UpdatedAddress,UpdatedProfilePic,token) => {
  const formData = new FormData();
  formData.append("name", UpdatedName);
  formData.append("email", UpdatedEmail);
  formData.append("phone", UpdatedPhone_Number);
  formData.append("gender", UpdatedGender);
  formData.append("address", UpdatedAddress);
  formData.append("profile_pic", UpdatedProfilePic);


  return await axios.post(`${BASE_URL}/update-profile`,formData ,{
    headers: { Authorization:"Bearer " + token}
  });
};

//update Password api
export const UpdatePasswordAPI = async (password, confirmpassword,token) => {
  const formData = new FormData();
  formData.append("old_password", password);
  formData.append("new_password", confirmpassword);

  return await axios.post(`${BASE_URL}/change-password`,formData ,{
    headers: { Authorization:"Bearer " + token}
  });
};


//update Join Contest Page
export const Join_ContestAPI = async (contest_id,token) => {
  const formData = new FormData();
  formData.append('contest_id', contest_id);

  return await axios.post(`${BASE_URL}/join-contest`,formData,{
    headers: { Authorization:"Bearer " + token}
  });
};









export const UserGetProfileDetails23 = async (token) => {

  return await axios.post(`${BASE_URL}/profile`,"", {
    headers: { Authorization: "Bearer " + token },
  });
};








export const ForgetPasswordApi = async (email) => {
  const formData = new FormData();

  formData.append("email", email);

  return await axios.post("https://admin.ezewin.analogueitsolutions.com/guest-api/forget-password", formData);
};


export const ResetPasswordAPI = async (email,otp,newPassword) => {
  const formData = new FormData();

  formData.append("email", email);
  formData.append("otp", otp);
  formData.append("password", newPassword);

  return await axios.post("https://admin.ezewin.analogueitsolutions.com/guest-api/reset-password", formData);
};



// Done with Testing  Create OrderAPI 
export const createOrder = async (amount,token) => {
  const Paydata = {
    Price: amount
  };

  return await axios.post('https://admin.ezewin.analogueitsolutions.com/api/create-razorpay-order', { Price: (amount)}, {
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        Authorization: "Bearer " +token
    },
})

};





// Done with Testing  verifySignature
export const verifySignatureApi = async (paymentData,token) => {
  const formData={
    "razorpay_order_id" : paymentData.razorpay_order_id,
    "razorpay_payment_id" : paymentData.razorpay_payment_id,
    "razorpay_signature" : paymentData.razorpay_signature
  }

  return await axios.post(`${BASE_URL}/verify-razorpay-signature`, formData,{
    headers: {
      Authorization: "Bearer " + token,
      'Content-Type': 'application/json',
      Accept: '*/*',
    }
  })
};




