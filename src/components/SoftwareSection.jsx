import React from 'react'
import Building from '../assets/Building.png'
import check from '../assets/checkmark.png'
import Button from './Button'
import { Link } from 'react-router-dom'
const SoftwareSection = () => {
    return (
        <>
            <div className="container">
                <div className="row mx-0 gap-lg-0 gap-5 mt-5 align-items-center">

                    <div className="col-lg-5 ps-lg-4">
                        <div className="ps-lg-5 text-lg-start text-center">
                            <h1 className='fw-800'>
                                Introducing 3D <br className="d-lg-block d-none" />
                                Software Solution
                            </h1>
                            <p className="text__color mt-4">
                            Introducing our cutting-edge 3D Tile Visualizer, a powerful tool that empowers you to create stunning designs using the tiles of your choice.
                            </p>
                            {/* <div className="d-flex gap-2">
                                <img src={check} className='img-fluid' alt="" />
                                <p className="mb-0 text__color">
                                    Lorem Ipsum is simply dummy text
                                </p>
                            </div>
                            <div className="d-flex gap-2 mt-4">
                                <img src={check} className='img-fluid' alt="" />
                                <p className="mb-0 text__color">
                                    Lorem Ipsum is simply dummy text
                                </p>
                            </div>
                            <div className="d-flex gap-2 mt-4">
                                <img src={check} className='img-fluid' alt="" />
                                <p className="mb-0 text__color">
                                    Lorem Ipsum is simply dummy text
                                </p>
                            </div> */}
                            <div className="mt-4 pt-2">
                                <Link to='/Visualizer'>
                                    <Button content="Get Started" style6={true} />
                                </Link>

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">
                        <img src={Building} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoftwareSection