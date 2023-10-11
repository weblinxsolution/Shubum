import React, { useState } from 'react'
import Button from './Button'
import ArticleCard from './ArticleCard'
import Article1 from '../assets/shubham1.png'
import Article2 from '../assets/shubham2.png'
import Article3 from '../assets/shubham3.png'

const Articles = () => {
    const [display, setDisplay] = useState('d-lg-block d-none');
    return (
        <>
            <div className="container  mt-5 mb-5">
                <div className="row mx-0 justify-content-center">
                    <div className="col-lg-12 pe-lg-4">
                        <div className="row mx-0">
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap justify-content-between align-items-center gap-lg-0 gap-4">
                                    <div className="">
                                        <h1 className="fw-800">
                                            Latest News and Articles
                                        </h1>
                                        <p className='text__color mb-0 mt-2 d-lg-block d-none'>
                                            It is a long established fact that a reader will be distracted by the readable <br className="d-lg-block d-none" /> content of a page when looking at its layout
                                        </p>
                                    </div>
                                    <div className='d-lg-block d-none'>
                                        <Button content="See More News" style4={true} />
                                    </div>

                                </div>
                                <div className="row mx-0 mt-lg-5 mt-3 gap-lg-0 gap-4">
                                    <div className="col-lg-4 px-lg-0">
                                        <ArticleCard title="Most Innovative Smart Home Tech Startups" para="We’ve ranked the top 101 3D Technology companies in India. The companies, startups and institutions listed in this article are all exceptional companies, well worth a follow." srcimg={Article1} />
                                    </div>
                                    <div className={`col-lg-4 ${display} px-lg-0`}>
                                        <ArticleCard title="Featured by WhatsApp" pb3={true} para="How VisualEz truly leveraged WhatsApp business tool for their success" srcimg={Article2} />
                                    </div>
                                    <div className={`col-lg-4 ${display} px-lg-0`}>
                                        <ArticleCard title="Winning all startup pitches" para="‘VisualEz’ a startup by MBA (Innovation and Entrepreneurship) students from SIBM, Pune is bringing galore of laurels" srcimg={Article3} />
                                    </div>
                                </div>
                                <div className='d-lg-none d-block text-center mt-4 mt-lg-0' onClick={() => {
                                    setDisplay('d-lg-block d-block')
                                }}>
                                    <Button content="See More News" style4={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Articles