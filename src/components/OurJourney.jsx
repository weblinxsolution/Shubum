import React from 'react'
import Journey1 from '../assets/journey1.png'
import Journey2 from '../assets/journey2.png'
import Journey3 from '../assets/journey3.png'
import Journey4 from '../assets/journey4.png'
import Journey5 from '../assets/journey5.png'
import Journey6 from '../assets/journey6.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurJourney = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1570,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1245,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="bg__white3 ourjourney py-5 mt-5">
                <div className="container pb-lg-3">

                    <div className="row mx-0 justify-content-center">
                        <div className="col-xl-12 px_0">
                            <h1 className="text-center fw-800 ">
                                Our Journey

                            </h1>
                            <div className="mt-5">
                                <Slider {...settings}>
                                    <div>
                                        <div className="journey__card">
                                            <div className="d-flex justify-content-center">
                                                <img src={Journey1} alt="" className="journey__img" />
                                            </div>
                                            <p className="text-center mt-2 fw-700 fs-6 mb-0">
                                                March 2017
                                            </p>
                                            <p className="journey__para fw-600 text-center " >
                                                Winners Tie
                                                Asia
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey__card">
                                            <div className="d-flex justify-content-center">
                                                <img src={Journey2} alt="" className="journey__img" />
                                            </div>
                                            <p className="text-center mt-2 fw-700 fs-6 mb-0">
                                                May 2017
                                            </p>
                                            <p className="journey__para fw-600 text-center " >
                                                1st Customer Acquisition
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey__card">
                                            <div className="d-flex justify-content-center">
                                                <img src={Journey3} alt="" className="journey__img" />
                                            </div>
                                            <p className="text-center mt-2 fw-700 fs-6 mb-0">
                                                Sep 2017
                                            </p>
                                            <p className="journey__para fw-600 text-center " >
                                                Co-Founded
                                                (Started in Pune)

                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey__card">
                                            <div className="d-flex justify-content-center">
                                                <img src={Journey4} alt="" className="journey__img" />
                                            </div>
                                            <p className="text-center mt-2 fw-700 fs-6 mb-0">
                                                Nov 2017
                                            </p>
                                            <p className="journey__para fw-600 text-center " >
                                            DIPP Certified ID: DIPP11463
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey__card">
                                            <div className="d-flex justify-content-center">
                                                <img src={Journey5} alt="" className="journey__img" />
                                            </div>
                                            <p className="text-center mt-2 fw-700 fs-6 mb-0">
                                                May 2019
                                            </p>
                                            <p className="journey__para fw-600 text-center " >
                                            100+ customers acquisition
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey__card">
                                            <div className="d-flex justify-content-center">
                                                <img src={Journey6} alt="" className="journey__img" />
                                            </div>
                                            <p className="text-center mt-2 fw-700 fs-6 mb-0">
                                                March 2018
                                            </p>
                                            <p className="journey__para fw-600 text-center " >
                                                India’s Top-55 startup by ET & IIM A
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey__card">
                                            <div className="d-flex justify-content-center">
                                                <img src={Journey2} alt="" className="journey__img" />
                                            </div>
                                            <p className="text-center mt-2 fw-700 fs-6 mb-0">
                                                May 2017
                                            </p>
                                            <p className="journey__para fw-600 text-center " >
                                            1st Customer Acquisition
                                            </p>
                                        </div>
                                    </div>


                                </Slider>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurJourney