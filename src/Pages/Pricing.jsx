import React from 'react'
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import DashbordContent from '../Components/dashboard/DashbordContent';
import '../Dashboard.css'
import PricingContent from '../components/dashboard/PricingContent';
const Pricing = () => {
    return (
        <>
            <div className='contianer-fluid'>
                <div className='row mx-0'>
                    <div className='col-lg-2 px-0 d-lg-block d-none'>
                        <Sidebar active={2} />
                    </div>
                    <div className='col-lg-10 px-0'>
                        <Header />
                        <PricingContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing