import React from 'react'
import dynamicbg from '../assets/bgdynamic.png'
import bgrotate from '../assets/rotate.png'
import imgdynamic from '../assets/photodynamic.png'
import qrcode from '../assets/qrcode.png'
import playbutton from '../assets/play.png'
import Button from './Button'
import Application from './Application'
import { Link } from 'react-router-dom'
const DynamicSection = () => {
    return (
        <>
            <section className='dynamic__section mt-5' style={{
                background: `url(${dynamicbg})`
            }}>
                <div className="container">
                    <div className="row mx-0 justify-content-center">
                        <div className="col-lg-12 pe-lg-4">
                            <div className="row mx-0">
                                <div className="col-lg-12 px_0">
                                    <div className="d-flex justify-content-lg-between align-items-center flex-wrap gap-lg-0 gap-3">
                                        <div className='d-flex gap-lg-4 gap-2 aling-items-center'>
                                            <img src={qrcode} className='qrcode' alt="image" />
                                            <div className='qr-box-dts'>
                                                <h1 className="text-white fw-800">
                                                    Dynamic <span className='bg__rotate' style={{
                                                        background: `url(${bgrotate})`
                                                    }}>360</span> <br className="d-lg-block d-none" />
                                                    QR codes
                                                </h1>
                                                <p className='text-white mb-0 d-lg-block d-none'>
                                                    It is a long established fact that a reader <br className="d-lg-block d-none" /> will be distracted
                                                </p>
                                                <p className="text-white mb-0 fw-600 d-lg-none d-block">
                                                Let your customers explore and appreciate the beauty of your product in a whole new way
                                                </p>


                                            </div>
                                        </div>

                                        <div className='dynamic-btn'>
                                            <Link to='/Preview'>
                                                <Button content="Book a Free Demo" style4={true} />
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="position-relative h_100 ">
                                        {/* <img src={imgdynamic} alt="" className='img__dynamic' /> */}
                                        {/* <iframe className='img__dynamic' allowfullscreen style={{ borderStyle: "none" }} src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//visualez-storage.s3.ap-south-1.amazonaws.com/cloudrender/360views/646f3c7f1bb0ec473e7e9692_gv002_0000.jpg"></iframe> */}
                                        <iframe className='img__dynamic' allowfullscreen style={{ borderStyle: "none" }} src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//visualez-storage.s3.ap-south-1.amazonaws.com/cloudrender/360views/646f3c7f1bb0ec473e7e9692_gv002_0000.jpg&autoLoad=true"></iframe>
                                        <div className="supercustom__div">
                                            {/* <img src={playbutton} alt="" /> */}
                                            <div>
                                                {/* <p className='text1'>
                                                    Super Customizable

                                                </p>
                                                <p className='text2'>
                                                    see video

                                                </p> */}
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                                                    <path d="M46 0C20.6341 0 0 20.636 0 46C0 71.364 20.6341 92 46 92C71.3659 92 92 71.364 92 46C92 20.636 71.3659 0 46 0ZM64.287 47.6116L37.4537 64.8616C37.1393 65.0656 36.7761 65.1667 36.4167 65.1667C36.1023 65.1667 35.784 65.088 35.4996 64.9328C34.8818 64.5959 34.5 63.9519 34.5 63.25V28.75C34.5 28.0481 34.8818 27.4041 35.4996 27.0672C36.106 26.7341 36.8659 26.7546 37.4537 27.1384L64.287 44.3884C64.8336 44.7402 65.1667 45.3486 65.1667 46C65.1667 46.6514 64.8336 47.2596 64.287 47.6116Z" fill="white" />
                                                </svg> */}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className="height__div" ></div>
            <div className="container ">
                <Application />

            </div>

        </>
    )
}

export default DynamicSection