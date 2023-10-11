import React from 'react'
import Sidebar from '../layout/Sidebar'
import '../Dashboard.css'
import Header from '../layout/Header'
import UploadFile from '../components/dashboard/UploadFile'

const Upload = () => {
    return (
        <>
            <div className='contianer-fluid'>
                <div className='row mx-0'>
                    <div className='col-lg-2 px-0 d-lg-block d-none'>
                        <Sidebar active={3} />
                    </div>
                    <div className='col-lg-10 px-0'>
                        <Header />
                        <UploadFile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upload