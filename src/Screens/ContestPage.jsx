import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Join_ContestAPI } from '../Services2/ApiCalls'

function ContestPage() {

    useEffect(() => {

        const Join_Contest = async () => {
            try {

                const res = Join_ContestAPI(Contest_id,token)
                if(res){
                    console.error("res from Join_ContestAPI >>>",res)

                }
                else{
                    console.error("no res")
                }
            } catch (error) {
                console.error(error)

            }
        }
        const { Contest_id } = useParams();
        const token = localStorage.getItem('token');
Join_Contest()
    }, [])
    
    return (
        <section className='container py-2 marginTopper-80'>

            {/* <h1 style={{ marginLeft: "0vw", color: "black" }}>Your Contests</h1> */}
            <div className='row'>
                {/* col first-left */}
                <div className="col col-md-10 col-sm-12">
                    <div className='card mx-5 p-3 pb-4 '>
                        <h5 className='ps-4 pt-4'><b>Contest Page</b>{Contest_id}</h5>

                    </div>
                </div>
            </div>
            Join_ContestAPI

            <section>

            </section>

        </section>
    )
}

export default ContestPage