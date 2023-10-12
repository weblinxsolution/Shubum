import React from 'react'
import Header from '../components/Elements/Header'
import Footer from '../components/Elements/Footer'
import AboutBanner from '../components/AboutBanner'
import Whoarewe from '../components/Whoarewe'
import OurJourney from '../components/OurJourney'
import WhatWeSolving from '../components/WhatWeSolving'
import CoreTeam from '../components/CoreTeam'

const About = () => {
    return (
        <>
            <Header />
            <AboutBanner />
            <Whoarewe/>
            <OurJourney/>
            <WhatWeSolving/>
            <CoreTeam/>
            <Footer />
        </>

    )
}

export default About