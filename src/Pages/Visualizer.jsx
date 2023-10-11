import React from 'react'
import Header from '../components/Elements/Header'
import BannerVisualizer from '../components/BannerVisualizer'
import VisualSection from '../components/VisualSection'
import SectionImg1 from '../assets/visimg1.png'
import SectionImg2 from '../assets/visimg2.png'
import SectionImg3 from '../assets/visimg3.png'
import FeatureSection from '../components/FeatureSection'
import CountDiv from '../components/CountDiv'

import Footer from '../components/Elements/Footer'
import FreeTrial from '../components/FreeTrial'
import TestimonialSlider2 from '../components/TestimonialSlider2'
const Visualizer = () => {
    return (
        <>
            <Header />
            <BannerVisualizer />
            <VisualSection bgaddresponsive={true} sectionimg={SectionImg1} content1="Design any layout within minutes" content2="Render it instantly in 8K Quality" heading="Create your customer’s room in less than 5 min." />

            <VisualSection bgadd={true} sectionimg={SectionImg2} content1="Choose brands that you deal in" content2="Morbi Brands data also available" flexrow={true} heading="Choose from 1000+ Brands and 10 Lac+ Images Library" />
            <VisualSection bgaddresponsive={true} sectionimg={SectionImg3} flexrow2={true} content1="Quick and Simple Designing" content2="Do designing as per your customer's requirement" heading="Create automatic designs in pre-designed rooms" />
            <FeatureSection />
            <CountDiv />
            <TestimonialSlider2 />
            <FreeTrial />
            <Footer />

        </>
    )
}

export default Visualizer