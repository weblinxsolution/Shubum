import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import viber from '../../assets/sociallink1.png'
import mail from '../../assets/sociallink2.png'
import btninquiry from '../../assets/btninquiry.png'
import fbicon from '../../assets/fb.png'
import dribbleicon from '../../assets/dribble.png'
import linkedicon from '../../assets/linkedin.png'
import instaicon from '../../assets/instagram.png'
import Button from '../Button'
import Whatsapp from '../../assets/whatsappw.png'
const Footer = () => {
    return (
        <>
            <footer className='mt-lg-0 bg-dark pt-5 pb-3'>
                <div className="container pt-lg-3">
                    <div className="row justify-content-center mx-0">
                        <div className="col-lg-12  pe-lg-4">
                            <div className="row mx-0 pb-5">
                                <div className="col-lg-12 px-0">
                                    <div className="row mx-0 d-lg-flex d-none flex-lg-row flex-column justify-content-lg-between gap-lg-3 gap-xl-4  gap-5">
                                        <div className="col-xl-4 col-lg-3   ">
                                            <img src={logo} className='logo' alt="" />
                                            <p className='text-white mt-4 pt-1 small'>
                                                Building solutions that are trusted by 20,000+ Retailers and 50+ Brands of Tiles and Laminate Industry.

                                            </p>
                                        </div>
                                        <div className="col-lg-2 col-xl-2">
                                            <div className="fs-5 fw-600 text-white">Resources</div>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-4'>
                                                Home

                                            </Link>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                About

                                            </Link>

                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                Contact

                                            </Link>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                Blog

                                            </Link>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                Pricing

                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-xl">
                                            <div className="fs-5 fw-600 text-white">Project Inquiry </div>
                                            <a href="tel:7428423300" className='text-white text-decoration-none d-flex align-items-center gap-1 small mt-4'>
                                                <img src={viber} className='img-fluid me-1' alt="" />
                                                <span>
                                                    7428423300
                                                </span>

                                            </a>
                                            <Link to="/" className='text-white text-decoration-none d-flex align-items-center gap-1 small mt-3'>
                                                <img src={mail} className='img-fluid me-1' alt="" />
                                                <span>
                                                    info@roomup.in
                                                </span>

                                            </Link>

                                        </div>
                                        {/* <div className="col">
                                            <div className="fs-5 fw-600 text-white">Send an Inquiry </div>
                                            <Link to="/" className='text-white text-decoration-none d-block mt-4 small'>
                                                <img src={btninquiry} alt="" className="img-fluid" />

                                            </Link>

                                        </div> */}
                                        <div className="col-lg-3">
                                            <div className="fs-5 fw-600 text-white">Social Links</div>
                                            <div className="mt-4 d-flex gap-3 align-items-center">
                                                <Link to="/" className='text-white text-decoration-none d-block '>
                                                    <img src={fbicon} className='img-fluid' alt="" />

                                                </Link>
                                                <Link to="/" className='text-white text-decoration-none d-block'>
                                                    <img src={dribbleicon} className='img-fluid' alt="" />

                                                </Link>
                                                <Link to="/" className='text-white text-decoration-none d-block'>
                                                    <img src={linkedicon} className='img-fluid' alt="" />

                                                </Link>
                                                <Link to="/" className='text-white text-decoration-none d-block'>
                                                    <img src={instaicon} className='img-fluid' alt="" />

                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row mx-0 d-lg-none d-flex flex-lg-row flex-row justify-content-lg-between   gap-0">
                                        <div className="col-xl-4 col-lg-3 mb-4   ">
                                            <img src={logo} className='logo' alt="" />
                                            <p className='text-white mt-4 pt-1 small'>
                                                Building solutions that are trusted by 20,000+ Retailers and 50+ Brands of Tiles and Laminate Industry.

                                            </p>
                                        </div>
                                        <div className="col-lg-2 col-xl-2 col-6 mb-4">
                                            <div className="fs-6 fw-600 text-white">Resources</div>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-4'>
                                                Home

                                            </Link>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                About

                                            </Link>

                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                Contact

                                            </Link>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                Blog

                                            </Link>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                Pricing

                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-xl  col-6 mb-4">
                                            <div className="fs-6 fw-600 text-white">Project Inquiry </div>
                                            <a href="tel:7428423300" className='text-white text-decoration-none d-block small mt-4'>
                                                <img src={viber} className='iconmails me-1' alt="" />
                                                <span>
                                                    7428423300
                                                </span>

                                            </a>
                                            <Link to="/" className='text-white text-decoration-none d-block small mt-2'>
                                                <img src={mail} className='iconmails me-1' alt="" />
                                                <span>
                                                    info@roomup.in
                                                </span>

                                            </Link>

                                        </div>
                                        {/* <div className="col">
                                            <div className="fs-5 fw-600 text-white">Send an Inquiry </div>
                                            <Link to="/" className='text-white text-decoration-none d-block mt-4 small'>
                                                <img src={btninquiry} alt="" className="img-fluid" />

                                            </Link>

                                        </div> */}
                                        <div className="col-6">
                                            <div className="fs-6 fw-600 text-white">Send an Inquiry </div>
                                            <div className="mt-4">
                                                <Button style5={true} content={[<img className='d-inline-block' src={Whatsapp} key={4} />, <span className='' key={6}>&nbsp;Whatsapp</span>]} />

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <div className="fs-6 fw-600 text-white">Social Links</div>
                                            <div className="mt-4 d-flex gap-3 align-items-center">
                                                <Link to="/" className='text-white text-decoration-none d-block '>
                                                    <img src={fbicon} className='img-fluid' alt="" />

                                                </Link>
                                                <Link to="/" className='text-white text-decoration-none d-block'>
                                                    <img src={dribbleicon} className='img-fluid' alt="" />

                                                </Link>
                                                <Link to="/" className='text-white text-decoration-none d-block'>
                                                    <img src={linkedicon} className='img-fluid' alt="" />

                                                </Link>
                                                <Link to="/" className='text-white text-decoration-none d-block'>
                                                    <img src={instaicon} className='img-fluid' alt="" />

                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-center  text-center py-3 pt-4 mx-0    ' style={{ borderTop: '1px solid #474747' }}>
                                <p className='mb-0' style={{ color: '#BCBCBC', fontSize: '14px' }}>In copyright, replace roomup with VISUALEZ</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer