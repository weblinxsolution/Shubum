import React, { useState } from 'react'
import Sectionimg from '../assets/visimg1.png'
import visbg from '../assets/bgvisdiv.png'
import checkmark from '../assets/checkmark.png'
const VisualSection = (props) => {

    return (
        <>
            <section className={props.bgadd == 1 ? 'bg__white3desk py-2 overflow-hidden' : props.bgaddresponsive == 1 ? 'bg__responsive py-2 mt-3 overflow' : 'mt-4 overflow-hidden'}>
                <div className={props.bgadd == 1 ? "container py-lg-0" : "container"} >
                    <div className={props.flexrow ? `row mx-0 px-lg-1 mx-lg-1 align-items-center flex-lg-row-reverse gap-lg-0 gap-5` : `row mx-0 px-lg-1 mx-lg-1 align-items-center gap-lg-0 gap-5`}>

                        <div className={props.flexrow ? "col-lg-6 col-xxl-6 overflow-hidden" : props.flexrow2 ? "col-lg-6 col-xxl-6 overflow-hidden" : "col-lg-6 col-xxl-5 overflow-hidden"}>
                            {props.flexrow | props.flexrow2 ?
                                <span>
                                    <h2 className="text-dark h1responsive fw-800 d-lg-block d-xxl-none ">
                                        {/* Create your customer’s room in less than 5 min. */}
                                        {props.heading}
                                    </h2>
                                    <h1 className="text-dark h1responsive fw-800 d-none d-xxl-block">
                                        {/* Create your customer’s room in less than 5 min. */}
                                        {props.heading}
                                    </h1>
                                </span> : <span>
                                    <h2 className="text-dark h1responsive fw-800 d-lg-block d-xxl-none">
                                        {/* Create your customer’s room in less than 5 min. */}
                                        {props.heading}
                                    </h2>
                                    <h1 className="text-dark h1responsive fw-800 d-none d-xxl-block">
                                        {/* Create your customer’s room in less than 5 min. */}
                                        {props.heading}
                                    </h1>
                                </span>
                            }

                            {/* {:} */}
                            <div className="d-flex align-items-start mt-3 gap-1 mt-res-mob">
                                <div className='check-mark'>
                                    <img src={checkmark} alt="" />
                                </div>
                                <div>
                                    <p className="mb-0">
                                        {props.content1}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-1 mt-2 mt-res-mob">
                                <div className='check-mark'>
                                    <img src={checkmark} alt="" />
                                </div>
                                <div>
                                    <p className="mb-0">
                                        {props.content2}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={props.flexrow ? "col-lg-6 col-xxl-6 overflow-hidden" : props.flexrow2 ? "col-lg-6 col-xxl-6 overflow-hidden" : "col-lg-6 col-xxl-7 overflow-hidden"}>
                            <div className={props.flexrow | props.flexrow2 ? "visbg2" : "visbg"} style={{ background: ` url(${visbg})`,backgroundSize:'107% !important' }}>
                                <img src={props.sectionimg} className='w-100' alt="" />

                            </div>
                        </div>


                    </div>
                </div>


            </section >
        </>
    )
}

export default VisualSection