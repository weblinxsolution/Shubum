import React from 'react'
import img8k from '../assets/8k.png'
import rocket from '../assets/rocket.png'
import sofa from '../assets/sofa.png'
const KeyFeatures = () => {
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center d-lg-block d-none  fw-700">
                    Key Features
                </h2>
                <div className="row mx-0 justify-content-center">
                    <div className="col-lg-12 col-xxl-12 px-0">
                        <div className="row mx-0 mt-4 gap-lg-0 gap-4">
                            <div className="col-lg-4">
                                <div className="keyfeature__card mobile-res-text-v2">
                                    <div className="d-flex justify-content-center">
                                        <img src={img8k} alt="" className='img-fluid' />

                                    </div>
                                    <p className=" fw-700 text-center mt-3 mb-0">Get top notch <br className="d-block d-lg-none" /> 8K Quality Previews</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="keyfeature__card mobile-res-text-v2">
                                    <div className="d-flex justify-content-center">
                                        <img src={rocket} alt="" className='img-fluid' />

                                    </div>
                                    <p className=" fw-700 text-center mt-3 mb-0">Get all your previews done <br className="d-block d-lg-none" /> within a week</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="keyfeature__card mobile-res-text-v2">
                                    <div className="d-flex justify-content-center">
                                        <img src={sofa} alt="" className='img-fluid' />

                                    </div>
                                    <p className=" fw-700 text-center mt-3 mb-0">Get unique ambiances in all <br className="d-block d-lg-none" /> previews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default KeyFeatures