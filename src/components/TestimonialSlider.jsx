import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
const TestimonialSlider = () => {
    return (
        <>
            <div className="container mt-lg-5 pt-lg-3 px_0">
                <div className="row mx-0 justify-content-center">
                    <div className="col-lg-12 pe-lg-4 px_0">
                        <div className="row mx-0">
                            <div className="col-lg-12">
                                <div className="bg__white3 radiusadd p-3 mt-5">
                                    <Carousel>
                                        <Carousel.Item>
                                            <ExampleCarouselImage className="text-dark" text="First slide" />
                                            <Carousel.Caption className="text-dark">
                                                {/* <h3 className="text-dark">First slide label</h3> */}
                                                <p className="text-dark">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item className="text-dark">
                                            <ExampleCarouselImage className="text-dark" text="Second slide" />
                                            <Carousel.Caption>
                                                {/* <h3 className="text-dark">Second slide label</h3> */}
                                                <p className="text-dark">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <ExampleCarouselImage className="text-dark" text="Third slide" />
                                            <Carousel.Caption className="text-dark">
                                                {/* <h3 className="text-dark">Third slide label</h3> */}
                                                <p className="text-dark">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider