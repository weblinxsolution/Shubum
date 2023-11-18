import React from 'react'
import logo from '../assets/logo.png'
import dot from '../assets/do.png'
import Sidebar from './Sidebar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className='d-lg-none d-block'>
            <img src={dot} style={{ width: 30 }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" alt="dot" />
          </div>
          <a href="#">
            <img src={logo} style={{ width: 150 }} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#HeadNavBar" aria-controls="HeadNavBar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-xl-5 gap-md-3 gap-3" id="HeadNavBar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-5 gap-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#2F2F2F" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/landing">Learn</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <button className='btn-theme'>Logout</button>
          </div>
        </div>
      </nav >
      <div class="offcanvas offcanvas-start" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-body">
          <Sidebar />
        </div>
      </div>
    </div >
  )
}

export default Header