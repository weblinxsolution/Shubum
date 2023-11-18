import React from 'react';
import Button from './Button';
import dynamicbg from '../assets/bgdynamic.png';
import bgrotate from '../assets/360.png';
import imgdynamic from '../assets/photodynamic.png';
import qrcode from '../assets/qrcode.png';
import playbutton from '../assets/play.png';
import Application from './Application';
import { Link } from 'react-router-dom';

const DynamicSection = () => {
    const handleClick = () => {
        // Scroll to the top when the link is clicked
        window.scrollTo(0, 0);
    };

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
                                                    Dynamic
                                                    <img src={bgrotate} className='px-2' style={{ width: 100 }} alt="360" />
                                                    <br className="d-lg-block d-none" />
                                                    QR codes
                                                </h1>
                                                <p className='text-white mb-0 d-lg-block d-none'>
                                                    Let customers explore and appreciate the <br className='d-lg-block d-none' /> beauty of your product in a whole new way
                                                </p>
                                                <p className="text-white mb-0 fw-600 d-lg-none d-block">
                                                    Let customers explore and appreciate the beauty of your product in a whole new way
                                                </p>
                                            </div>
                                        </div>
                                        <div className='dynamic-btn'>
                                            <Link to='/Preview' onClick={handleClick}>
                                                <Button content="Book a Free Demo" style4={true} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="position-relative h_100 ">
                                        <iframe className='img__dynamic' allowFullScreen style={{ borderStyle: "none" }} src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//visualez-storage.s3.ap-south-1.amazonaws.com/cloudrender/360views/646f3c7f1bb0ec473e7e9692_gv002_0000.jpg&autoLoad=true"></iframe>
                                        <div className="supercustom__div">
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
    );
}

export default DynamicSection;
