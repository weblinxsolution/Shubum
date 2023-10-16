import React from 'react'
import Button from './Button'
import featureimg from '../assets/4slid.png'
import { Link } from 'react-router-dom'
const FreeTrial = () => {
    return (
        <>
            <section className='container-md px_0 mb-lg-5'>
                <div className="row mx-0 px_0">
                    <div className="col-lg-12 mt-5 px_0">
                        <div className="bg__trial">
                            <div className="row mx-0 align-items-center gap-lg-0 gap-4">
                                <div className="col-lg-7">
                                    <h1 className="text-white text-lg-start text-center fw-700">
                                        See what it’s like to create amazing designs for your customers
                                    </h1>
                                    <div className="mt-4 text-lg-start text-center">
                                        <Link to='/Login'>
                                            <Button style4={true} content="Start Your Free Trial" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <img src={featureimg} className='w-100' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default FreeTrial