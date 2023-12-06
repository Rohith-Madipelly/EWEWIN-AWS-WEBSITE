import React, { useState, useEffect } from 'react'
import './PrivacyPolicy.css'
import { SettingAPI } from '../../Services/ApiCalls'
import { onTop } from '../../Services/commonService'
import parse from "html-react-parser";
function PrivacyPolicy() {

  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState("");

  const fetchPolicyData = async () => {
    try {
      setIsLoading(true);
      const res = await SettingAPI();
      if (res.data.data.privacy_policy) {
        setData(`${res.data.data.privacy_policy}`);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    onTop();
    fetchPolicyData();
  }, []);
  return (


    <div className='screenPage vh-100'>

      <div className='container' style={{ marginTop: "88px" }}>
        <h1 className='text-dark'><b>Privacy Policy</b></h1>

        <div className='m-4'>
          <b>{Data ? <div style={{ color: "black" }}>{parse(Data)}</div> : <div>Are updating the data</div>}</b>
        </div>


      </div>
    </div>


  )
}

export default PrivacyPolicy