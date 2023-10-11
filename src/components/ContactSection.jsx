import React from 'react'
import Button from './Button'
import Whatsapp from '../assets/Whatsapp.png'
const ContactSection = () => {
    return (
        <>
            <div className="my-5">
                <div className="container ">
                    <div className="row mx-0 justify-content-center">
                        <div className="col-lg-10">
                            <div className="row mx-0">
                                <div className="col-lg-7">
                                    <h2 className="fw-700">Get in Touch With us</h2>
                                    <p className="text__color fw-700">
                                        Fields marked with an <span className="text-danger">
                                            *</span> are required
                                    </p>
                                    <label htmlFor="" className='mb-2'>
                                        Name <span className="text-danger fw-700">*</span>

                                    </label>
                                    <input type="text" className="inputcontact mb-3" placeholder='Enter Name' required />
                                    <label htmlFor="" className='mb-2'>
                                        Email <span className="text-danger fw-700">*</span>

                                    </label>
                                    <input type="email" className="inputcontact mb-3" placeholder='Enter Email' required />
                                    <label htmlFor="" className='mb-2'>
                                        Phone Number <span className="text-danger fw-700">*</span>

                                    </label>
                                    <input type="tel" className="inputcontact mb-3" placeholder='Enter Phone Number' required />
                                    <label htmlFor="" className='mb-2'>
                                        Message

                                    </label>
                                    <textarea type="tel" className="inputcontact pb-5 mb-3" placeholder='Enter Message' required ></textarea>
                                    <div className="mt-3 text-lg-start text-center">
                                        <Button responsive100={true} content="&nbsp; &nbsp; &nbsp; Submit &nbsp; &nbsp; &nbsp;" style0={true} />

                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="bg__white3 d-lg-block d-none rounded-3 px-4 py-4">
                                        <h3 className="fw-700">
                                            Corp Office
                                        </h3>
                                        <p className="text-uppercase text__color fw-600 small mb-2">
                                            VISUALEZ TECHNOLOGIES PVT LTD
                                        </p>
                                        <p className="text__color fw-600 small mb-2">
                                            Plot 511, 2nd Floor, Udyog Vihar Phase 5, Sector-19 Gurugram, Haryana – 122016
                                            GSTN: 06AAICV7764M1ZJ
                                        </p>
                                        <hr />
                                        <h3 className="fw-700">
                                            Registered Office
                                        </h3>
                                        <p className="text-uppercase text__color fw-600 small mb-2">
                                            VISUALEZ TECHNOLOGIES PVT LTD
                                        </p>
                                        <p className="text__color fw-600 small mb-2">
                                            Second Floor 46 New Cloth Market, Mall Road Bathinda, Punjab 151001
                                            GSTN: 03AAPFV2696A1Z4
                                        </p>
                                        <hr />
                                        <h3 className="fw-700">
                                        Contact Numbers
                                        </h3>
                                        <p className="text-uppercase text__color fw-600 small mb-2">
                                            Email: info@visualez.com
                                        </p>
                                        <div className="d-flex gap-2 mb-2">
                                            <img src={Whatsapp} style={{ width: "20px" }} alt="" />
                                            <p className="text__color fw-600 small mb-0">
                                                +91-9560090390
                                            </p>
                                        </div>
                                        <div className="d-flex gap-2 mb-2">
                                            <img src={Whatsapp} style={{ width: "20px" }} alt="" />
                                            <p className="text__color fw-600 small mb-0">
                                                +91-7428423300
                                            </p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSection