import React from 'react'
import './ShopCard2.css'
import { Link } from 'react-router-dom'

// import {useParams} from "react-router-dom";


const Shopcard123 = (item) => {
    console.error(">>>>>>", item)
    item = item.iteam
    return (
        <div className="card123 shadow mt-3" as={Link} to="/Single">
            <div className='border rounded border-5 '>


                <div className='imgbox pt-3 ps-4' as={Link} to="/Single" >
                    <span>Id: {item._id}</span><br />
                    <span>Name: {item.name}</span><br />
                    <span>Price: {item.entry_fee}</span> <br />
                    <p>Status: <b className='card bg-danger w-50 p-1'>{item.status}</b></p> <br />

                </div>

                {/* <div className="card123-body"> */}
                    {/* <h5 className="card123-title">{item.name}</h5>{item.color} */}
                    {/* <Rating value={iteam.rating} text={`${iteam.numReviews} ratings`} /> */}
                    {/* <strong>{`${iteam.price} Rs`}</strong> */}
                {/* </div> */}

            </div>
        </div>

    )
}

export default Shopcard123