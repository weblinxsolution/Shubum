import React from 'react'
import BannerImg from '../assets/visualbannerimg.png'
import India from '../assets/india.png'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Button from './Button'

const BannerVisualizer = () => {
    return (
        <>
            <section className='bg__gradient container padding__section mt-lg-5'>
                <div className="row mx-0 gap-lg-0 gap-5 align-items-center">
                    <div className="col-lg-7 col-xxl-6">
                        <div className="">
                            <h1 className="text-white text-lg-start text-center fw-800 display-5">
                                India’s Best 3D Visualization Software
                            </h1>
                            <p className="text-white text-lg-start text-center fs-5 fw-500 ">
                                Create beautiful designs with your selected


                                tiles     <br className="d-lg-block d-none" /> and laminates
                            </p>
                            <div className="d-lg-none d-block mb-4 mb-lg-0">
                                <img src={BannerImg} alt="" className="w-100" />
                            </div>
                            <div className="form-control width__input">
                                <div className="d-flex align-items-center">
                                    <DropdownButton id="dropdown-basic-button" variant='transparent' className='nofocus nohover bg-transparent' title={
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
                            <div className="mt-4 text-lg-start text-center">
                                <Button style0={true} content="Get Free Trial" />

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 col-xxl-6 px-lg-0 d-lg-block d-none">
                        <img src={BannerImg} alt="" className="w-100" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default BannerVisualizer