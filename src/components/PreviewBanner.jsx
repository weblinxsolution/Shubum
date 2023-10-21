import React, { useEffect, useState } from 'react'
import img360 from '../assets/360.png'
import Button from './Button'
import Whatsapp from '../assets/whatsapp.png'
import qrconcept from '../assets/qrconcept1.png'
import gif from '../assets/mygif.gif'
const PreviewBanner = () => {
    const imageList = ["Ceramic Tiles", "Laminate", "Wallpaper"];
    const [mytext, setText] = useState("Ceramic Tiles");
    const [hideImage, setHideImage] = useState(false);

    useEffect(() => {


        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % imageList.length;
            setHideImage(true); // Apply "hide" class
            // Apply "hide" class
            setTimeout(() => {


                setText(imageList[currentIndex]);
                setHideImage(false);
                // console.log(mytext)
                // Remove "hide" class after a brief delay
            }, 500); // Adjust the delay as needed for the transition
        }, 3000);


        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <section className=' bg__concept  me-0 px_0 mt-5 prev-lap'>
                <div className=" " style={{
                    // backgroundImage: `linear-gradient(94deg, #3294DB 3.97%, rgba(50, 148, 219, 0.00) 88.85%),url(${qrconcept})`
                }}>
                    <div className="padding__section">
                        <div className="row mx-0">
                            <div className="col-lg-5 col-xxl-5">
                                <div className="d-flex align-items-start  gap-2 gap-lg-0 flex-lg-column justify-content-lg-start image-text-center">
                                    <img src={img360} className='img-fluid image-three-sixty' alt="" />
                                    <div className='text-align-res'>
                                        <h1 className='text-white fw-700 mt-1 font__responsive'>
                                            Product Previews

                                        </h1>
                                        <h1 className='text-white fw-700 font__responsive'>
                                            For <span className={`image-container ${hideImage ? 'hide' : ''}`} >
                                                {mytext}
                                            </span>

                                        </h1>
                                    </div>
                                </div>
                                <div className="d-lg-none d-none">
                                    <img src={qrconcept} className='w-100' alt="" />
                                </div>
                                <div className="d-lg-flex d-none gap-4  mt-4 flex-wrap justify-content-lg-start justify-content-center align-items-center">
                                    <Button key="3" style0={true} content="Enquire Now" />
                                    <div className="d-lg-block d-none">
                                        <Button style0={true} key="0" content={[<img src={Whatsapp} key={4} />, <span className='ms-2' key={6}>Whatsapp</span>]} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-xxl-7">
                                {/* <img src={qrconcept} className='w-100' alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-none d-block position-relative">
                        <img src={gif} className='gif' alt="" />
                        <img src={qrconcept} className='w-100 z-1 position-relative' alt="" />
                    </div>
                    <div className="d-lg-none d-flex pb-3 gap-4  mt-4 flex-wrap justify-content-lg-start justify-content-center align-items-center">
                        <Button key="3" responsive100={true} style0={true} content="Enquire Now" />
                        <div className="d-lg-block d-none">
                            <Button style0={true} key="0" content={[<img src={Whatsapp} key={4} />, <span className='ms-2' key={6}>Whatsapp</span>]} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PreviewBanner