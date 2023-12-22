import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./chooseUs.css";
import chickenImgPath from "../../assets/images/chicken3.png";
import Feature from "./Feature";

const features = [
  {
    iconClass: "ri-truck-line",
    title: "Free Home Delivery",
    description:
      "Enjoy fast and reliable delivery directly to your doorstep without any additional cost.",
  },
  {
    iconClass: "ri-money-dollar-circle-fill",
    title: "Return and Refund",
    description:
      "Shop with confidence knowing that returns and refunds are easy and hassle-free.",
  },
  {
    iconClass: "ri-secure-payment-line",
    title: "Secure Payment",
    description:
      "Your transactions are always secure with our encrypted payment system.",
  },
  {
    iconClass: "ri-24-hours-line",
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any inquiries.",
  },
];

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" className="chooseUs__image-container">
            <img
              src={chickenImgPath}
              alt="Delicious chicken dishes"
              className="w-100"
            />
          </Col>
          <Col lg="6">
            <div className="choose__content">
              <h4>Who we are?</h4>
              <h2>Discover the Benefits We Offer</h2>
              <p>
                Explore why customers love our services and products. Your
                satisfaction is our top priority!
              </p>
            </div>
            <div className="features mt-4 gap-2">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
