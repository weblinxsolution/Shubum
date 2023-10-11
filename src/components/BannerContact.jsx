import React from 'react'
import ContactBanner from '../assets/ContactBanner.png'
import Whatsapp from '../assets/Whatsapp.png'
const BannerContact = () => {
    return (
        <>
            <div className="container">
                <section className='bg__contact '
                    style={{ backgroundImage: `url(${ContactBanner})` }}>
                    <div>
                        <h1 className="text-center text-white fw-800">
                            Contact Us
                        </h1>
                        <div className="d-flex justify-content-center mb-lg-0 mb-5 pb-5 pb-lg-0 mt-5 mt-lg-0">
                            <div className="bg__white3 mx-3 text-lg-start text-center d-lg-none d-block rounded-3 px-4 py-4">
                                <h3 className="fw-700">
                                    Corp Office
                                </h3>
                                <p className="text-uppercase text__color2 fw-600 small mb-2">
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
                                <p className="text-uppercase text__color2 fw-600 small mb-2">
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
                                <div className="d-flex justify-content-center gap-2 mb-2">
                                    <img src={Whatsapp} style={{ width: "20px" }} alt="" />
                                    <p className="text__color fw-600 small mb-0">
                                        +91-9560090390
                                    </p>
                                </div>
                                <div className="d-flex justify-content-center gap-2 mb-2">
                                    <img src={Whatsapp} style={{ width: "20px" }} alt="" />
                                    <p className="text__color fw-600 small mb-0">
                                        +91-7428423300
                                    </p>
                                </div>



                            </div>
                        </div>
                     
                    </div>


                </section>
                <div className="d-lg-none d-block" style={{height:"200px"}}>

</div>
            </div>

        </>
    )
}

export default BannerContact