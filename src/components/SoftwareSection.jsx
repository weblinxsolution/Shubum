import React from 'react';
import Building from '../assets/Building.png';
import check from '../assets/checkmark.png';
import Button from './Button';
import { Link } from 'react-router-dom';

const SoftwareSection = () => {
  const handleClick = () => {
    // Scroll to the top when the link is clicked
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container">
        <div className="row mx-0 gap-lg-0 gap-5 mt-1 align-items-center">
          <div className="col-lg-5 ps-lg-4">
            <div className="ps-lg-5 text-lg-start text-center">
              <h1 className='fw-800 software-title'>
                Introducing 3D <br className="d-lg-block d-none" />
                Software Solution
              </h1>
              <p className="text__color mt-4">
                Introducing our cutting-edge 3D Tile Visualizer, a powerful tool that empowers you to create stunning designs using the tiles of your choice.
              </p>
              {/* Additional content */}
              <div className="mt-4 pt-2">
                <Link to='/Visualizer' onClick={handleClick}>
                  <Button  content="Get Started" style6={true} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <img src={Building} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftwareSection;
