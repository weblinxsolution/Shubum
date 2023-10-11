import React from 'react'
import Bannerbg from '../assets/bannerbg.png'
import Button from './Button'
import Laptopimg from '../assets/laptop.png'
import shadow from '../assets/box-shadow.png'
import video from '../assets/roomup.mp4'
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <>
            <div className="wrapper">
                <section style={{ background: `url(${Bannerbg})` }} className='bg__banner pt-4'>
                    <h1 className="text-center text-white fw-900 pt-5">
                        Explore Our Powerful Solutions For
                    </h1>
                    <div className="d-flex flex-lg-row flex-column justify-content-center gap-lg-4 gap-3 mt-4 align-items-center">
                        <Link to="/Visualizer">
                            <Button style4={true} content="3D Visualizer" />
                        </Link>
                        <Link to="/Preview">
                            <Button style4={true} content="360 Preview" />
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center mt-5 position-relative">
                        {/* <img src={Laptopimg} className='laptopbanner' alt="" /> */}
                        <div className="laptop__img" style={{ background: `url(${Laptopimg})` }}>
                            <video className='laptopbanner' controls muted autoPlay  loop>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>

                        {/* <video ></video> */}
                        <img src={shadow} className='laptopshadow' alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Banner