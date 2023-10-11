import React from 'react'
import homeimg from '../assets/Somany.png'
import stylevinta from '../assets/logo OBL.png'
import brandimg from '../assets/GREENPANEL 2.png'
import natureimg from '../assets/Sunhearrt Logo.png'
import classicimg from '../assets/RAK.png'

const Brand = () => {
    return (
        <>
            <div className="container">
                <div className="brand__div">
                    <div className="d-flex flex-row  mb-lg-0 mb-md-4 align-items-center  justify-content-center  brand__div-inner">
                        <img src={homeimg} className='' alt="" />
                        <img src={stylevinta} className='' alt="" />
                        <img src={brandimg} className='' alt="" />
                        <img src={natureimg} className='' alt="" />
                        <img src={classicimg} className='' alt="" />
                    </div>
                    <p className="text-center mb-0 fw-700 fs-5 fs__6 mt-lg-2" style={{color:'#5D5D5D'}}>
                        +40 Tiles and Laminate Brands
                    </p>

                </div>
            </div>
        </>
    )
}

export default Brand