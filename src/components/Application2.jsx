import React, { useEffect, useState } from 'react'
import application from '../assets/application.png'
import { GrCatalog } from 'react-icons/gr'
import { FaEarthAmericas } from 'react-icons/fa6'
import { FaWindowRestore } from 'react-icons/fa6'
import { BsCalendar4Week } from 'react-icons/bs'
import exportimg from '../assets/exportimg.png'
import catalogimg from '../assets/catalogimg.png'
import sunheartimg from '../assets/sunheartimg.png'
import displayimg from '../assets/displayimg.png'
import exhiimg from '../assets/exhiimg.png'
const imageList = [catalogimg, sunheartimg, displayimg, exhiimg];

function preloadImages(imagePaths) {
    return imagePaths.map((path) => {
        const img = new Image();
        img.src = path;
        return img;
    });
}
const Application2 = () => {
    const [myimg, setImg] = useState(catalogimg);
    const [active, setStatus] = useState(1);
    const [hideImage, setHideImage] = useState(false);

    useEffect(() => {
        const preloadedImages = preloadImages(imageList);

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % imageList.length;
            setHideImage(true); // Apply "hide" class
            setTimeout(() => {
                setImg(preloadedImages[currentIndex].src);

                setImg(imageList[currentIndex]);
                setStatus(currentIndex + 1);
                setHideImage(false); // Remove "hide" class after a brief delay
            }, 500); // Adjust the delay as needed for the transition
        }, 5000);


        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div className="container-lg bg__responsive pt-lg-0 pt-4 pb-5 px_0 bg mt-5 mb-5">
                <div className="row mx-0 justify-content-center">
                    <img src={application} className='w-100 bg__app d-lg-block d-none' alt="" />
                    <div className="col-lg-10 col-xxl-9">
                        <div className="row mx-0">
                            <div className="col-lg-12 px-0">

                                <h5 className="d-lg-none fw-800 d-block text-lg-start text-center mb-4" >
                                    Enhance Your Product Marketing
                                </h5>

                                <div className="row mx-0 align-items-center gap-lg-0 gap-5 mt-lg-5">
                                    <div className="col-lg-5">
                                        <div className="d-flex flex-row flex-lg-column justify-content-center ms-lg-5 gap-lg-4 gap-2">
                                            <button onClick={(() => { setImg(catalogimg), setStatus(1) })} className={`tab__button ${active === 1 ? 'active-tab' : ''}`}>
                                                <GrCatalog className='me-2 d-lg-inline-block d-none' /> Catalog
                                            </button>
                                            <button onClick={(() => { setImg(sunheartimg), setStatus(2) })} className={`tab__button ${active === 2 ? 'active-tab' : ''}`}>
                                                <FaEarthAmericas className='me-2 d-lg-inline-block d-none' /> Website
                                            </button>
                                            <button onClick={(() => { setImg(displayimg), setStatus(3) })} className={`tab__button ${active === 3 ? 'active-tab' : ''}`}>
                                                <FaWindowRestore className='me-2 d-lg-inline-block d-none' /> Display
                                            </button>
                                            <button onClick={(() => { setImg(exhiimg), setStatus(4) })} className={`tab__button ${active === 4 ? 'active-tab' : ''}`}>
                                                <BsCalendar4Week className='me-2 d-lg-inline-block d-none' /> Exhibitions
                                            </button>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={`image-container ${hideImage ? 'hide' : ''}`} >
                                            <img src={myimg} className='export__img' alt="" />

                                        </div>
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

export default Application2