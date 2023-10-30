import axios from "axios";


import { GUEST_URL,BASE_URL1,BASE_URL } from '../Enviornment'



export const UserLoginApi = async (email,password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);


    
    return await axios.post(`${GUEST_URL}/login`, formData);
    // return await axios.post("http://admin.ezewin.analogueitsolutions.com/guest-api/login", formData);
  };

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*', // This header may not be needed here
      // You can add other headers if necessary
    }
  };

  export const UserRegisterApi = async (name,email,phone,password,gender) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("password", password);
    console.error(formData)
    
    // return await axios.post(`${GUEST_URL}/register`, formData);
    return await axios.post("http://admin.ezewin.analogueitsolutions.com/guest-api/register",formData);
  };

  
  export const getProfileDetails2 = async (token) => {
    const formData = new FormData();
    return await axios.post("http://admin.ezewin.analogueitsolutions.com/api", formData, {
        headers: { Authorization: "Bearer" + token },
    });
};











export const ForgetPasswordApi = async (email) => {
    const formData = new FormData();

    formData.append("email", email);
    console.log("csmhvjdfh",email)

    return await axios.post("http://localhost:8001/guest-api/forget-password", formData);
  };









// Done with Testing 
export const verifySignatureApi = async (paymentData) => {
    // alert(paymentData.razorpay_payment_id)
    // alert(paymentData.razorpay_order_id)
    // alert(paymentData.razorpay_signature)
    // const paym=paymentData
    // const formData = new FormData();
    // formData.append("razorpay_order_id", paymentData.razorpay_payment_id);
    // formData.append("razorpay_payment_id", paymentData.razorpay_payment_id);
    // formData.append("razorpay_signature", paymentData.razorpay_signature);

    const formData={
        razorpay_order_id:paymentData.razorpay_payment_id,
        razorpay_payment_id: paymentData.razorpay_payment_id,
        razorpay_signature: paymentData.razorpay_signature
    }

    return await axios.post('http://127.0.0.1:8001/api/payment/verifySignature',formData)
// console.log("api result",result)
      // {
      //   headers: { Authorization: "Bearer " + token },
      // }
    // );
  };


  // Done with Testing 
  export const createOrder = async (amount) => {
    // const formData = new FormData();
    const loginpp= {
            Price:amount
          };
    // formData.append("Price", amount);
    // formData.append("reciep", "xyz143");
    return await axios.post(`${BASE_URL}payment/createOrder`,loginpp)
    // {
    //    headers: { Authorization: "Bearer " + token },
    // }
    // );
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
