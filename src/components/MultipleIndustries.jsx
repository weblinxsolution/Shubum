import React, { useEffect, useState } from 'react'
import laminate from '../assets/gif.gif'
import img3602 from '../assets/3602.png'
import Button from './Button'
const MultipleIndustries = () => {
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
            <div className="container">
                <div className="row justify-content-center mx-0 mt-5 pt-lg-5">
                    <div className="col-lg-12 col-xxl-12">
                        <div className="row mx-0 gap-lg-0 gap-4 align-items-end ">
                            <div className="col-lg-5">
                                <h1 className='fw-800 mb-0 text-lg-start text-center'>
                                    Applicable for multiple industries
                                </h1>
                            </div>
                            <div className="col-lg-7 ">
                                {/* <p className="text__color small mb-0 text-lg-start text-center ps-lg-3">
                                    Our 360° QR codes go beyond traditional static QR codes by providing interactive and dynamic content to engage customers and enhance user experiences.
                                </p> */}
                            </div>
                        </div>
                        <div className='row mx-0 align-items-center gap-lg-0 gap-4'>
                            <div className="col-lg-6 pe-lg-5">

                                {/* <img src={laminate} alt="" className="w-100 rounded-3 " style={{
                                    border: "3px solid var(--black)"
                                }} /> */}
                                <div className="position-relative h_100 ">
                                    {/* <img src={imgdynamic} alt="" className='img__dynamic' /> */}
                                    {/* <iframe className='img__dynamic' allowFullScreen style={{ borderStyle: "none" }} src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//visualez-storage.s3.ap-south-1.amazonaws.com/cloudrender/360views/646f3c7f1bb0ec473e7e9692_gv002_0000.jpg"></iframe> */}
                                    <iframe className='img__dynamic' allowFullScreen style={{ borderStyle: "none" }} src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//visualez-storage.s3.ap-south-1.amazonaws.com/cloudrender/360views/646f3c7f1bb0ec473e7e9692_gv002_0000.jpg&autoLoad=true"></iframe>
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
                            <div className="col-lg-6 px_0">

                                <div className="ps-lg-0">
                                    <h2 className='fw-800 text-lg-start text-center'>
                                        <img src={img3602} className='img-fluid img360' alt="" /> For <span className="text__primary">
                                            <span className={`image-container ${hideImage ? 'hide' : ''}`} >
                                                {mytext}
                                            </span>
                                        </span>
                                    </h2>
                                    <p className="text__color small text-lg-start text-center">
                                        Dynamic 360° QR codes are advanced QR code solutions that offer a wide range of applications across various industries, including tiles, laminates, wallpapers, and more.
                                    </p>
                                    <div className="mt-4 text-lg-start text-center">
                                        <Button style0={true} responsive100={true} content="Enquire Now" />
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultipleIndustries