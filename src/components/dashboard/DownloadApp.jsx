import React from 'react'
import windowImg from "../../assets/window.png";
import googleImg from "../../assets/google.png";
import appImg from "../../assets/app.png";
import Man from "../../assets/man.png";
import wrapper from "../../assets/bg-wrapper.png";

const DownloadApp = () => {
    return (
        <>
            <div className='downlaod-box d-flex align-items-center mt-4' style={{backgroundImage:`url('${wrapper}')`}}>
                <div className='col-lg-4 d-lg-block d-none position-relative mobile-img' style={{height:166}}>
                    <img src={Man} style={{position:'absolute',bottom:'-20px',left:'15%',width:'45%'}} alt="image" />
                </div>
                <div className='col-lg-8'>
                    <h1 className='fw-bold'>Download App</h1>
                    <div className='d-flex algin-items-center w-100 gap-3 download-img mt-3'>
                        <img src={windowImg} alt="image" />
                        <img src={googleImg} alt="image" />
                        <img src={appImg} alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadApp