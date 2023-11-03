import React from 'react'
import './ShopCard.css'
import { Link } from 'react-router-dom'
import PaymentScreen from '../Screens/PaymentScreen/NewPaymentMethod'

const Shopcard123 = ( item ) => {
    item=item.iteam
    return (
        <div className="card123 shadow mt-3" as={Link} to="/Single">
            <div className='border rounded border-5 '>
                <div className='imgbox py-3 ps-4'as={Link} to="/Single" >
                        <span><b>Id: </b>{item._id}</span><br />
                        <span><b>Contests Name: </b>{item.name}</span><br />
                        <span><b>Price: </b>{item.entry_fee}</span> <br />
                        <span><b>Status: </b>{item.status}</span> <br />
                        <span><b>Starts at:</b> {item.starts_at}</span> <br />
                    <PaymentScreen />
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