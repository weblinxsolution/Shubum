import React from 'react'
import FeatureCard from './FeatureCard'
import Featureimg1 from '../assets/feature1.png'
import Featureimg2 from '../assets/feature2.png'
import Featureimg3 from '../assets/feature3.png'
import Featureimg4 from '../assets/feature4.png'
import Featureimg5 from '../assets/feature5.png'
const FeatureSection = () => {
    return (
        <>
            <section className='mt-5 pt-lg-5'>
                <div className="container">
                    <div className="row mx-0 justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="text-center h1responsive text-capitalize fw-800">
                                Features you would crave for!
                            </h1>
                            <p className="mb-0 mt-3 text-center">
                                By working with India's top 20,000+ retailers, the VisualEz app has all
                                <br className="d-lg-block d-none" />
                                that you require. See it yourself.
                            </p>
                        </div>
                    </div>
                    <div className="row mx-0 justify-content-center mt-5 gap-lg-0 gap-4 px-lg-1 mx-lg-2">
                        <div className="col-lg-4">
                            <FeatureCard imgsrc={Featureimg1} title="See Your Own Tiles" para="Provide us the PDF catalogs or take a photo of your designer tiles through our app." />
                        </div>
                        <div className="col-lg-4">
                            <FeatureCard imgsrc={Featureimg2} title="Works on all devices" para="Download the app on your android, ios or windows. Our app works on every platform." />
                        </div>

                    </div>
                    <div className="row mx-0 justify-content-center mt-4 gap-lg-0 gap-4 px-lg-1 mx-lg-2">
                        <div className="col-lg-4">
                            <FeatureCard imgsrc={Featureimg3} title="Tile Cutting & Rotation"
                                para='Cut your tiles into any size (12" I 8" etc.), rotate them or do the book match. Choice is yours!' />
                        </div>
                        <div className="col-lg-4 d-lg-block d-none">
                            <FeatureCard imgsrc={Featureimg4} title="Video Walkthroughs" para="Give your client an ultimate feel of your tiles through video walkthrough." />
                        </div>
                        <div className="col-lg-4 d-lg-block d-none">
                            <FeatureCard imgsrc={Featureimg5} title="Instant Sharing" para="Share with your customers the design they like within seconds" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureSection