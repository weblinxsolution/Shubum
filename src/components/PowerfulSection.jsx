import React from 'react'
import CardPowerful from './CardPowerful'
import cardicon1 from '../assets/cardicon1.png'
import cardicon2 from '../assets/cardicon2.png'
import cardicon3 from '../assets/cardicon3.png'
import cardicon4 from '../assets/cardicon4.png'
import cardicon5 from '../assets/cardicon5.png'
import cardicon6 from '../assets/cardicon6.png'
const Headings = [
    "Create Floor Plans Effortlessly",
    "Create Floor Plans Effortlessly",
    "Create Floor Plans Effortlessly",
    "Create Floor Plans Effortlessly",
    "Create Floor Plans Effortlessly",
    "Create Floor Plans Effortlessly"

]
const cardicon =
    [
        cardicon1, cardicon2, cardicon3, cardicon4, cardicon5, cardicon6,
    ]
const Paras = [
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
]
const rows = [];
for (let i = 0; i < 6; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<div className='col-lg-4' key={i} >
        <CardPowerful heading={Headings[i]} imgsrc={cardicon[i]} para={Paras[i]} buttondata="Get Started" />
    </div>);
}
const PowerfulSection = () => {
    return (
        <>

            <div className="container mt-4" >
                <h1 className="text-center fw-800 mb-4">
                    Simple, yet Powerful Features

                </h1>
                <div className="row justify-content-center mx-0 ">

                    <div className="col-lg-11 ps-lg-0 pe-lg-4">
                        <div className="row mx-0">
                            {rows}
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default PowerfulSection