import React from 'react'
import loginimg from '../../assets/loginbanner.png'
import India from '../../assets/india.png'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Button from '../Button'
import { Link } from 'react-router-dom'
import Header from '../Elements/Header'
import Footer from '../Elements/Footer'
const Customer = () => {
    return (
        <>
            <section className='Login__Section'>
                <div className="container">
                    <div className="row mx-0 align-items-center justify-content-center gap-lg-0 gap-5">
                        <div className="col-xxl-8 col-lg-10">
                            <h1 className='fw-medium my-4 text-center'>
                                Customer
                            </h1>
                            <div className='row justify-content-center'>
                                <div className='col-lg-11 border rounded-2 p-lg-5 py-4'>
                                    <div className="login__input  px-lg-5 px-3">
                                        <div className="form-control  mb-4 p-3">
                                            <input type="text" className='nofocus border-0 bg-transparent' placeholder='Full Name   ' />
                                        </div>
                                        <div className="form-control ">
                                            <div className="d-flex align-items-center">
                                                <DropdownButton id="dropdown-basic-button" variant='light' className='nofocus nohover bg-light' title={
                                                    <div className='d-inline-block'>
                                                        <div className='d-flex align-items-center gap-2 pe-1'>
                                                            <div>
                                                                <img src={India} className='tell_img' alt="" />

                                                            </div>
                                                            <span className='d-flex tel_nm align-items-center gap-1' style={{ color: '#808080' }}>+91 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 18 18" fill="none">
                                                                <path d="M8.90404 14.2252L1.39459 6.21499C1.22076 6.02973 1.125 5.78241 1.125 5.51871C1.125 5.255 1.22076 5.00769 1.39459 4.82242L1.94748 4.23252C2.30775 3.84867 2.89329 3.84867 3.25302 4.23252L9.559 10.9589L15.872 4.22506C16.0458 4.03979 16.2775 3.9375 16.5246 3.9375C16.772 3.9375 17.0037 4.03979 17.1777 4.22506L17.7304 4.81496C17.9042 5.00037 18 5.24754 18 5.51124C18 5.77495 17.9042 6.02226 17.7304 6.20753L10.2141 14.2252C10.0397 14.4109 9.80691 14.5129 9.55941 14.5123C9.31096 14.5129 9.07827 14.4109 8.90404 14.2252Z" fill="#808080" />
                                                            </svg></span>
                                                        </div>
                                                    </div>

                                                }>
                                                    <Dropdown.Item href="#/action-1">        <div className='d-inline-block'>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <div>
                                                                <img src={India} className='tell_img' alt="" />

                                                            </div>
                                                            <div className='tel_nm' style={{ color: '#808080' }}> +91</div>
                                                        </div>
                                                    </div></Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">        <div className='d-inline-block'>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <div>
                                                                <img src={India} className='tell_img' alt="" />
                                                            </div>
                                                            <div className='tel_nm' style={{ color: '#808080' }}> +91</div>
                                                        </div>
                                                    </div></Dropdown.Item>

                                                </DropdownButton>
                                                <input type="text" className='nofocus border-0 bg-transparent w-100' id='tel_input' placeholder='Phone Number' />
                                            </div>
                                        </div>
                                        <div className="form-control  mt-4 p-3">
                                            <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Otp' />
                                        </div>
                                        <div className="mt-2 text-lg-start text-center">
                                            <p className='small text__color '>
                                                Didn't receive the OTP <span className="text__primary fw-bold">Resend</span>
                                            </p>
                                        </div>
                                        <div className='rt__btns d-flex flex-column gap-3'>
                                            <button className='rt_register'>Register</button>
                                            <button className='rt_full'>Fill up the Form to get free 2 days trial!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Customer