import React from 'react'
import ChoosePlan from './ChoosePlan'

const PricingContent = () => {
    return (
        <>
            <div className='content-box'>
                <h4 className='mb-4'>Select Plan</h4>
                <div className='content'>
                    <ChoosePlan />
                </div>
            </div>
        </>
    )
}

export default PricingContent