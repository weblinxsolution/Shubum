import React from 'react'
import bestprice from '../../assets/bestprice.png'
const PricingCard = (props) => {
    return (
        <>
            <div className={props.card == 1 ? "pricing__card2" : "pricing__card" }>
                <h5 className="text-uppercase fw-700 mb-4">
                    {props.title}
                </h5>
                <h5 className=" fw-700 mb-4">
                    {props.duration}
                </h5>
                <p className='para'>
                    {props.para}
                </p>
                <hr className="text-muted mx-lg-5" />
                <h4 className="fw-500">
                  {props.amount}
                </h4>
                <h5 className="mt-4 para fw-500">
                   {props.permonth}
                </h5>
                <p className="text-uppercase para small"> {props.plantype} </p>
                <button className='button'>
                    Select

                </button>
                <img className='bestprice' src={bestprice} alt="" />
            </div>
        </>
    )
}

export default PricingCard