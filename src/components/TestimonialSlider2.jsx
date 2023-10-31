import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage2 from './ExampleCarouselImage2';
const TestimonialSlider2 = () => {
    return (
        <>
            <div className="container mt-lg-2 pt-lg-3 px_0 carousel2">
                <div className="row mx-0 justify-content-center">
                    <div className="col-lg-12 pe-lg-4 px_0">
                        <div className="row mx-0">
                            <div className="col-lg-12">
                                <div className="bg__white3 radiusadd p-3 mt-5">
                                    <Carousel>
                                        <Carousel.Item>
                                            <ExampleCarouselImage2 className="text-dark" text="First slide" />
                                            <Carousel.Caption className="text-dark">
                                                {/* <h3 className="text-dark">First slide label</h3> */}
                                                <p className="text-dark">
                                                    To say the least, this is one of the biggest digital success that not just <br className="d-lg-block d-none" /> OBL but the tiles industry has ever seen for the retail channel. We call it <br className="d-lg-block d-none" /> QuickLook in our organization.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item className="text-dark">
                                            <ExampleCarouselImage2 className="text-dark" text="Second slide" />
                                            <Carousel.Caption>
                                                {/* <h3 className="text-dark">Second slide label</h3> */}
                                                <p className="text-dark">
                                                    To say the least, this is one of the biggest digital success that not just <br className="d-lg-block d-none" /> OBL but the tiles industry has ever seen for the retail channel. We call it <br className="d-lg-block d-none" /> QuickLook in our organization.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <ExampleCarouselImage2 className="text-dark" text="Third slide" />
                                            <Carousel.Caption className="text-dark">
                                                {/* <h3 className="text-dark">Third slide label</h3> */}
                                                <p className="text-dark">
                                                    To say the least, this is one of the biggest digital success that not just <br className="d-lg-block d-none" /> OBL but the tiles industry has ever seen for the retail channel. We call it <br className="d-lg-block d-none" /> QuickLook in our organization.</p>
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

export default TestimonialSlider2