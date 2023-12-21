import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage/ProductImage";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductRating from "../components/ProductRating/ProductRating";
import mockProducts from "../assets/mock-data/mockProducts.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../action/cartActions";
import "./productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetails(id)
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    console.log("Product added to cart:", product);
    dispatch(addToCart(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <Container>
      <Row>
        <Link to="/" className="back-to-home mt-5">
          ← To the home page
        </Link>
        <Col lg="6">
          <ProductImage imageUrl={product?.imageUrl} altText={product?.name} />
        </Col>
        <Col lg="6" className="chooseUs__image-container">
          <div className="product-details">
            <ProductInfo
              title={product?.name}
              description={product?.description}
              price={product?.price}
              ingredients={product?.ingredients}
              allergens={product?.allergens}
              deliveryOptions={product?.deliveryOptions}
            />
            <ProductRating rating={product?.rating} />
            <button className="order-button" onClick={handleAddToCart}>
              Order
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;

function fetchProductDetails(productId) {
  return new Promise((resolve, reject) => {
    const product = mockProducts.find((p) => p.id === productId);
    if (product) {
      setTimeout(() => resolve(product), 500);
    } else {
      setTimeout(() => reject(new Error("Product not found")), 500);
    }
  });
}
