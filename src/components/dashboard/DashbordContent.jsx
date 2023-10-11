import React from 'react'
import DashboardBanner from './DashboardBanner'
import DownloadApp from './DownloadApp'
import LastTransaction from './LastTransaction'

const DashbordContent = () => {
  return (
    <>
      <div className='content-box'>
        <h4 className='mb-4'>Dashboard</h4>
        <div className='content'>
          <DashboardBanner />
          <DownloadApp/>
          <LastTransaction/>
        </div>
      </div>
    </>
  )
}

export default DashbordContent