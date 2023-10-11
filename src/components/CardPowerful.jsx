import React from 'react'
import Button from './Button'

const CardPowerful = (props) => {
    return (
        <>
            <div className="card__powerful">
                <h3 className="fw-700 ">
                    {props.heading}
                </h3>
                <p className='text__color small'>
                    {props.para}

                </p>
                <div className="pb-2 ">
                    <hr className='my-4' />

                </div>
                <div className="d-flex  align-items-center justify-content-between">
                    <img src={props.imgsrc} className='img-fluid' alt="" />
                    <Button content={props.buttondata} style3={true} />
                </div>

            </div>
        </>
    )
}

export default CardPowerful