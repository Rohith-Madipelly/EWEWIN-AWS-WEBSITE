import React, { useEffect, useState } from 'react'
import { transactionsAPI } from '../Services/ApiCalls'
import { BsCurrencyRupee } from "react-icons/bs";
import Loader from '../shared/Loader/Loader';


function Transactions() {
    const [transactionData, setTransactionData] = useState([])
 

    const [isLoading, setIsLoading] = useState(false);

    const TransactionsMethod = async () => {


        const token = localStorage.getItem('token');
        setIsLoading(true)

        try {
            const res = await transactionsAPI(token)
            setIsLoading(false)

            if (res) {
                setTransactionData(res.data.data)

            }
            else {
                console.error("error in trsa transaction api ")

            }

        } catch (error) {
            setIsLoading(false)

            console.error("error in tddransaction api ", error)
        }
    }

    useEffect(() => {
        TransactionsMethod()
    }, [])


    const TimeChanger = (resTime) => {

        // var startDate = new Date("2023-10-31T06:30:00.000Z");
        var startDate = new Date(resTime);

        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        var month = monthNames[startDate.getMonth()];
        var day = startDate.getDate();
        var year = startDate.getFullYear();
        var hours = startDate.getHours();
        var minutes = startDate.getMinutes();
        var seconds = startDate.getSeconds();

        var formattedDate = `${day} ${month} ${year} at ${hours}:${minutes}`;
        return formattedDate
    }



    return (
        <div className='mt-0 screenPage vh-100'>
            <div className='container'>
                {isLoading && <Loader />}

                <div className='' style={{ marginTop: "85px" }}>
                    <h1 className='text-dark'><b>Transactions History</b></h1>
                    <div style={{overflowX: "auto", height: "535px" }} className='me-4'>
                        {transactionData.map((item, index) => (
                            <div key={index._id}>
                                <div className={`card  p-4 mt-2 `}>
                                    <div className=' container d-flex justify-content-between'>
                                        <div className={`${item.type === 'Credit' ? 'text-success' : 'text-danger'}`}><b>{item.type}<br></br>Payment of Rs {item.amount} to EZEWIN Wallet  was {item.status}</b><br></br>
                                            
                                        </div>
                                        <div> 
                                        <b>{TimeChanger(item.updatedAt)}</b>
                                            <div className={`${item.type === 'Credit' ? 'text-success' : 'text-danger'}`} style={{ fontWeight: "900" }}><BsCurrencyRupee size={30} /><span style={{ fontSize: "190" }}>{item.amount}</span>
                                        </div>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        ))}
                    </div>

                </div></div>
        </div>
    )
}

export default Transactions