import React from "react";
import "./downloadSection.css";
import { Container, Row, Col } from "react-bootstrap";
import appImg from "../../assets/images/food-delivery-app.png";

const DownloadSection = () => {
  return (
    <section className="download__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="download-app__img">
              <img
                src={appImg}
                className="w-100"
                alt="Download Our Food Delivery App"
              />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="download-app__content">
              <h5>Download Our App</h5>
              <h2 className="mb-4">
                Get Your Favorite Meals Delivered in a Flash
              </h2>
              <p>
                Explore a world of cuisines right at your fingertips. Our app
                makes it easy and convenient to order from your favorite
                restaurants and discover new culinary delights. Enjoy exclusive
                offers, fast delivery, and a seamless ordering experience.
                Satisfy your cravings anytime, anywhere!
              </p>
              <div className="download-app__btns d-flex align-items-center gap-5 mt-4">
                <button className="btn__apple d-flex align-items-center gap-3">
                  <i className="ri-apple-line"></i>
                  <a href="https://www.apple.com/app-store/">Apple Store</a>
                </button>
                <button className="btn__google btn__apple d-flex align-items-center gap-3">
                  <i className="ri-google-line"></i>
                  <a href="https://play.google.com/store/apps">Google Play</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadSection;
