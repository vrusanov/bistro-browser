import React, { useState, useEffect } from "react";
import "./styles.css";
import "../MenuItem/menuItem.css";
import { Container, Row, Col } from "react-bootstrap";

import {
  fastFoodProducts,
  riceMenuProducts,
  pizzaProducts,
  coffeeProducts,
  dessertProducts,
} from "../../assets/mock-data/products";
import MenuItem from "../MenuItem/MenuItem";

const menuCategories = [
  { name: "Fast Food", value: "FAST-FOOD", data: fastFoodProducts },
  { name: "Rice Menu", value: "RICE-MENU", data: riceMenuProducts },
  { name: "Pizza", value: "PIZZA", data: pizzaProducts },
  { name: "Dessert", value: "DESSERT", data: dessertProducts },
  { name: "Coffee", value: "COFFEE", data: coffeeProducts },
];

const MenuList = () => {
  const [products, setProducts] = useState(fastFoodProducts);
  const [activeFilter, setActiveFilter] = useState("FAST-FOOD");

  useEffect(() => {
    const category = menuCategories.find((cat) => cat.value === activeFilter);
    setProducts(category ? category.data : fastFoodProducts);
  }, [activeFilter]);

  return (
    <section className="menu-list__section">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3>Our Menu</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${
                  activeFilter === category.value ? "active" : ""
                }`}
                onClick={() => setActiveFilter(category.value)}
              >
                {category.name}
              </button>
            ))}
          </Col>
          {products.map((product, index) => (
            <Col lg="3" md="4" sm="6" xs="12" key={index}>
              <MenuItem
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.imgUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuList;
