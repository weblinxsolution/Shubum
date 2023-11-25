import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import washroom from '../../assets/new-360-img.png'
import homeimg from '../../assets/Somany.png'
import stylevinta from '../../assets/logo OBL.png'
import brandimg from '../../assets/GREENPANEL 2.png'
import natureimg from '../../assets/Sunhearrt Logo.png'
import classicimg from '../../assets/RAK.png'
import user from '../../assets/us.png'
import { useNavigate } from 'react-router-dom';
const Customer = () => {
    return (
        <>
            {/* <section className='Login__Section'>
                <div className="container">
                    <div className="row mx-0 align-items-center justify-content-center gap-lg-0 gap-5">
                        <div className="col-xxl-8 col-lg-10">
                            <h1 className='fw-medium my-4 text-center'>
                                Customer
                            </h1>
                            <div className='row justify-content-center'>
                                <div className='col-lg-11 border rounded-2 p-lg-5 py-4'>
                                    <div className="login__input  px-lg-5 px-3">
                                        <div className="form-control  mb-4 p-3">
                                            <input type="text" className='nofocus border-0 bg-transparent' placeholder='Full Name   ' />
                                        </div>
                                        <div className="form-control ">
                                            <div className="d-flex align-items-center">
                                                <DropdownButton id="dropdown-basic-button" variant='light' className='nofocus nohover bg-light' title={
                                                    <div className='d-inline-block'>
                                                        <div className='d-flex align-items-center gap-2 pe-1'>
                                                            <div>
                                                                <img src={India} className='tell_img' alt="" />

                                                            </div>
                                                            <span className='d-flex tel_nm align-items-center gap-1' style={{ color: '#808080' }}>+91 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 18 18" fill="none">
                                                                <path d="M8.90404 14.2252L1.39459 6.21499C1.22076 6.02973 1.125 5.78241 1.125 5.51871C1.125 5.255 1.22076 5.00769 1.39459 4.82242L1.94748 4.23252C2.30775 3.84867 2.89329 3.84867 3.25302 4.23252L9.559 10.9589L15.872 4.22506C16.0458 4.03979 16.2775 3.9375 16.5246 3.9375C16.772 3.9375 17.0037 4.03979 17.1777 4.22506L17.7304 4.81496C17.9042 5.00037 18 5.24754 18 5.51124C18 5.77495 17.9042 6.02226 17.7304 6.20753L10.2141 14.2252C10.0397 14.4109 9.80691 14.5129 9.55941 14.5123C9.31096 14.5129 9.07827 14.4109 8.90404 14.2252Z" fill="#808080" />
                                                            </svg></span>
                                                        </div>
                                                    </div>

                                                }>
                                                    <Dropdown.Item href="#/action-1">        <div className='d-inline-block'>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <div>
                                                                <img src={India} className='tell_img' alt="" />

                                                            </div>
                                                            <div className='tel_nm' style={{ color: '#808080' }}> +91</div>
                                                        </div>
                                                    </div></Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">        <div className='d-inline-block'>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <div>
                                                                <img src={India} className='tell_img' alt="" />
                                                            </div>
                                                            <div className='tel_nm' style={{ color: '#808080' }}> +91</div>
                                                        </div>
                                                    </div></Dropdown.Item>

                                                </DropdownButton>
                                                <input type="text" className='nofocus border-0 bg-transparent w-100' id='tel_input' placeholder='Phone Number' />
                                            </div>
                                        </div>
                                        <div className="form-control  mt-4 p-3">
                                            <input type="text" className='nofocus border-0 bg-transparent' placeholder='Enter Otp' />
                                        </div>
                                        <div className="mt-2 text-lg-start text-center">
                                            <p className='small text__color '>
                                                Didn't receive the OTP <span className="text__primary fw-bold">Resend</span>
                                            </p>
                                        </div>
                                        <div className='rt__btns d-flex flex-column gap-3'>
                                            <button className='rt_register'>Register</button>
                                            <button className='rt_full'>Fill up the Form to get free 2 days trial!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
            <section className='landing__Page'>
                {/* Only Logo NavBar */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} style={{ width: 150 }} alt="logo" />
                        </a>
                    </div>
                </nav>
                {/* Section 2 */}
                <div className='container mt-5'>
                    <div className='row mx-0'>
                        <div className="col-lg-6 border-right">
                            <div>
                                <div className='landing__heading'>
                                    <h1 className='fw-900 text-uppercase'>Introducing 3D <br />
                                        Software Solution</h1>
                                </div>
                                <div className="landing_text">
                                    <p>
                                        Introducing our cutting-edge <span className='fw-800 text-underline'> 3D Tile Visualizer,</span> a <br className='d-lg-block d-none' /> powerful tool that empowers you to create stunning designs using the tiles of your choice.
                                    </p>
                                </div>
                                <div className="check-text d-flex align-items-center gap-2 mt-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M22.8643 10.1155C23.0467 9.69493 23.0691 9.22215 22.9272 8.7862C22.7853 8.35026 22.4889 7.98122 22.0939 7.74859L19.9503 6.47582C19.9248 6.46214 19.9026 6.44307 19.8852 6.41993C19.8679 6.39679 19.8558 6.37014 19.8498 6.34184L19.2915 3.89676C19.1902 3.45112 18.9307 3.05734 18.5611 2.78841C18.1916 2.51948 17.7371 2.39363 17.2819 2.43418L14.7922 2.65748C14.7645 2.66403 14.7355 2.66336 14.7082 2.65554C14.6808 2.64772 14.6559 2.63301 14.6359 2.61282L12.749 0.960439C12.4045 0.663399 11.9647 0.5 11.5097 0.5C11.0548 0.5 10.615 0.663399 10.2704 0.960439L8.38361 2.61282C8.36355 2.63301 8.33865 2.64772 8.31128 2.65554C8.28391 2.66336 8.255 2.66403 8.2273 2.65748L5.73757 2.43418C5.28132 2.39162 4.82524 2.51724 4.45513 2.78742C4.08502 3.0576 3.8264 3.45371 3.72791 3.90123L3.16968 6.3463C3.16369 6.3746 3.15159 6.40125 3.13424 6.4244C3.11688 6.44754 3.09469 6.46661 3.0692 6.48028L0.925567 7.74859C0.530517 7.98122 0.234145 8.35026 0.0922566 8.7862C-0.0496315 9.22215 -0.027245 9.69493 0.155201 10.1155L1.14886 12.4155C1.17059 12.4692 1.17059 12.5292 1.14886 12.5829L0.155201 14.8829C-0.0263357 15.3018 -0.0482049 15.7728 0.0937216 16.2068C0.235648 16.6408 0.53155 17.0078 0.925567 17.2386L3.08036 18.527C3.12576 18.559 3.1576 18.6068 3.16968 18.661L3.72791 21.1061C3.82734 21.5528 4.08636 21.9478 4.45637 22.2171C4.82638 22.4864 5.28194 22.6114 5.73757 22.5687L8.2273 22.3342C8.25579 22.3323 8.28436 22.3363 8.31124 22.3459C8.33812 22.3555 8.36275 22.3705 8.38361 22.39L10.2704 24.0424C10.6158 24.3377 11.0553 24.5 11.5097 24.5C11.9642 24.5 12.4036 24.3377 12.749 24.0424L14.6359 22.39C14.6567 22.3705 14.6813 22.3555 14.7082 22.3459C14.7351 22.3363 14.7637 22.3323 14.7922 22.3342L17.2819 22.5687C17.7375 22.6114 18.1931 22.4864 18.5631 22.2171C18.9331 21.9478 19.1921 21.5528 19.2915 21.1061L19.8498 18.661C19.8558 18.6327 19.8679 18.6061 19.8852 18.5829C19.9026 18.5598 19.9248 18.5407 19.9503 18.527L22.0939 17.2431C22.4879 17.0123 22.7838 16.6453 22.9257 16.2113C23.0677 15.7773 23.0458 15.3063 22.8643 14.8873L21.8706 12.5874C21.8489 12.5337 21.8489 12.4736 21.8706 12.4199L22.8643 10.1155ZM16.5227 10.2495L10.985 15.9212C10.8226 16.0768 10.607 16.1647 10.3821 16.1668C10.2059 16.1684 10.0337 16.1137 9.89085 16.0105L6.60841 13.6659C6.42779 13.5356 6.30632 13.3389 6.27072 13.1191C6.23513 12.8992 6.28833 12.6742 6.41861 12.4936C6.5489 12.313 6.74561 12.1915 6.96545 12.1559C7.1853 12.1203 7.41029 12.1735 7.59091 12.3038L10.2816 14.2353L15.3281 9.0772C15.4047 8.99815 15.4962 8.9351 15.5974 8.8917C15.6986 8.8483 15.8074 8.82542 15.9175 8.82438C16.0276 8.82334 16.1367 8.84417 16.2387 8.88565C16.3407 8.92713 16.4334 8.98844 16.5115 9.06603C16.6688 9.22214 16.7581 9.43393 16.7602 9.65547C16.7623 9.87702 16.6769 10.0905 16.5227 10.2495Z" fill="#2A91D6" />
                                        </svg>
                                    </div>
                                    <div className='text-blue text-uppercase fw-600'>
                                        Create your customer’s room in less than 5 min.
                                    </div>
                                </div>
                                <div className="check-text d-flex align-items-center gap-2 mt-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M22.8643 10.1155C23.0467 9.69493 23.0691 9.22215 22.9272 8.7862C22.7853 8.35026 22.4889 7.98122 22.0939 7.74859L19.9503 6.47582C19.9248 6.46214 19.9026 6.44307 19.8852 6.41993C19.8679 6.39679 19.8558 6.37014 19.8498 6.34184L19.2915 3.89676C19.1902 3.45112 18.9307 3.05734 18.5611 2.78841C18.1916 2.51948 17.7371 2.39363 17.2819 2.43418L14.7922 2.65748C14.7645 2.66403 14.7355 2.66336 14.7082 2.65554C14.6808 2.64772 14.6559 2.63301 14.6359 2.61282L12.749 0.960439C12.4045 0.663399 11.9647 0.5 11.5097 0.5C11.0548 0.5 10.615 0.663399 10.2704 0.960439L8.38361 2.61282C8.36355 2.63301 8.33865 2.64772 8.31128 2.65554C8.28391 2.66336 8.255 2.66403 8.2273 2.65748L5.73757 2.43418C5.28132 2.39162 4.82524 2.51724 4.45513 2.78742C4.08502 3.0576 3.8264 3.45371 3.72791 3.90123L3.16968 6.3463C3.16369 6.3746 3.15159 6.40125 3.13424 6.4244C3.11688 6.44754 3.09469 6.46661 3.0692 6.48028L0.925567 7.74859C0.530517 7.98122 0.234145 8.35026 0.0922566 8.7862C-0.0496315 9.22215 -0.027245 9.69493 0.155201 10.1155L1.14886 12.4155C1.17059 12.4692 1.17059 12.5292 1.14886 12.5829L0.155201 14.8829C-0.0263357 15.3018 -0.0482049 15.7728 0.0937216 16.2068C0.235648 16.6408 0.53155 17.0078 0.925567 17.2386L3.08036 18.527C3.12576 18.559 3.1576 18.6068 3.16968 18.661L3.72791 21.1061C3.82734 21.5528 4.08636 21.9478 4.45637 22.2171C4.82638 22.4864 5.28194 22.6114 5.73757 22.5687L8.2273 22.3342C8.25579 22.3323 8.28436 22.3363 8.31124 22.3459C8.33812 22.3555 8.36275 22.3705 8.38361 22.39L10.2704 24.0424C10.6158 24.3377 11.0553 24.5 11.5097 24.5C11.9642 24.5 12.4036 24.3377 12.749 24.0424L14.6359 22.39C14.6567 22.3705 14.6813 22.3555 14.7082 22.3459C14.7351 22.3363 14.7637 22.3323 14.7922 22.3342L17.2819 22.5687C17.7375 22.6114 18.1931 22.4864 18.5631 22.2171C18.9331 21.9478 19.1921 21.5528 19.2915 21.1061L19.8498 18.661C19.8558 18.6327 19.8679 18.6061 19.8852 18.5829C19.9026 18.5598 19.9248 18.5407 19.9503 18.527L22.0939 17.2431C22.4879 17.0123 22.7838 16.6453 22.9257 16.2113C23.0677 15.7773 23.0458 15.3063 22.8643 14.8873L21.8706 12.5874C21.8489 12.5337 21.8489 12.4736 21.8706 12.4199L22.8643 10.1155ZM16.5227 10.2495L10.985 15.9212C10.8226 16.0768 10.607 16.1647 10.3821 16.1668C10.2059 16.1684 10.0337 16.1137 9.89085 16.0105L6.60841 13.6659C6.42779 13.5356 6.30632 13.3389 6.27072 13.1191C6.23513 12.8992 6.28833 12.6742 6.41861 12.4936C6.5489 12.313 6.74561 12.1915 6.96545 12.1559C7.1853 12.1203 7.41029 12.1735 7.59091 12.3038L10.2816 14.2353L15.3281 9.0772C15.4047 8.99815 15.4962 8.9351 15.5974 8.8917C15.6986 8.8483 15.8074 8.82542 15.9175 8.82438C16.0276 8.82334 16.1367 8.84417 16.2387 8.88565C16.3407 8.92713 16.4334 8.98844 16.5115 9.06603C16.6688 9.22214 16.7581 9.43393 16.7602 9.65547C16.7623 9.87702 16.6769 10.0905 16.5227 10.2495Z" fill="#2A91D6" />
                                        </svg>
                                    </div>
                                    <div className='text-blue text-uppercase fw-600'>
                                        Choose from 1000+ Brands and 10 Lac+ Images Library
                                    </div>
                                </div>
                                <div className="check-text d-flex align-items-center gap-2 mt-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M22.8643 10.1155C23.0467 9.69493 23.0691 9.22215 22.9272 8.7862C22.7853 8.35026 22.4889 7.98122 22.0939 7.74859L19.9503 6.47582C19.9248 6.46214 19.9026 6.44307 19.8852 6.41993C19.8679 6.39679 19.8558 6.37014 19.8498 6.34184L19.2915 3.89676C19.1902 3.45112 18.9307 3.05734 18.5611 2.78841C18.1916 2.51948 17.7371 2.39363 17.2819 2.43418L14.7922 2.65748C14.7645 2.66403 14.7355 2.66336 14.7082 2.65554C14.6808 2.64772 14.6559 2.63301 14.6359 2.61282L12.749 0.960439C12.4045 0.663399 11.9647 0.5 11.5097 0.5C11.0548 0.5 10.615 0.663399 10.2704 0.960439L8.38361 2.61282C8.36355 2.63301 8.33865 2.64772 8.31128 2.65554C8.28391 2.66336 8.255 2.66403 8.2273 2.65748L5.73757 2.43418C5.28132 2.39162 4.82524 2.51724 4.45513 2.78742C4.08502 3.0576 3.8264 3.45371 3.72791 3.90123L3.16968 6.3463C3.16369 6.3746 3.15159 6.40125 3.13424 6.4244C3.11688 6.44754 3.09469 6.46661 3.0692 6.48028L0.925567 7.74859C0.530517 7.98122 0.234145 8.35026 0.0922566 8.7862C-0.0496315 9.22215 -0.027245 9.69493 0.155201 10.1155L1.14886 12.4155C1.17059 12.4692 1.17059 12.5292 1.14886 12.5829L0.155201 14.8829C-0.0263357 15.3018 -0.0482049 15.7728 0.0937216 16.2068C0.235648 16.6408 0.53155 17.0078 0.925567 17.2386L3.08036 18.527C3.12576 18.559 3.1576 18.6068 3.16968 18.661L3.72791 21.1061C3.82734 21.5528 4.08636 21.9478 4.45637 22.2171C4.82638 22.4864 5.28194 22.6114 5.73757 22.5687L8.2273 22.3342C8.25579 22.3323 8.28436 22.3363 8.31124 22.3459C8.33812 22.3555 8.36275 22.3705 8.38361 22.39L10.2704 24.0424C10.6158 24.3377 11.0553 24.5 11.5097 24.5C11.9642 24.5 12.4036 24.3377 12.749 24.0424L14.6359 22.39C14.6567 22.3705 14.6813 22.3555 14.7082 22.3459C14.7351 22.3363 14.7637 22.3323 14.7922 22.3342L17.2819 22.5687C17.7375 22.6114 18.1931 22.4864 18.5631 22.2171C18.9331 21.9478 19.1921 21.5528 19.2915 21.1061L19.8498 18.661C19.8558 18.6327 19.8679 18.6061 19.8852 18.5829C19.9026 18.5598 19.9248 18.5407 19.9503 18.527L22.0939 17.2431C22.4879 17.0123 22.7838 16.6453 22.9257 16.2113C23.0677 15.7773 23.0458 15.3063 22.8643 14.8873L21.8706 12.5874C21.8489 12.5337 21.8489 12.4736 21.8706 12.4199L22.8643 10.1155ZM16.5227 10.2495L10.985 15.9212C10.8226 16.0768 10.607 16.1647 10.3821 16.1668C10.2059 16.1684 10.0337 16.1137 9.89085 16.0105L6.60841 13.6659C6.42779 13.5356 6.30632 13.3389 6.27072 13.1191C6.23513 12.8992 6.28833 12.6742 6.41861 12.4936C6.5489 12.313 6.74561 12.1915 6.96545 12.1559C7.1853 12.1203 7.41029 12.1735 7.59091 12.3038L10.2816 14.2353L15.3281 9.0772C15.4047 8.99815 15.4962 8.9351 15.5974 8.8917C15.6986 8.8483 15.8074 8.82542 15.9175 8.82438C16.0276 8.82334 16.1367 8.84417 16.2387 8.88565C16.3407 8.92713 16.4334 8.98844 16.5115 9.06603C16.6688 9.22214 16.7581 9.43393 16.7602 9.65547C16.7623 9.87702 16.6769 10.0905 16.5227 10.2495Z" fill="#2A91D6" />
                                        </svg>
                                    </div>
                                    <div className='text-blue text-uppercase fw-600'>
                                        Create automatic designs in pre-designed rooms
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5 custom-border d-flex justify-contentlg-center">
                            <div className='row mx-auto choose-row'>
                                <div className='landin__heading-2 col-lg-12'>
                                    <h3 className='fw-bold'>
                                        Customer
                                    </h3>
                                </div>
                                <div className="chose-your-hobby col-lg-11 mt-4">
                                    <div className='choose-input'>
                                        <div>
                                            <img src={user} alt="" />
                                        </div>
                                        <input type="text" placeholder='First Name' />
                                    </div>
                                    <div className='choose-input'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="28" viewBox="0 0 17 28" fill="none">
                                            <path d="M14.191 0H1.86707C0.840339 0 0 0.839549 0 1.86707V25.7749C0 26.8024 0.840339 27.6427 1.86707 27.6427H14.191C15.2177 27.6427 16.0581 26.804 16.0581 25.7757V1.86707C16.0581 0.839549 15.2177 0 14.191 0ZM6.05771 1.34581H10.0003C10.1251 1.34581 10.2262 1.4469 10.2262 1.57248C10.2262 1.69726 10.1251 1.79836 10.0003 1.79836H6.05771C5.93292 1.79836 5.83183 1.69726 5.83183 1.57248C5.83183 1.4469 5.93292 1.34581 6.05771 1.34581ZM8.02903 26.7092C7.51329 26.7092 7.09549 26.2914 7.09549 25.7749C7.09549 25.2583 7.51329 24.8413 8.02903 24.8413C8.54476 24.8413 8.96256 25.2583 8.96256 25.7749C8.96256 26.2914 8.54476 26.7092 8.02903 26.7092ZM14.7588 24.1874H1.29921V2.96093H14.7588V24.1874Z" fill="#808080" />
                                        </svg>
                                        <input type="text" placeholder='Phone Number' />
                                    </div>
                                    <div className='choose-input'>
                                        <input type="text" placeholder='Enter OTP' />
                                    </div>
                                    <div className="btn-blue d-flex justify-content-start w-100 mt-3">
                                        <button className='w-50'>
                                            Register
                                        </button>
                                    </div>
                                    <h4 className="fw-bolder my-3" style={{ color: '#27AE60' }}>Fill up the Form to get free 2 days trial!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section-3 */}
                <div className="trusted-bg mt-5">
                    <div className="container">
                        <h2 className='fw-800 text-center'>
                            Trusted By 20,000+ Tile Retailers Across India
                        </h2>
                    </div>
                </div>
                <div className='container-fluid customColor'>
                    <div className='container'>
                        <iframe className='img__dynamic' style={{ borderStyle: "none" }} src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//visualez-storage.s3.ap-south-1.amazonaws.com/cloudrender/360views/646f3c7f1bb0ec473e7e9692_gv002_0000.jpg&autoLoad=true"></iframe>
                    </div>
                </div>
                <div className="customMargin">
                </div>
                <div>

                    <div className="brand__div brand__div-1 w-100">
                        <p className="text-center mb-3 fw-700 fs-1 fs__6 mt-lg-2" style={{ color: '#2F2F2F' }}>
                            +40 Tiles and Laminate Brands
                        </p>
                        <div className="d-flex flex-row  mb-lg-3 mb-md-4 align-items-center  justify-content-center  brand__div-inner1">
                            <img src={homeimg} className='' alt="" />
                            <img src={stylevinta} className='' alt="" />
                            <img src={brandimg} className='' alt="" />
                            <img src={natureimg} className='' alt="" />
                            <img src={classicimg} className='' alt="" />
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default Customer