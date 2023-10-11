import React from 'react'
import windowImg from "../../assets/window.png";
import googleImg from "../../assets/google.png";
import appImg from "../../assets/app.png";

const DownloadApp = () => {
  return (
        <>
            <div className='downlaod-box'>
                <h4>Download App</h4>
                <div className='d-flex algin-items-center w-100 gap-3 download-img'>
                    <img src={windowImg} alt="image" />
                    <img src={googleImg} alt="image" />
                    <img src={appImg} alt="image" />
                </div>
            </div>
        </>
  )
}

export default DownloadApp