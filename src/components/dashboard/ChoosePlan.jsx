import React from 'react'
import PricingCard from './PricingCard'

const ChoosePlan = () => {
    return (
        <>
            <h3 className="text-center mb-5 fw-800"> Choose Your Best Plan </h3>
            <div className="row mx-0 align-items-center gap-lg-0 gap-4 justify-content-center">
                <div className="col-lg-3 px-0 ">
                    <PricingCard title="Basic" duration="6 Months" para="Starter Plan 6 months package with all features included." amount="  ₹ 12,000 + GST" permonth="2000/Month" plantype="Starter plan" />
                </div>
                <div className="col-lg-3 px-0">
                    <PricingCard title="Standard" duration="12 Months" para="Pro Plan 12 months package with all features included." amount="  ₹ 18,000 + GST" permonth="1500/Month" plantype="pro plan" card={1} />
                </div>
                <div className="col-lg-3 px-0 ">
                    <PricingCard title="Pro" duration="18 Months" para="Max Plan 12 months package with all features included." amount="  ₹ 24,000 + GST"  permonth="1333/Month"  plantype="Max plan" />
                </div>
            </div>
        </>
    )
}

export default ChoosePlan