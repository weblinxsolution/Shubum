import React from 'react'
import BannerImg from '../assets/visualbannerimg.png'
import India from '../assets/india.png'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Button from './Button'

const BannerVisualizer = () => {
    return (
        <>
            <div className="wrapper">
                <section className='bg__gradient padding__section mt-lg-5'>
                    <div className="row mx-0 gap-lg-0 gap-5 align-items-center">
                        <div className="col-lg-6 col-xxl-6">
                            <div className="">
                                <h1 className="text-white text-lg-start text-center fw-800 display-5 visual-title">
                                    India’s Best 3D Visualization Software
                                </h1>
                                <p className="text-white text-lg-start text-center fs-5 fw-500 ">
                                    Create beautiful designs with your selected
                                    tiles     <br className="d-xl-block d-none" /> and laminates
                                </p>
                                <div className="d-lg-none d-block mb-4 mb-lg-0">
                                    <img src={BannerImg} alt="" className="w-100" />
                                </div>
                                <div className="form-control width__input">
                                    <div className="d-flex align-items-center">
                                        {/* <DropdownButton id="dropdown-basic-button" variant='transparent' className='nofocus nohover bg-transparent' title={
                                            <div className='d-inline-block'>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <div>
                                                        <img src={India} alt="" />
                                                    </div>
                                                    <div className='text-grey-v2 '> +91</div>

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

                                        </DropdownButton> */}
                                        <DropdownButton id="dropdown-basic-button" variant='transparent' className='nofocus nohover px-0 bg-transparent' title={
                                            <div className='d-flex gap-1 align-items-center pe-2'>
                                                <img src={India} className='tell_img' alt="" />
                                                <span className='d-flex align-items-center gap-1' style={{color:'#808080'}}>+91 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 18 18" fill="none">
                                                    <path d="M8.90404 14.2252L1.39459 6.21499C1.22076 6.02973 1.125 5.78241 1.125 5.51871C1.125 5.255 1.22076 5.00769 1.39459 4.82242L1.94748 4.23252C2.30775 3.84867 2.89329 3.84867 3.25302 4.23252L9.559 10.9589L15.872 4.22506C16.0458 4.03979 16.2775 3.9375 16.5246 3.9375C16.772 3.9375 17.0037 4.03979 17.1777 4.22506L17.7304 4.81496C17.9042 5.00037 18 5.24754 18 5.51124C18 5.77495 17.9042 6.02226 17.7304 6.20753L10.2141 14.2252C10.0397 14.4109 9.80691 14.5129 9.55941 14.5123C9.31096 14.5129 9.07827 14.4109 8.90404 14.2252Z" fill="#808080" />
                                                </svg></span>
                                            </div>
                                        }>
                                            <Dropdown.Item href="#/action-1">
                                                <div className='d-inline-block'>
                                                    <div className='d-flex align-items-center gap-2'>
                                                        <div>
                                                            <img src={India} className='tell_img' alt="" />
                                                        </div>
                                                        <div className='tel_nm' style={{color:'#808080'}}> +91</div>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">
                                                <div className='d-inline-block'>
                                                    <div className='d-flex align-items-center gap-2'>
                                                        <div>
                                                            <img src={India} className='tell_img' alt="" />
                                                        </div>
                                                        <div className='tel_nm' style={{color:'#808080'}}> +91</div>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                        <input type="text" className='nofocus border-0 bg-transparent w-100' id='tel_input' placeholder='Phone Number' />
                                    </div>
                                </div>
                                <div className="mt-4 text-lg-start text-center mobile-res-btn">
                                    <Button style0={true} content="Get Free Trial" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-xxl-6 px-lg-0 d-lg-block d-none">
                            <img src={BannerImg} alt="" className="w-100" />
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default BannerVisualizer