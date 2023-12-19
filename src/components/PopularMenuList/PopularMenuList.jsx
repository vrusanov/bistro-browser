import React from "react";
import "./popularMenuList.css";
import MenuItem from "../MenuItem/MenuItem";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import { popularMenuFood } from "../../assets/mock-data/products";

const PopularMenuList = () => {
  return (
    <section className="menu-list pt-5">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Popular Menu</h2>
          </Col>
          {popularMenuFood.map((item) => (
            <Col lg="3" key={item.id}>
              <MenuItem
                imageUrl={item.imgUrl}
                price={item.price}
                title={item.title}
                rating={item.rating}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

PopularMenuList.propTypes = {
  menuItems: PropTypes.array,
};

export default PopularMenuList;
