import React from 'react'
import vector from '../../assets/vector.png'
import vector1 from '../../assets/vector1.png'
import bgDashboar from '../../assets/dashboard.png'
import db from '../../assets/db.png'

const DashboardBanner = () => {
    return (
        <div className='dashboard-banner position-relative p-4' style={{backgroundImage:`url('${db}')`,backgroundSize:'contain'}}>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ backgroundColor: '#FFF', borderRadius: 5, padding: 8 }}>
                    <h4 className='mb-0' style={{ color: '#2F96DB', fontSize: 17, lineHeight: '15px', textTransform: 'uppercase', fontWeight: 700 }}>India’s Best 3D Visualization </h4>
                </div>
                <h4 className='text-white fw-bold display-5 mt-lg-0 mt-3'>SOFTWARE</h4>
                <h4 className='text-white fw-light mt-4' style={{ fontSize: 16, lineHeight: '0px' }}>Your subscription ends on</h4>
                <h4 className='text-white fw-bold'>22nd September 2023</h4>
                <button className='btn-theme-white mt-3 px-5 py-2 fw-bold' style={{ borderRadius: 20 }}>Buy Plan</button>
            </div>
            <div>
                {/* <img src={bgDashboar} className='d-lg-block d-none' style={{ width: '70%', position: 'relative', zIndex: 1 }} alt="image" /> */}
                <img className='ms-auto d-lg-block d-none vector_img' src={bgDashboar} style={{ width: 425, position: 'absolute', right: 0, top: '-22px' }} alt="image" />
            </div>
        </div>
    )
}

export default DashboardBanner