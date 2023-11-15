import React, { useEffect, useState } from 'react'
import { transactionsAPI } from '../Services2/ApiCalls'
import { BsCurrencyRupee } from "react-icons/bs";
import Loader from '../shared/Loader/Loader';


function Transactions() {
    const [transactionData, setTransactionData] = useState([])
    // const [infobox, setInfobox] = useState(false)
  
    const [isLoading, setIsLoading] = useState(false);

    const TransactionsMethod = async () => {


        const token = localStorage.getItem('token');
  setIsLoading(true)

        try {
            const res = await transactionsAPI(token)
      setIsLoading(false)

            if (res) {
                // console.error(">>> in transaction api ",res.data.data)
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



    return ( 
        <div className='mt-0 screenPage vh-100'>
            <div className='container'>
      {isLoading && <Loader />}

            <div className='' style={{ marginTop: "85px" }}>
                <h1 className='text-dark'><b>Transactions History</b></h1>
                {transactionData.map((item, index) => (
                    <div key={index._id}>
                    <div className={`card  p-4 mt-2 `}>
                        <div className=' container d-flex justify-content-between'>
                            <div className={`${item.type === 'Credit' ? 'text-success' : 'text-danger'}`}><b>{item.type} Payment of Rs {item.amount} to EZEWIN Wallet  was {item.status}</b>
                            </div>
                            <div> <div className={`${item.type === 'Credit' ? 'text-success' : 'text-danger'}`} style={{ fontWeight: "900" }}><BsCurrencyRupee size={30} /><span style={{ fontSize: "190" }}>{item.amount}</span>
                            </div>
                            </div>

                        </div>

                    </div>
                  
                    </div>
                

                ))}


            </div></div>
        </div>
    )
}

export default Transactions