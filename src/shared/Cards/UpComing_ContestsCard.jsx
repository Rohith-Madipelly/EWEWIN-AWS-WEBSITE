import React from 'react'
import './ShopCard.css'
import { Join_ContestAPI } from '../../Services/ApiCalls'
import { toast} from 'react-toastify';



const UpComing_ContestsCard= (item) => {
 

  if(item.iteam.is_joined)
  {
    console.error("sdds>>>>>>>>",item)
  }
    item = item.iteam
    const price23 = item.entry_fee;
  
  
    const token = localStorage.getItem('token');

    //booking Method
    const BookNow=async (e)=>{
        e.preventDefault();
        console.error("Booking for ",item._id)
      try{
        const res=await Join_ContestAPI(item._id,token)
        // console.error("res >",res.data.message)
        if(res)
        {
       
        toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, autoClose: 800, })

 window.location.reload();

        }
        else{
        console.error("Error from card upcoming",error)
        toast.error("Check log", { position: toast.POSITION.TOP_CENTER, autoClose: 800, })


        }


      }catch(error){
        console.log("ddd")
        if (error.response) {
          if (error.response.status === 400) {
            toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
          } 
          
      
          else {
            toast.error('An error occurred during .', { position: toast.POSITION.TOP_CENTER })
          }
        } else if (error.request) {
          toast.error('No response received from the server.', { position: toast.POSITION.TOP_CENTER })
        } else {
          toast.error('Error setting up the request.', { position: toast.POSITION.TOP_CENTER })
        }

      }
        
    }
    return (
      
        <div>{item.is_joined ?"":<div className="card123 shadow mt-3" 
        style={{ background: "linear-gradient(135deg, #F1B94F,#CE7E1C, #8C440A, #592401,#1B0801)" }}
        >
        <div className='border rounded border-5 '>
            <div className='imgbox py-3 ps-4' >
                <span><b>Id: </b>{item._id}</span><br />
                <span><b>Contests Name: </b>{item.name}</span><br />
                <span><b>Price: </b>{item.entry_fee}</span> <br />
                <span><b>Status: </b>{item.status}</span> <br />
                <span><b>Starts at:</b> {item.starts_at}</span> <br />

                <button className='btn btn-success' onClick={BookNow}>Book Now</button> 
            </div>

     
        </div>
    </div>}</div>

    )
}

export default UpComing_ContestsCard