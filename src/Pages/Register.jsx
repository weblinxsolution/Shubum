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
                        <div className="col-lg-6 d-lg-block d-none">
                            <img src={loginimg} className='w-100' alt="" />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4">
                            <h1 className='fw-700 mb-1 text-lg-start text-center'>
                                Register Here!
                            </h1>
                            <div className='mt-4'>
                                <label htmlFor="">Name <span className="text-danger">*</span></label>
                                <div className="form-control width__input  p-3">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Name' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="">Shop Name <span className="text-danger">*</span></label>
                                <div className="form-control width__input  p-3">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Name' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="">Email <span className="text-danger">*</span></label>
                                <div className="form-control width__input  p-3">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Name' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="">GST Number <span className="text-danger">*</span></label>
                                <div className="form-control width__input  p-3">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Name' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="">City <span className="text-danger">*</span></label>
                                <div className="form-control width__input  p-3">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Name' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="">State <span className="text-danger">*</span></label>
                                <div className="form-control width__input  p-3">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Name' />
                                </div>
                            </div>





                            <div className="mt-4">
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