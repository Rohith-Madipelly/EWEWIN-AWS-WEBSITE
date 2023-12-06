import React, { useState, useEffect } from 'react'
import './TermandConditions.css'
import { SettingAPI } from '../../Services/ApiCalls'
import { onTop } from '../../Services/commonService'
import parse from "html-react-parser";
function TermandConditions() {

  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState("");

  const fetchPolicyData = async () => {
    try {
      setIsLoading(true);
      const res = await SettingAPI();
      if (res.data.data.terms_conditions) {
        setData(`${res.data.data.terms_conditions}`);
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


    <div className=' screenPage vh-100' style={{ marginTop: "-4px" }}>

      <div className='container' style={{ marginTop: "90px" }}>
        <h1 className='text-dark'><b>Term and Conditions</b></h1>

        <div className='m-4'>
          <b>{Data ? <div style={{ color: "black" }}>{parse(Data)}</div> : <div>Are updating the data</div>}</b>
        </div>


      </div>
    </div>


  )
}

export default TermandConditions