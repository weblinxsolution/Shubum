import React from 'react'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'

const AwardSection = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row gap-lg-0 gap-3 justify-content-center mx-0'>
                        <div className='col-xl-4 col-lg-4 col-md-5 col-12'>
                            <div className='award-box py-5 text-center'>
                                <img src={icon1} alt="image" />
                                <h6>Create your customer’s room in less than 5 min.</h6>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-5 col-12'>
                            <div className='award-box py-5 text-center'>
                                <img src={icon2} alt="image" />
                                <h6>Choose from 1000+ Brands and 10 Lac+ Images Library</h6>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-5 col-12'>
                            <div className='award-box py-5 text-center'>
                                <img src={icon3} alt="image" />
                                <h6>Create automatic designs in pre-designed rooms</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AwardSection