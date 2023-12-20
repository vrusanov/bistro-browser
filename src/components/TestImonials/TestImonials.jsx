import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./testImonials.css";
import testImonialsImg from "../../assets/images/review1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    content:
      "I was truly impressed by the quality and taste of the food! The delivery was prompt, and everything arrived hot and delicious. It's been a fantastic experience every time I've ordered. Highly recommended!",
    name: "Emily Roberts",
    designation: "Food Blogger",
  },
  {
    content:
      "As a busy professional, finding time to cook can be challenging. This service has been a lifesaver - delicious meals that are just a click away. The variety is amazing, and the flavors are just out of this world!",
    name: "Michael Johnson",
    designation: "Software Engineer",
  },
  {
    content:
      "The variety of options available is incredible, and I love how easy it is to find something that caters to my dietary preferences. The customer service is top-notch, and the attention to detail in every dish is apparent.",
    name: "Aisha Khan",
    designation: "Nutritionist",
  },
  {
    content:
      "Every order has been a delightful experience. The ingredients are always fresh, and the meals are bursting with flavor. It's like having a gourmet restaurant experience at home. Can't wait to try more dishes!",
    name: "David Lee",
    designation: "Culinary Enthusiast",
  },
];

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
