import React from 'react'

export const  Method=()=>{



  return payMoney = async () => {
    try {
      const res = await loadScript(RAZORPAY_URL);
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
  const Price=49
  const token = localStorage.getItem('token');
      const order = await createOrder(Price,token);
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
  
}

