import React from 'react'
import vector from '../../assets/vector.png'
import vector1 from '../../assets/vector1.png'

const DashboardBanner = () => {
    return (
        <div className='dashboard-banner position-relative overflow-hidden'>
            <div style={{position:'relative',zIndex:1}}>
                <h4 className='text-white fw-light'>Your subscription ends on</h4>
                <h4 className='text-white fw-bold mt-3'>22nd September 2023</h4>
                <button className='btn-theme-white mt-3 px-5 py-2'>Buy Plan</button>
            </div>
            <div>
                <img src={vector1} className='d-lg-block d-none' style={{ width: '70%', position: 'relative', zIndex: 1 }} alt="image" />
                <img className='ms-auto d-block vector_img' src={vector} style={{ width: '50%', height: '100%', position: 'absolute', top: 0, right: 0 }} alt="image" />
            </div>
        </div>
    )
}

export default DashboardBanner