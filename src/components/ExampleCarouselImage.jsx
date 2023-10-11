import React from 'react'
import image from '../assets/Background.png'
import Person from '../assets/Person.png'
const ExampleCarouselImage = () => {
    return (
        <>
            {/* <img src={image} alt="" /> */}
            <div>
                <h1 className='text-center pt-5 fw-800'>
                    Our Happy Family
                </h1>
                <div className="mb-lg-0 mb-5 pb-lg-0 pb-4">
                    <div className="d-flex justify-content-center mb-5 mt-5">
                        <img src={Person} alt="" className='img-fluid mb-5 pb-5' />

                    </div>
                </div>

            </div>
            {/* <div className=""></div> */}
        </>
    )
}

export default ExampleCarouselImage