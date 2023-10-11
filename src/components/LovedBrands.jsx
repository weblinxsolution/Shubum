import React from 'react'
import somany from '../assets/somany1.png'
import rak from '../assets/rak.png'
import grancier from '../assets/grancier.png'
import qutone from '../assets/qutone.png'
import lioli from '../assets/lioli.png'
import creanza from '../assets/creanza.png'
import sunheart from '../assets/sunheart.png'
import agl from '../assets/agl.png'
import antiek from '../assets/antiek.png'
import italica from '../assets/italica.png'
import greenpanel from '../assets/greenpanel.png'
import lavish from '../assets/lavish.png'
const LovedBrands = () => {
    return (
        <>
            <section>
                <div className="container mt-4 mt-lg-5 pt-lg-3">
                    <h2 className="text-center text-dark fw-700">Loved By 40+ Brands</h2>
                    <div className="row mx-0 justify-content-center">
                        <div className="col-lg-12 col-xl-10 col-xxl-9">
                            <div className="d-flex gap-lg-0 gap-3 mt-4 align-items-center justify-content-lg-between justify-content-center flex-wrap">
                                <div className="lovedbrands__div">
                                    <img src={somany} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={rak} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={grancier} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={qutone} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={lioli} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={creanza} alt="" />
                                </div>
                                <div className="lovedbrands__div d-lg-none d-block">
                                    <img src={sunheart} alt="" />
                                </div>
                                <div className="lovedbrands__div d-lg-none d-block">
                                    <img src={agl} alt="" />
                                </div>
                                <div className="lovedbrands__div d-lg-none d-block">
                                    <img src={antiek} alt="" />
                                </div>
                                <div className="lovedbrands__div d-lg-none d-block">
                                    <img src={italica} alt="" />
                                </div>
                                <div className="lovedbrands__div d-lg-none d-block">
                                    <img src={greenpanel} alt="" />
                                </div>
                                <div className="lovedbrands__div d-lg-none d-block">
                                    <img src={lavish} alt="" />
                                </div>

                            </div>
                            <div className="d-lg-flex d-none gap-lg-0 gap-3 mt-3 align-items-center justify-content-lg-between justify-content-center flex-wrap">
                                <div className="lovedbrands__div">
                                    <img src={sunheart} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={agl} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={antiek} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={italica} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={greenpanel} alt="" />
                                </div>
                                <div className="lovedbrands__div">
                                    <img src={lavish} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LovedBrands