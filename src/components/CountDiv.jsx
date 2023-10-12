import React from 'react'
import count1 from '../assets/count1.png'
import count2 from '../assets/count2.png'
import count3 from '../assets/count3.png'
import count4 from '../assets/count4.png'
const CountDiv = () => {
    return (
        <>
            <section className='container mt-5 pt-lg-4' >
                <div className="countdiv">
                    <div className="row mx-0 px-lg-2 mx-lg-3 justify-content-center  ">
                        <div className="col-lg-12 bg__gradient2 ">
                            <div className="row mx-0 justify-content-lg-around justify-content-center gap-lg-0 gap-5">
                                <div className="col-lg-3 text-center">
                                    <img src={count1} className='img-fluid' alt="" />
                                    <h2 className=' fw-700 mt-lg-3'>20,000+</h2>
                                    <h5 className=' fw-700 text-uppercase mb-0'>Retailers</h5>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img src={count2} className='img-fluid' alt="" />
                                    <h2 className=' fw-700 mt-lg-3'>10+</h2>
                                    <h5 className=' fw-700 text-uppercase mb-0'>brands</h5>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img src={count3} className='img-fluid' alt="" />
                                    <h2 className=' fw-700 mt-lg-3'>25 Lac+</h2>
                                    <h5 className=' fw-700 text-uppercase mb-0'>rooms created</h5>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img src={count4} className='img-fluid' alt="" />
                                    <h2 className=' fw-700 mt-lg-3'>10 Lac+</h2>
                                    <h5 className=' fw-700 text-uppercase mb-0'>Products Available</h5>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default CountDiv