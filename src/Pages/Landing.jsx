import React from 'react'
import Header from '../components/Elements/Header'
import Banner from '../components/Banner'
import Brand from '../components/Brand'
import SoftwareSection from '../components/SoftwareSection'
import PowerfulSection from '../components/PowerfulSection'
import DynamicSection from '../components/DynamicSection'
import TestimonialSlider2 from '../components/TestimonialSlider2'
import Articles from '../components/Articles'
import Footer from '../components/Elements/Footer'
import AwardSection from '../components/AwardSection'

const Landing = () => {
    return (
        <>
            <Header />
            <Banner />
            <Brand />
            <SoftwareSection />
            {/* <PowerfulSection /> */}
            <AwardSection />
            <DynamicSection />
            <TestimonialSlider2 />
            <Articles />
            <Footer />

        </>
    )
}

export default Landing