import React from 'react'
import cloudx from '../../assets/cloudx.png'
const FileSection = () => {
    return (
        <>
            <div className="file__section mt-5">

                <div className="file__box">
                    <div className='text-center'>
                        <img src={cloudx} className='img-fluid' alt="" />
                        <h5 className="text-blue">
                            Browse File to Upload
                        </h5>

                    </div>
                </div>

                <p className="fs-5 fw-600 mt-5">
                    All Files Here
                </p>

            </div>
        </>
    )
}

export default FileSection