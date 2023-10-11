import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = (props) => {
    return (
        <>
            <div className="p-2">
                <img src={props.srcimg} className='w-100 rounded mb-2' alt="" />
                <div className="d-flex justify-content-between">
                    <p className="mb-0 text__color">
                        December 05 2021
                    </p>
                    <p className="mb-0 text__color">
                        3 min Read
                    </p>

                </div>
                <hr />
                <h4 className="fw-700">
                   {props.title}
                </h4>
                <p className={ props.pb3 == 1 ? ' text__color pb-xl-4' : ' text__color pb-0'}>
                  {props.para}
                </p>
                <Link to="/" className='text-dark text-decoration-none'>View More</Link>
            </div>
        </>
    )
}

export default ArticleCard