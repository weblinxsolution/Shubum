import React, { useEffect, useState } from 'react'
import shadow from '/shadow.png'
import application from '../assets/application.png'
import { GrCatalog } from 'react-icons/gr'
import { FaEarthAmericas } from 'react-icons/fa6'
import { FaWindowRestore } from 'react-icons/fa6'
import { BsCalendar4Week } from 'react-icons/bs'
import exportimg from '../assets/exportimg.png'
import catalogimg from '../assets/catalogimg.png'
import sunheartimg from '../assets/sunheartimg.png'
import displayimg from '../assets/displayimg.png'
import exhiimg from '../assets/exhiimg.png'
const imageList = [catalogimg, sunheartimg, displayimg, exhiimg];
function preloadImages(imagePaths) {
    return imagePaths.map((path) => {
        const img = new Image();
        img.src = path;
        return img;
    });
}
const Application = () => {


    const [myimg, setImg] = useState(catalogimg);
    const [active, setStatus] = useState(1);
    const [hideImage, setHideImage] = useState(false);

    useEffect(() => {
        const preloadedImages = preloadImages(imageList);

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % imageList.length;
            setHideImage(true); // Apply "hide" class
            setTimeout(() => {
                setImg(preloadedImages[currentIndex].src);

                setImg(imageList[currentIndex]);
                setStatus(currentIndex + 1);
                setHideImage(false); // Remove "hide" class after a brief delay
            }, 500); // Adjust the delay as needed for the transition
        }, 5000);


        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div className="row mx-0 justify-content-center mt-lg-5">
                <div className="col-lg-12 pe-lg-4 px_0">
                    <div className="row mx-0">
                        <div className="col-lg-12 px_0 position-relative">
                            <img src={shadow} className='w-100 bg__shadow' alt="" />
                            <img src={application} className='w-100 bg__app' alt="" />

                            <div className="row mx-0 align-items-center gap-lg-0 gap-5 mt-lg-5">
                                <div className="col-lg-5">
                                    <div className="d-flex flex-row flex-lg-column justify-content-center ms-lg-5 gap-lg-4 gap-2">
                                        <button onClick={(() => { setImg(catalogimg), setStatus(1) })} className={`tab__button ${active === 1 ? 'active-tab' : ''}`}>
                                            {/* <GrCatalog className='me-2 d-lg-inline-block d-none' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                                <g clip-path="url(#clip0_101_122)">
                                                    <path d="M20.4648 17.5725C20.571 17.7801 20.7822 17.9 21.0006 17.9C21.0918 17.9 21.1853 17.879 21.2724 17.8346C21.3078 17.8166 24.8394 16.0226 26.5812 15.4724C26.8968 15.3723 27.0719 15.035 26.9717 14.7195C26.8721 14.4038 26.5373 14.2281 26.2188 14.3277C24.384 14.9079 20.8764 16.6899 20.7276 16.7655C20.4324 16.9155 20.3148 17.2767 20.4648 17.5725Z" fill="black" />
                                                    <path d="M21.0006 10.7003C21.0918 10.7003 21.1854 10.6793 21.2724 10.6349C21.3078 10.6169 24.8394 8.82293 26.5812 8.27274C26.8968 8.17254 27.0719 7.83533 26.9718 7.51977C26.8721 7.20414 26.5374 7.02836 26.2188 7.12799C24.384 7.7082 20.8764 9.49019 20.7276 9.56578C20.4325 9.71575 20.3148 10.0769 20.4648 10.3727C20.571 10.5803 20.7822 10.7003 21.0006 10.7003Z" fill="black" />
                                                    <path d="M35.3999 9.50021C35.0681 9.50021 34.7999 9.76902 34.7999 10.1002V33.5C34.7999 34.4924 33.9923 35.3 32.9999 35.3H18.6001V33.9194C19.4749 33.6134 21.7536 32.9 24 32.9C29.2266 32.9 32.7756 34.0574 32.8109 34.0694C32.9915 34.1294 33.1932 34.0994 33.3509 33.9866C33.5075 33.8738 33.5999 33.6926 33.5999 33.4999V7.10026C33.5999 6.81887 33.4049 6.57524 33.1301 6.51463C33.1301 6.51463 32.6597 6.40965 31.8557 6.262C31.5311 6.20202 31.2173 6.41802 31.1573 6.74321C31.0973 7.0696 31.3127 7.38221 31.6385 7.44218C31.9451 7.49857 32.2019 7.54836 32.3999 7.58801V32.7026C31.0403 32.3462 28.0212 31.7 23.9999 31.7C21.3857 31.7 18.8178 32.5586 18.0234 32.8496C17.3171 32.5376 15.1824 31.7 12.6 31.7C8.46719 31.7 5.06282 32.3816 3.60005 32.7278V7.5646C4.79824 7.26999 8.33704 6.50022 12.6 6.50022C14.7876 6.50022 16.6637 7.18119 17.4 7.48901V31.1C17.4 31.316 17.5163 31.5159 17.7041 31.622C17.8919 31.7288 18.1235 31.7258 18.309 31.6142C18.3684 31.5789 24.3131 28.028 29.5895 26.2695C29.8348 26.1873 29.9999 25.9587 29.9999 25.7001V1.10026C29.9999 0.903454 29.9033 0.719237 29.7413 0.60709C29.5805 0.494872 29.3741 0.469067 29.1887 0.538114C24.3881 2.33866 19.5306 5.36144 19.482 5.39147C19.2012 5.56725 19.1154 5.93744 19.2911 6.21826C19.4664 6.49909 19.8366 6.58487 20.1179 6.40909C20.1623 6.3809 24.3881 3.75172 28.7999 1.97754V25.2706C24.7043 26.6937 20.4281 29.0175 18.5999 30.0579V7.10026C18.5999 6.87287 18.4715 6.66524 18.2681 6.56328C18.1649 6.51231 15.7062 5.30027 12.6 5.30027C7.17844 5.30027 3.01028 6.47329 2.83506 6.52363C2.57765 6.59682 2.40004 6.83265 2.40004 7.10026V33.5001C2.40004 33.6879 2.48884 33.8655 2.63826 33.9789C2.74387 34.0587 2.87106 34.1001 3.00008 34.1001C3.05528 34.1001 3.11047 34.0923 3.16447 34.0767C3.20589 34.0653 7.35485 32.9001 12.6 32.9001C14.7936 32.9001 16.668 33.5829 17.4 33.8895V35.3001H3.00008C2.0077 35.3001 1.2001 34.4925 1.2001 33.5001V10.1003C1.2001 9.76909 0.931294 9.50029 0.600124 9.50029C0.268955 9.50029 0.000152588 9.76909 0.000152588 10.1003V33.5001C0.000152588 35.1542 1.34592 36.5001 3.00015 36.5001H32.9999C34.6541 36.5001 35.9999 35.1543 35.9999 33.5001V10.1003C35.9999 9.76902 35.7317 9.50021 35.3999 9.50021Z" fill="black" />
                                                    <path d="M20.4648 13.9724C20.571 14.18 20.7822 14.2999 21.0006 14.2999C21.0918 14.2999 21.1853 14.2789 21.2724 14.2345C21.3078 14.2165 24.8394 12.4225 26.5812 11.8723C26.8968 11.7722 27.0719 11.4349 26.9717 11.1194C26.8721 10.8037 26.5373 10.628 26.2188 10.7276C24.384 11.3078 20.8764 13.0898 20.7276 13.1654C20.4324 13.3154 20.3148 13.6766 20.4648 13.9724Z" fill="black" />
                                                    <path d="M20.4648 21.1725C20.571 21.3802 20.7822 21.5001 21.0006 21.5001C21.0918 21.5001 21.1853 21.4791 21.2724 21.4347C21.3078 21.4167 24.8394 19.6227 26.5812 19.0725C26.8968 18.9724 27.0719 18.6351 26.9717 18.3196C26.8721 18.0039 26.5373 17.8282 26.2188 17.9278C24.384 18.508 20.8764 20.29 20.7276 20.3656C20.4324 20.5156 20.3148 20.8768 20.4648 21.1725Z" fill="black" />
                                                    <path d="M14.5369 11.6352C10.8319 10.7658 6.62172 11.8734 6.44475 11.9208C6.12497 12.0066 5.93477 12.3354 6.02055 12.6558C6.09255 12.9239 6.33492 13.1004 6.59957 13.1004C6.65118 13.1004 6.70335 13.0938 6.75559 13.08C6.79581 13.0686 10.8494 12.0024 14.2634 12.8034C14.5843 12.8784 14.909 12.6786 14.9846 12.3558C15.0601 12.0336 14.8597 11.7108 14.5369 11.6352Z" fill="black" />
                                                    <path d="M14.5369 15.235C10.8319 14.3662 6.62172 15.4732 6.44475 15.5206C6.12497 15.6064 5.93477 15.9353 6.02055 16.2556C6.09255 16.5238 6.33492 16.7002 6.59957 16.7002C6.65118 16.7002 6.70335 16.6936 6.75559 16.6798C6.79581 16.6684 10.8494 15.6022 14.2634 16.4032C14.5843 16.4782 14.909 16.2784 14.9846 15.9556C15.0601 15.6334 14.8597 15.3106 14.5369 15.235Z" fill="black" />
                                                    <path d="M20.4648 24.7726C20.571 24.9803 20.7822 25.1002 21.0006 25.1002C21.0918 25.1002 21.1853 25.0792 21.2724 25.0348C21.3078 25.0168 24.8394 23.2228 26.5812 22.6726C26.8968 22.5724 27.0719 22.2352 26.9717 21.9197C26.8721 21.6041 26.5373 21.4283 26.2188 21.5279C24.384 22.1081 20.8764 23.8901 20.7276 23.9657C20.4324 24.1156 20.3148 24.4769 20.4648 24.7726Z" fill="black" />
                                                    <path d="M14.5369 18.8347C10.8319 17.966 6.62172 19.0723 6.44475 19.1203C6.12497 19.2061 5.93477 19.535 6.02055 19.8553C6.09255 20.1235 6.33492 20.3005 6.59957 20.3005C6.65118 20.3005 6.70335 20.2934 6.75559 20.2795C6.79581 20.2681 10.8494 19.2019 14.2634 20.0029C14.5843 20.0779 14.909 19.8781 14.9846 19.5553C15.0601 19.2331 14.8597 18.9103 14.5369 18.8347Z" fill="black" />
                                                    <path d="M14.5369 26.0351C10.8319 25.1657 6.62172 26.2733 6.44475 26.3207C6.12497 26.4065 5.93477 26.7353 6.02055 27.0557C6.09255 27.3239 6.33492 27.5009 6.59957 27.5009C6.65118 27.5009 6.70335 27.4937 6.75559 27.4799C6.79581 27.4685 10.8494 26.4023 14.2634 27.2033C14.5843 27.2777 14.909 27.0785 14.9846 26.7557C15.0601 26.4335 14.8597 26.1107 14.5369 26.0351Z" fill="black" />
                                                    <path d="M14.5369 22.4351C10.8319 21.5657 6.62172 22.6727 6.44475 22.7207C6.12497 22.8065 5.93477 23.1353 6.02055 23.4557C6.09255 23.7239 6.33492 23.9009 6.59957 23.9009C6.65118 23.9009 6.70335 23.8937 6.75559 23.8799C6.79581 23.8685 10.8494 22.8023 14.2634 23.6033C14.5843 23.6783 14.909 23.4785 14.9846 23.1557C15.0601 22.8335 14.8597 22.5107 14.5369 22.4351Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_101_122">
                                                        <rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Catalog
                                        </button>
                                        <button onClick={(() => { setImg(sunheartimg), setStatus(2) })} className={`tab__button ${active === 2 ? 'active-tab' : ''}`}>
                                            {/* <FaEarthAmericas className='me-2 d-lg-inline-block d-none' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="39" viewBox="0 0 36 39" fill="none">
                                                <path d="M18 2C10.3961 2 0 7.74724 0 20C0 31.9409 9.99921 38 18 38C31.7268 38 36 25.974 36 20C36 11.1843 29.2535 2 18 2ZM13.826 3.6937C11.948 5.29528 10.389 7.94567 9.38268 11.2339C8.07874 10.4614 6.8811 9.50472 5.81811 8.39213C8.01496 6.08898 10.7929 4.47323 13.826 3.6937ZM5.04567 9.25669C6.23622 10.4969 7.58976 11.5528 9.06378 12.389C8.51102 14.5362 8.18504 16.9173 8.14252 19.4189H1.17638C1.30394 15.6843 2.66457 12.1197 5.04567 9.25669ZM5.04567 30.7433C2.65748 27.8803 1.30394 24.3158 1.17638 20.5811H8.14252C8.18504 23.0898 8.51102 25.4638 9.06378 27.611C7.59685 28.4543 6.24331 29.5032 5.04567 30.7433ZM5.81811 31.615C6.8811 30.5024 8.07874 29.5457 9.38268 28.7732C10.389 32.0543 11.948 34.7118 13.826 36.3134C10.7929 35.5268 8.01496 33.911 5.81811 31.615ZM17.4189 36.7953C14.4 36.4126 11.7992 33.0394 10.3961 28.2063C12.5646 27.1079 14.9598 26.4913 17.4189 26.3992V36.7953ZM17.4189 25.2441C14.8535 25.3291 12.3591 25.9598 10.0984 27.0654C9.62362 25.0811 9.34016 22.8913 9.29764 20.5811H17.4189V25.2441ZM17.4189 19.4189H9.29764C9.34016 17.1087 9.62362 14.9189 10.0984 12.9346C12.3661 14.0402 14.8606 14.6709 17.4189 14.7559V19.4189ZM17.4189 13.6008C14.9528 13.5157 12.5646 12.8921 10.3961 11.7937C11.7992 6.95354 14.4 3.5874 17.4189 3.20472V13.6008ZM30.9543 9.25669C33.3354 12.1197 34.6961 15.6843 34.8236 19.4189H27.8646C27.8221 16.9102 27.4961 14.5362 26.9433 12.389C28.4102 11.5457 29.7638 10.4969 30.9543 9.25669ZM30.1819 8.38504C29.1189 9.49764 27.9213 10.4543 26.6173 11.2268C25.611 7.94567 24.052 5.29528 22.174 3.68661C25.2071 4.47323 27.985 6.08898 30.1819 8.38504ZM18.5811 3.20472C21.6 3.5874 24.2008 6.96063 25.6039 11.7937C23.4354 12.8921 21.0472 13.5087 18.5811 13.6008V3.20472ZM18.5811 14.7559C21.1465 14.6709 23.6409 14.0402 25.9016 12.9346C26.3764 14.9189 26.6598 17.1087 26.7024 19.4189H18.5811V14.7559ZM18.5811 20.5811H26.7024C26.6598 22.8913 26.3764 25.0811 25.9016 27.0654C23.6409 25.9528 21.1465 25.322 18.5811 25.2441V20.5811ZM18.5811 36.7953V26.3992C21.0472 26.4843 23.4354 27.1079 25.6039 28.2063C24.2008 33.0465 21.6 36.4126 18.5811 36.7953ZM22.174 36.3063C24.052 34.7047 25.611 32.0543 26.6173 28.7661C27.9213 29.5386 29.1189 30.4953 30.1819 31.6079C27.985 33.911 25.2071 35.5268 22.174 36.3063ZM30.9543 30.7433C29.7638 29.5032 28.4102 28.4543 26.9433 27.611C27.4961 25.4638 27.8221 23.0827 27.8646 20.5811H34.8236C34.6961 24.3158 33.3354 27.8803 30.9543 30.7433Z" fill="black" />
                                            </svg>
                                            Website
                                        </button>
                                        <button onClick={(() => { setImg(displayimg), setStatus(3) })} className={`tab__button ${active === 3 ? 'active-tab' : ''}`}>
                                            {/* <FaWindowRestore className='me-2 d-lg-inline-block d-none' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                                <g clip-path="url(#clip0_101_147)">
                                                    <g mask="url(#mask0_101_147)">
                                                        <path d="M2.10931 35.7969H24.6093C25.3828 35.7969 26.0156 35.1641 26.0156 34.3906V11.8906C26.0156 11.1172 25.3828 10.4844 24.6093 10.4844H2.10931C1.33588 10.4844 0.703064 11.1172 0.703064 11.8906V34.3906C0.703064 35.1641 1.33588 35.7969 2.10931 35.7969Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M16.5237 13.2969H23.2031V32.9844H3.51559V13.2969H10.1956" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.3593 15.7578C14.5724 16.4596 15.3887 17.7711 15.3887 19.2734C15.3887 20.7757 14.5724 22.0873 13.3593 22.7891C12.1462 22.0873 11.33 20.7757 11.33 19.2734C11.33 17.7711 12.1462 16.4596 13.3593 15.7578Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.3593 30.5234C12.1462 29.8217 11.33 28.5101 11.33 27.0078C11.33 25.5055 12.1462 24.194 13.3593 23.4922C14.5724 24.194 15.3887 25.5055 15.3887 27.0078C15.3887 28.5101 14.5724 29.8217 13.3593 30.5234Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.9765 23.1406C6.67829 21.9275 7.98983 21.1112 9.49213 21.1112C10.9944 21.1112 12.306 21.9275 13.0078 23.1406C12.306 24.3537 10.9944 25.1699 9.49213 25.1699C7.98983 25.1699 6.67829 24.3537 5.9765 23.1406Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M20.7422 23.1406C20.0404 24.3537 18.7288 25.1699 17.2265 25.1699C15.7242 25.1699 14.4127 24.3537 13.7109 23.1406C14.4127 21.9275 15.7242 21.1112 17.2265 21.1112C18.7288 21.1112 20.0404 21.9275 20.7422 23.1406Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M3.73865 13.5198C5.09273 13.1582 6.59728 13.5084 7.65956 14.5707C8.72184 15.633 9.07214 17.1376 8.71052 18.4916C7.35651 18.8533 5.8519 18.503 4.78961 17.4407C3.72733 16.3784 3.37711 14.8738 3.73865 13.5198Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M3.73865 32.7612C3.37711 31.4071 3.72733 29.9026 4.78961 28.8403C5.8519 27.778 7.35651 27.4278 8.71052 27.7893C9.07214 29.1433 8.72184 30.648 7.65956 31.7102C6.59728 32.7725 5.09273 33.1227 3.73865 32.7612Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M22.98 32.7612C21.626 33.1227 20.1214 32.7725 19.0591 31.7102C17.9968 30.648 17.6466 29.1433 18.0082 27.7893C19.3622 27.4278 20.8668 27.778 21.9291 28.8403C22.9913 29.9026 23.3416 31.4071 22.98 32.7612Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M22.98 13.5198C23.3416 14.8738 22.9913 16.3784 21.9291 17.4407C20.8668 18.503 19.3622 18.8533 18.0082 18.4916C17.6466 17.1376 17.9968 15.633 19.0591 14.5707C20.1214 13.5084 21.626 13.1582 22.98 13.5198Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.71051 18.4919L18.0081 27.7896" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.71051 27.7896L18.0081 18.4919" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M26.7188 26.5156H33.8906C34.6641 26.5156 35.2969 25.8828 35.2969 25.1094V2.60938C35.2969 1.83594 34.6641 1.20312 33.8906 1.20312H11.3906C10.6172 1.20312 9.98438 1.83594 9.98438 2.60938V9.78132" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7969 9.78132V4.01563H32.4844V23.7031H26.7188" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M20.6313 10.3965C20.6181 10.2635 20.6113 10.1287 20.6113 9.99219C20.6113 8.48989 21.4276 7.17835 22.6407 6.47656C23.8538 7.17835 24.67 8.48989 24.67 9.99219C24.67 10.099 24.6659 10.2048 24.6578 10.3096" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M26.1807 11.843C26.2887 11.8344 26.3977 11.83 26.5079 11.83C28.0102 11.83 29.3217 12.6462 30.0235 13.8593C29.3217 15.0724 28.0102 15.8887 26.5079 15.8887C26.3959 15.8887 26.285 15.8841 26.1754 15.8752" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.02 4.23855C14.374 3.877 15.8786 4.22723 16.9409 5.28951C18.0032 6.35179 18.3534 7.85641 17.9919 9.21041C16.6379 9.57196 15.1332 9.22173 14.071 8.15945C13.0087 7.09717 12.6584 5.59255 13.02 4.23855Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M32.2614 23.4799C30.9074 23.8415 29.4027 23.4913 28.3405 22.429C27.2782 21.3667 26.9279 19.8621 27.2895 18.5081C28.6435 18.1465 30.1481 18.4968 31.2104 19.559C32.2727 20.6213 32.623 22.1259 32.2614 23.4799Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M32.2614 4.23855C32.623 5.59255 32.2727 7.09717 31.2104 8.15945C30.1481 9.22173 28.6435 9.57196 27.2895 9.21041C26.9279 7.85641 27.2782 6.35179 28.3405 5.28951C29.4027 4.22723 30.9074 3.877 32.2614 4.23855Z" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M26.0354 17.2541L27.2895 18.5083M17.9919 9.21067L19.2218 10.4406" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M25.6728 10.8271L27.2895 9.21045" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.3593 13.2969H13.3598" stroke="black" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_101_147">
                                                        <rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Display
                                        </button>
                                        <button onClick={(() => { setImg(exhiimg), setStatus(4) })} className={`tab__button ${active === 4 ? 'active-tab' : ''}`}>
                                            {/* <BsCalendar4Week className='me-2 d-lg-inline-block d-none' />  */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                                <path d="M32.0625 3.875H28.6875V3.3125C28.6875 2.86495 28.5097 2.43572 28.1932 2.11926C27.8768 1.80279 27.4476 1.625 27 1.625C26.5524 1.625 26.1232 1.80279 25.8068 2.11926C25.4903 2.43572 25.3125 2.86495 25.3125 3.3125V3.875H19.6875V3.3125C19.6875 2.86495 19.5097 2.43572 19.1932 2.11926C18.8768 1.80279 18.4476 1.625 18 1.625C17.5524 1.625 17.1232 1.80279 16.8068 2.11926C16.4903 2.43572 16.3125 2.86495 16.3125 3.3125V3.875H10.6875V3.3125C10.6875 2.86495 10.5097 2.43572 10.1932 2.11926C9.87678 1.80279 9.44755 1.625 9 1.625C8.55245 1.625 8.12322 1.80279 7.80676 2.11926C7.49029 2.43572 7.3125 2.86495 7.3125 3.3125V3.875H3.9375C3.19184 3.87584 2.47695 4.17242 1.94969 4.69969C1.42242 5.22695 1.12584 5.94184 1.125 6.6875V32.5625C1.12584 33.3082 1.42242 34.023 1.94969 34.5503C2.47695 35.0776 3.19184 35.3742 3.9375 35.375H32.0625C32.8082 35.3742 33.523 35.0776 34.0503 34.5503C34.5776 34.023 34.8742 33.3082 34.875 32.5625V6.6875C34.8742 5.94184 34.5776 5.22695 34.0503 4.69969C33.523 4.17242 32.8082 3.87584 32.0625 3.875ZM26.4375 3.3125C26.4375 3.16332 26.4968 3.02024 26.6023 2.91475C26.7077 2.80926 26.8508 2.75 27 2.75C27.1492 2.75 27.2923 2.80926 27.3977 2.91475C27.5032 3.02024 27.5625 3.16332 27.5625 3.3125V6.6875C27.5625 6.83668 27.5032 6.97976 27.3977 7.08525C27.2923 7.19074 27.1492 7.25 27 7.25C26.8508 7.25 26.7077 7.19074 26.6023 7.08525C26.4968 6.97976 26.4375 6.83668 26.4375 6.6875V3.3125ZM17.4375 3.3125C17.4375 3.16332 17.4968 3.02024 17.6023 2.91475C17.7077 2.80926 17.8508 2.75 18 2.75C18.1492 2.75 18.2923 2.80926 18.3977 2.91475C18.5032 3.02024 18.5625 3.16332 18.5625 3.3125V6.6875C18.5625 6.83668 18.5032 6.97976 18.3977 7.08525C18.2923 7.19074 18.1492 7.25 18 7.25C17.8508 7.25 17.7077 7.19074 17.6023 7.08525C17.4968 6.97976 17.4375 6.83668 17.4375 6.6875V3.3125ZM8.4375 3.3125C8.4375 3.16332 8.49676 3.02024 8.60225 2.91475C8.70774 2.80926 8.85082 2.75 9 2.75C9.14918 2.75 9.29226 2.80926 9.39775 2.91475C9.50324 3.02024 9.5625 3.16332 9.5625 3.3125V6.6875C9.5625 6.83668 9.50324 6.97976 9.39775 7.08525C9.29226 7.19074 9.14918 7.25 9 7.25C8.85082 7.25 8.70774 7.19074 8.60225 7.08525C8.49676 6.97976 8.4375 6.83668 8.4375 6.6875V3.3125ZM3.9375 5H7.3125V6.6875C7.3125 7.13505 7.49029 7.56428 7.80676 7.88074C8.12322 8.19721 8.55245 8.375 9 8.375C9.44755 8.375 9.87678 8.19721 10.1932 7.88074C10.5097 7.56428 10.6875 7.13505 10.6875 6.6875V5H16.3125V6.6875C16.3125 7.13505 16.4903 7.56428 16.8068 7.88074C17.1232 8.19721 17.5524 8.375 18 8.375C18.4476 8.375 18.8768 8.19721 19.1932 7.88074C19.5097 7.56428 19.6875 7.13505 19.6875 6.6875V5H25.3125V6.6875C25.3125 7.13505 25.4903 7.56428 25.8068 7.88074C26.1232 8.19721 26.5524 8.375 27 8.375C27.4476 8.375 27.8768 8.19721 28.1932 7.88074C28.5097 7.56428 28.6875 7.13505 28.6875 6.6875V5H32.0625C32.5099 5.00052 32.9388 5.17848 33.2552 5.49483C33.5715 5.81119 33.7495 6.24011 33.75 6.6875V10.625H2.25V6.6875C2.25052 6.24011 2.42848 5.81119 2.74483 5.49483C3.06119 5.17848 3.49011 5.00052 3.9375 5ZM32.0625 34.25H3.9375C3.49011 34.2495 3.06119 34.0715 2.74483 33.7552C2.42848 33.4388 2.25052 33.0099 2.25 32.5625V11.75H33.75V32.5625C33.7495 33.0099 33.5715 33.4388 33.2552 33.7552C32.9388 34.0715 32.5099 34.2495 32.0625 34.25Z" fill="black" />
                                                <path d="M30.9375 15.6875H28.6875C28.5383 15.6875 28.3952 15.7468 28.2898 15.8523C28.1843 15.9577 28.125 16.1008 28.125 16.25V18.5C28.125 18.6492 28.1843 18.7923 28.2898 18.8977C28.3952 19.0032 28.5383 19.0625 28.6875 19.0625H30.9375C31.0867 19.0625 31.2298 19.0032 31.3352 18.8977C31.4407 18.7923 31.5 18.6492 31.5 18.5V16.25C31.5 16.1008 31.4407 15.9577 31.3352 15.8523C31.2298 15.7468 31.0867 15.6875 30.9375 15.6875ZM30.375 17.9375H29.25V16.8125H30.375V17.9375Z" fill="black" />
                                                <path d="M19.6875 26.9375H17.4375C17.2883 26.9375 17.1452 26.9968 17.0398 27.1023C16.9343 27.2077 16.875 27.3508 16.875 27.5V29.75C16.875 29.8992 16.9343 30.0423 17.0398 30.1477C17.1452 30.2532 17.2883 30.3125 17.4375 30.3125H19.6875C19.8367 30.3125 19.9798 30.2532 20.0852 30.1477C20.1907 30.0423 20.25 29.8992 20.25 29.75V27.5C20.25 27.3508 20.1907 27.2077 20.0852 27.1023C19.9798 26.9968 19.8367 26.9375 19.6875 26.9375ZM19.125 29.1875H18V28.0625H19.125V29.1875Z" fill="black" />
                                                <path d="M14.0625 15.6875H11.8125C11.6633 15.6875 11.5202 15.7468 11.4148 15.8523C11.3093 15.9577 11.25 16.1008 11.25 16.25V18.5C11.25 18.6492 11.3093 18.7923 11.4148 18.8977C11.5202 19.0032 11.6633 19.0625 11.8125 19.0625H14.0625C14.2117 19.0625 14.3548 19.0032 14.4602 18.8977C14.5657 18.7923 14.625 18.6492 14.625 18.5V16.25C14.625 16.1008 14.5657 15.9577 14.4602 15.8523C14.3548 15.7468 14.2117 15.6875 14.0625 15.6875ZM13.5 17.9375H12.375V16.8125H13.5V17.9375Z" fill="black" />
                                                <path d="M8.4375 21.3125H6.1875C6.03832 21.3125 5.89524 21.3718 5.78975 21.4773C5.68426 21.5827 5.625 21.7258 5.625 21.875V24.125C5.625 24.2742 5.68426 24.4173 5.78975 24.5227C5.89524 24.6282 6.03832 24.6875 6.1875 24.6875H8.4375C8.58668 24.6875 8.72976 24.6282 8.83525 24.5227C8.94074 24.4173 9 24.2742 9 24.125V21.875C9 21.7258 8.94074 21.5827 8.83525 21.4773C8.72976 21.3718 8.58668 21.3125 8.4375 21.3125ZM7.875 23.5625H6.75V22.4375H7.875V23.5625Z" fill="black" />
                                                <path d="M14.0625 21.3125H11.8125C11.6633 21.3125 11.5202 21.3718 11.4148 21.4773C11.3093 21.5827 11.25 21.7258 11.25 21.875V24.125C11.25 24.2742 11.3093 24.4173 11.4148 24.5227C11.5202 24.6282 11.6633 24.6875 11.8125 24.6875H14.0625C14.2117 24.6875 14.3548 24.6282 14.4602 24.5227C14.5657 24.4173 14.625 24.2742 14.625 24.125V21.875C14.625 21.7258 14.5657 21.5827 14.4602 21.4773C14.3548 21.3718 14.2117 21.3125 14.0625 21.3125ZM13.5 23.5625H12.375V22.4375H13.5V23.5625Z" fill="black" />
                                                <path d="M8.4375 26.9375H6.1875C6.03832 26.9375 5.89524 26.9968 5.78975 27.1023C5.68426 27.2077 5.625 27.3508 5.625 27.5V29.75C5.625 29.8992 5.68426 30.0423 5.78975 30.1477C5.89524 30.2532 6.03832 30.3125 6.1875 30.3125H8.4375C8.58668 30.3125 8.72976 30.2532 8.83525 30.1477C8.94074 30.0423 9 29.8992 9 29.75V27.5C9 27.3508 8.94074 27.2077 8.83525 27.1023C8.72976 26.9968 8.58668 26.9375 8.4375 26.9375ZM7.875 29.1875H6.75V28.0625H7.875V29.1875Z" fill="black" />
                                                <path d="M14.0625 26.9375H11.8125C11.6633 26.9375 11.5202 26.9968 11.4148 27.1023C11.3093 27.2077 11.25 27.3508 11.25 27.5V29.75C11.25 29.8992 11.3093 30.0423 11.4148 30.1477C11.5202 30.2532 11.6633 30.3125 11.8125 30.3125H14.0625C14.2117 30.3125 14.3548 30.2532 14.4602 30.1477C14.5657 30.0423 14.625 29.8992 14.625 29.75V27.5C14.625 27.3508 14.5657 27.2077 14.4602 27.1023C14.3548 26.9968 14.2117 26.9375 14.0625 26.9375ZM13.5 29.1875H12.375V28.0625H13.5V29.1875Z" fill="black" />
                                                <path d="M25.9599 18.0067L23.1474 17.5769L21.8842 14.886C21.8388 14.7893 21.7668 14.7075 21.6766 14.6502C21.5865 14.5929 21.4818 14.5625 21.375 14.5625C21.2682 14.5625 21.1635 14.5929 21.0734 14.6502C20.9832 14.7075 20.9112 14.7893 20.8658 14.886L19.6031 17.5769L16.7906 18.0067C16.6883 18.0223 16.5923 18.0657 16.5131 18.1324C16.434 18.199 16.3747 18.2861 16.3419 18.3843C16.309 18.4824 16.3039 18.5877 16.327 18.6885C16.3501 18.7894 16.4006 18.8819 16.473 18.9559L18.5247 21.0587L18.0396 24.0348C18.0228 24.1388 18.0356 24.2455 18.0765 24.3426C18.1174 24.4397 18.1847 24.5234 18.2708 24.5841C18.357 24.6449 18.4584 24.6802 18.5637 24.686C18.6689 24.6919 18.7736 24.668 18.866 24.6173L21.375 23.2304L23.884 24.6173C23.9764 24.6683 24.0813 24.6924 24.1867 24.6866C24.2921 24.6809 24.3938 24.6456 24.4801 24.5848C24.5664 24.524 24.6339 24.4402 24.6748 24.3428C24.7156 24.2455 24.7283 24.1386 24.7113 24.0344L24.2262 21.0584L26.278 18.9556C26.3503 18.8815 26.4008 18.789 26.4239 18.6882C26.447 18.5873 26.4419 18.482 26.4091 18.3839C26.3762 18.2858 26.317 18.1986 26.2378 18.132C26.1586 18.0654 26.0626 18.0219 25.9603 18.0063L25.9599 18.0067ZM23.2224 20.4758C23.1609 20.5389 23.1151 20.6154 23.0886 20.6994C23.0621 20.7833 23.0556 20.8724 23.0698 20.9592L23.4143 23.0722L21.647 22.0949C21.5637 22.0488 21.47 22.0247 21.3749 22.0247C21.2797 22.0247 21.1861 22.0488 21.1028 22.0949L19.3354 23.0722L19.6799 20.9592C19.6941 20.8724 19.6877 20.7833 19.6612 20.6994C19.6347 20.6154 19.5888 20.5389 19.5273 20.4758L18.0422 18.9534L20.0695 18.6441C20.1608 18.6301 20.2473 18.5939 20.3213 18.5386C20.3952 18.4833 20.4545 18.4106 20.4937 18.327L21.375 16.4489L22.2564 18.3267C22.2956 18.4103 22.3548 18.4829 22.4288 18.5382C22.5028 18.5935 22.5893 18.6298 22.6806 18.6437L24.7079 18.9531L23.2224 20.4758Z" fill="black" />
                                                <path d="M30.9375 21.3125H28.6875C28.5383 21.3125 28.3952 21.3718 28.2898 21.4773C28.1843 21.5827 28.125 21.7258 28.125 21.875V24.125C28.125 24.2742 28.1843 24.4173 28.2898 24.5227C28.3952 24.6282 28.5383 24.6875 28.6875 24.6875H30.9375C31.0867 24.6875 31.2298 24.6282 31.3352 24.5227C31.4407 24.4173 31.5 24.2742 31.5 24.125V21.875C31.5 21.7258 31.4407 21.5827 31.3352 21.4773C31.2298 21.3718 31.0867 21.3125 30.9375 21.3125ZM30.375 23.5625H29.25V22.4375H30.375V23.5625Z" fill="black" />
                                                <path d="M30.9375 26.9375H28.6875C28.5383 26.9375 28.3952 26.9968 28.2898 27.1023C28.1843 27.2077 28.125 27.3508 28.125 27.5V29.75C28.125 29.8992 28.1843 30.0423 28.2898 30.1477C28.3952 30.2532 28.5383 30.3125 28.6875 30.3125H30.9375C31.0867 30.3125 31.2298 30.2532 31.3352 30.1477C31.4407 30.0423 31.5 29.8992 31.5 29.75V27.5C31.5 27.3508 31.4407 27.2077 31.3352 27.1023C31.2298 26.9968 31.0867 26.9375 30.9375 26.9375ZM30.375 29.1875H29.25V28.0625H30.375V29.1875Z" fill="black" />
                                                <path d="M25.3125 26.9375H23.0625C22.9133 26.9375 22.7702 26.9968 22.6648 27.1023C22.5593 27.2077 22.5 27.3508 22.5 27.5V29.75C22.5 29.8992 22.5593 30.0423 22.6648 30.1477C22.7702 30.2532 22.9133 30.3125 23.0625 30.3125H25.3125C25.4617 30.3125 25.6048 30.2532 25.7102 30.1477C25.8157 30.0423 25.875 29.8992 25.875 29.75V27.5C25.875 27.3508 25.8157 27.2077 25.7102 27.1023C25.6048 26.9968 25.4617 26.9375 25.3125 26.9375ZM24.75 29.1875H23.625V28.0625H24.75V29.1875Z" fill="black" />
                                            </svg>
                                            Exhibitions
                                        </button>

                                    </div>
                                </div>
                                <div className="col-lg-6 px_0">
                                    <div className={`image-container ${hideImage ? 'hide' : ''}`} >
                                        <img src={myimg} className='export__img' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Application