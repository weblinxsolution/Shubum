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
                                <h3 className='fw-800 mb-0 text-lg-start text-center'>
                                    Applicable for multiple industries
                                </h3>
                            </div>
                            <div className="col-lg-7 ">
                                <p className="text__color small mb-0 text-lg-start text-center ps-lg-3 ">
                                    Our 360° QR codes go beyond traditional static QR codes by providing interactive and dynamic content to engage customers and enhance user experiences.
                                </p>
                            </div>
                        </div>
                        <div className='row mx-0 mt-4 align-items-center gap-lg-0 gap-4'>
                            <div className="col-lg-6 pe-lg-5">

                                <img src={laminate} alt="" className="w-100 rounded-3 " style={{
                                    border: "3px solid var(--black)"
                                }} />
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