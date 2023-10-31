import React from 'react'
import aman from '../assets/aman.png'
import shubham from '../assets/shubham.png'
const CoreTeam = () => {
    return (
        <>
            <div className="bg__white3 mt-5 mb-0 pb-5">
                <div className="container-lg px_0  pt-5">
                    <h1 className="text-center fw-800">
                        Core Team
                    </h1>

                    <div className="d-flex gap-5 flex-lg-row flex-column justify-content-center align-items-center mt-5">
                        <div>
                            <div className="d-flex justify-content-center">

                                <img src={aman} className='CoreTeamimg' alt="" />
                            </div>
                            <p className="text-center fs-5 mt-2 mb-0 fw-700">
                                Aman Khandewal
                            </p>
                            <p className="text-center fw-700 small">
                                Co Founder & Director
                            </p>
                        </div>
                            <hr className="d-lg-none d-flex w-100 my-0" />
                        <div className='ps-xl-4'>
                            <div className="d-flex justify-content-center">
                                <img src={shubham} className='CoreTeamimg' alt="" />
                            </div>
                            <p className="text-center fs-5 mt-2 mb-0 fw-700">
                                Shubham Maheshwari
                            </p>
                            <p className="text-center fw-700 small">
                                Co Founder & Director
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CoreTeam