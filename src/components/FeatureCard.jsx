import React from 'react'

const FeatureCard = (props) => {
    return (
        <>
            <div className="feature__card">
                <div className="d-flex justify-content-center">
                    <img src={props.imgsrc} className='feature__img__1' alt="" />

                </div>
                <p className="text-center fs-5 mt-3 mb-1 fw-600">{props.title}</p>
                <p className="text-center mb-0 fw-300 text-black-50">{props.para}</p>
            </div>
        </>
    )
}

export default FeatureCard