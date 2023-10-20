import React, { useState } from 'react'
import './PaymentScreen.css'
import { RAZORPAY_KEY, RAZORPAY_URL } from "../../Enviornment";
import { useNavigate } from "react-router-dom";
import {verifySignatureApi, createOrder} from '../../Services2/ApiCalls'

function PaymentScreen() {
  const navigate = useNavigate();
  const [formError,setFormError]=useState("");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };




const payMoney = async () => {
  try {
    const res = await loadScript(RAZORPAY_URL);
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
const Price=49
    const order = await createOrder(Price);
    if (order?.data) {
      const options = {
        key: RAZORPAY_KEY,
        amount: order.data.data.amount,
        currency: "INR",
        name: "Ezewin",
        description: `Wallet Transaction`,
        image: "",
        order_id: order.data.data.id,
        handler: function (response) {

          verifySignature(response);
          
        },
        prefill: {
          name: "dd",//profileData.name,
          email: "dd",//profileData.email,
          contact: "",//profileData.phone,
        },
        notes: {
          address: "dd", //profileData.address,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        // alert(response.error.code);
        // alert(response.error.description);
        setFormError(
          `${response.error.reason}\n${response.error.description}`
        );
        // updateFormMsg();
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    }
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 401) {
      // await dispatch(setToken(""));
      // history.push({
      //   pathname: "Login",
      //   state: { redirectUrl: "Wallet" },
      // });
    } else {
      setFormError("Something went wrong.");
      // updateFormMsg();
    }
  }
};



const verifySignature = async (paymentData) => {
    
  try {

    const res = await verifySignatureApi(paymentData);
    // alert("HEre",res)
    if (res?.data.message) {
      // await payMoneyInWallet();
     console.log("data error")
      setTimeout(() => {
        navigate('/PaymentDone');
        alert("Successfull")
      }, 2000);
    }
  } catch (error) {
    console.log(error);
    setFormError("Something went wrong.");
    setTimeout(() => {
      navigate('/PaymentDone');
      console.log("rohith error see")
    }, 2000);
  }
};

  return (
    <div>
       
        <section className='NotFoundPage'>
        <div className='centerDiv mt-5 flex-column'>
            

            <h1> Welcome to Payment Page </h1>
          
            <button className='bg-danger'  onClick={() => payMoney()}>Pay Now 49</button>
        </div>
    </section>
    </div>
  )
}

export default PaymentScreen