import React from 'react'
import loginimg from '../assets/loginbanner.png'
import India from '../assets/india.png'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Header from '../components/Elements/Header'
import Footer from '../components/Elements/Footer'
const Login = () => {
    return (
        <>

            <Header />

            <section className='Login__Section'>
                <div className="container">
                    <div className="row mx-0 align-items-center gap-lg-0 gap-5">
                        <div className="col-lg-6 d-lg-block d-none">
                            <img src={loginimg} className='w-100' alt="" />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4">
                            <h1 className='fw-700 mb-1 text-lg-start text-center'>
                                Login/Register
                            </h1>
                            <p className='text-lg-start text-center'>
                                Enter Your credentials to access your account.
                            </p>

                            <div className="login__input">
                                <div className="form-control width__input">
                                    <div className="d-flex align-items-center">
                                        <DropdownButton id="dropdown-basic-button" variant='light' className='nofocus nohover bg-light' title={
                                            <div className='d-inline-block'>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <div>
                                                        <img src={India} alt="" />
                                                    </div>
                                                    <div> +91</div>

                                                </div>
                                            </div>

                                        }>
                                            <Dropdown.Item href="#/action-1">        <div className='d-inline-block'>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <div>
                                                        <img src={India} alt="" />
                                                    </div>
                                                    <div> +91</div>
                                                </div>
                                            </div></Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">        <div className='d-inline-block'>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <div>
                                                        <img src={India} alt="" />
                                                    </div>
                                                    <div> +91</div>
                                                </div>
                                            </div></Dropdown.Item>

                                        </DropdownButton>
                                        <input type="text" className='nofocus border-0 bg-transparent ' placeholder='Phone Number' />
                                    </div>
                                </div>
                                <div className="form-control width__input mt-4 p-3">
                                    <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Otp' />
                                </div>
                            </div>
                            <div className="mt-4 rounded_btn">
                                <Link to="/Register" >
                                    <Button responsive100={true} registerbtn={true} content="Register" />

                                </Link>
                            </div>

                            <div className="mt-4 text-lg-start text-center">
                                <p className='small text__color '>
                                    Didn't recieve the otp <span className="text__primary fw-bold">Resend</span>
                                </p>
                            </div>
                            <div className="mt-4">
                                <div className="otpsend text__green small text-center">
                                    A 4 digit OTP will be sent via SMS to verify <br className="d-lg-block d-none" /> your mobile number!
                                </div>
                            </div>
                            <div className="mt-4 text-lg-start text-center">
                                <p className='small text__color '>
                                    Need Help <Link to="/Contact" className="text__primary text-decoration-underline fw-400">Contact Us</Link>
                                </p>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Login