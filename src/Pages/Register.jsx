import React from 'react'
import loginimg from '../assets/loginbanner.png'
import India from '../assets/india.png'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Header from '../components/Elements/Header'
import Footer from '../components/Elements/Footer'
const Register = () => {
    return (
        <>

            <Header />

            <section className='register__Section'>
                <div className="container">
                    <div className="row mx-0 align-items-center gap-lg-0 gap-5">
                        <div className="col-lg-7 d-lg-block d-none">
                            <img src={loginimg} className='w-100' alt="" />
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-4">
                            <h1 className='fw-700 mb-1 text-lg-start text-center'>
                                Register Here!
                            </h1>
                            <div className='mt-3'>
                                <label htmlFor="" className='mb-1'>Name <span className="text-danger">*</span></label>
                                <div className="form-control  p-3 p-laptop">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Name' id='tel_input' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='mb-1'>Shop Name <span className="text-danger">*</span></label>
                                <div className="form-control  p-3 p-laptop">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Shop Name' id='tel_input' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='mb-1'>Email <span className="text-danger">*</span></label>
                                <div className="form-control  p-3 p-laptop">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Email' id='tel_input' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='mb-1'>GST Number <span className="text-danger">*</span></label>
                                <div className="form-control  p-3 p-laptop">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter GST Number' id='tel_input' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='mb-1'>City <span className="text-danger">*</span></label>
                                <div className="form-control  p-3 p-laptop">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter City' id='tel_input' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='mb-1'>State <span className="text-danger">*</span></label>
                                <div className="form-control  p-3 p-laptop">
                                    <input type="text" className='nofocus border-0 bg-transparent border-left-0' placeholder='Enter State' id='tel_input' />
                                </div>
                            </div>
                            <div className="mt-3 rounded_btn">
                                <Link to="/Dashboard">
                                    <Button responsive100={true} registerbtn={true} content="Register" />
                                </Link>

                            </div>



                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Register