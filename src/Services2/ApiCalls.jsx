import axios from "axios";


import { GUEST_URL, BASE_URL1, BASE_URL } from '../Enviornment'


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

// User Login API Call 
export const UserLoginApi = async (email, password) => {
  const loginData = {
    Email: email,
    Password: password
  };
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

  return await axios.post(`${GUEST_URL}/login`, RegisterData, config);
};


export const getProfileDetails2 = async (token) => {
  const formData = new FormData();
  const hello = await axios.post("https://admin.ezewin.analogueitsolutions.com/api/profile", formData, {
    headers: { Authorization: "Bearer" + token },
    'Content-Type': 'multipart/form-data',
    Accept: '*/*',
  });

  console.error(">>>>>>>>", hello)
  return hello
};



export const UserGetProfileDetails = async (token) => {
  const formdata={

  }
  
  return await axios.post("https://admin.ezewin.analogueitsolutions.com/api/profile","" ,{
    headers: { Authorization:`Bearer ${token}`,
     'Content-Type': 'multipart/form-data',
    // 'Access-Control-Allow-Origin': '*',
    Accept: '*/*', },
  });
};
export const UserGetProfileDetails12 = async (token) => {
  const formdata={

  }
  
  return await axios.post("https://admin.ezewin.analogueitsolutions.com/api/profile","" ,{
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDBkNjY2MTYwM2ZmMDk1ZmM5YmE1MyIsImlhdCI6MTY5ODc1ODk0MCwiZXhwIjoxNjk4ODQ1MzQwfQ.FvFmpR8h8oBMV7XXHqP5_rDgPAJiWyU7KTjn5iFyy5c', 
      'Cookie': 'connect.sid=s%3Az0v69271xpUMw6XHeoY4ZhFMugP_qD-i.msgY99a73Wb5Kf9GOKq6neNVWlKHEWrDWCV9dUcpmHg', 
      ...data.getHeaders()
    },
  });
};

export const UserGetProfileDetails23 = async (token) => {

  return await axios.post(`${BASE_URL1}users/register`,"", {
    headers: { Authorization: "Bearer" + token },
  });
};








export const ForgetPasswordApi = async (email) => {
  const formData = new FormData();

  formData.append("email", email);

  return await axios.post("http://admin.ezewin.analogueitsolutions.com/guest-api/forget-password", formData);
};









// Done with Testing 
export const verifySignatureApi = async (paymentData) => {


  const formData = {
    razorpay_order_id: paymentData.razorpay_payment_id,
    razorpay_payment_id: paymentData.razorpay_payment_id,
    razorpay_signature: paymentData.razorpay_signature
  }

  return await axios.post('http://127.0.0.1:8001/api/payment/verifySignature', formData)

  // {
  //   headers: { Authorization: "Bearer " + token },
  // }
  // );
};


// Done with Testing 
export const createOrder = async (amount,token) => {

  const dataPay = {
    Price: amount
  };

  return await axios.post("http://admin.ezewin.analogueitsolutions.com/api/payment/createOrder", dataPay,
    {
      headers: {
        Authorization: "Bearer " + token,
        'Content-Type': 'application/json',
        Accept: '*/*',
      }
    }
  );
};
























export const registerApi = async (name, email, password) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);

  return await axios.post(`${BASE_URL}users/register`, formData);
};

export const login = async (email, password) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
}


export const getProfileDetails = async (token) => {
  const formData = new FormData();
  return await axios.post(`${BASE_URL}users/register`, formData, {
    headers: { Authorization: "Bearer" + token },
  });
};

export const updateProfileDetails = async (token, details) => {
  const formData = new FormData();
  formData.append("name", details.name);
  formData.append("email", details.email);
  // formData.append("phone", details.phone);
  // formData.append("gender", details.gender);
  // formData.append("address", details.address);
  // if (details.photo) {
  //     formData.append("photo", details.photo);
  // }

  return await axios.post(`${BASE_URL}users/profile`, formData, {
    headers: { Authorization: "Bearer" + token },
  });
};



export const setCurrentLocationApi = async (lat, lng) => {
  const formData = new FormData();
  formData.append("lat", lat);
  formData.append("lng", lng);

  return await axios.post(`${BASE_URL}set-current-location`, formData);
}


export const getNotifications = async (token) => {
  const formData = new FormData();
  return await axios.post(`${BASE_URL}get-notifications`, formData, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const AllProducts = async () => {
  return await axios.get(`${BASE_URL}users/register`)
}
