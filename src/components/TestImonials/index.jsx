import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./testImonials.css";
import testImonialsImg from "../../assets/images/review1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "../../assets/mock-data/mock-data";

const TestImonials = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="review__section">
      <Container>
        <Row>
          <Col lg={6} className="testimonial-image-col">
            <div className="testimonial-image">
              <img src={testImonialsImg} alt="Testimonial" />
            </div>
          </Col>
          <Col lg={6} className="m-auto slider-col">
            <h2 className="mb-4 text-center">What our customers are saying</h2>
            <Slider {...settings}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="single__testimonials-slide">
                  <p className="review__content">{testimonial.content}</p>
                  <h6 className="review__name">{testimonial.name}</h6>
                  <p className="review__designation">
                    {testimonial.designation}
                  </p>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestImonials;
