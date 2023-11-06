import React from 'react'



const Your_ContestsCard = (item) => {
    item = item.iteam
    return (
        <div className="card123 shadow mt-3">
            <div className='border '>
                <div className='imgbox pt-3 ps-4' >
                    <span>Id: {item._id}</span><br />
                    <span>Name: {item.name}</span><br />
                    <span>Price: {item.entry_fee}</span> <br />
                    <p>Status: <b className='card bg-danger w-50 p-1'>{item.status}</b></p> <br />
                </div>
            </div>
        </div>
    )
}

export default Your_ContestsCard