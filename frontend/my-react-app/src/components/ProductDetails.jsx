import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap";

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(0); // Quantity state for tracking selected qty
  const [addedToCart, setAddedToCart] = useState(false); // Track if item has been added to the cart

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${id}`
        );
        const data = await response.json();
        if (response.ok) {
          setProduct(data);
          setQty(0); // Reset quantity when product details are loaded
        } else {
          console.error("Error fetching product details:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    // Only add to cart if stock is sufficient and the quantity is greater than 0
    if (product.stock >= qty && qty > 0) {
      setAddedToCart(true);
      alert(`${qty} x ${product.name} added to the cart!`);
    } else {
      alert("Insufficient stock or invalid quantity.");
    }
  };

  const handleIncreaseQty = () => {
    if (qty < product.stock) {
      setQty(qty + 1);
    }
  };

  const handleDecreaseQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" />
        <span>Loading...</span>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={product.images[0]} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock} items available
          </p>
          {!addedToCart ? (
            <div>
              <Button
                variant="primary"
                onClick={handleAddToCart}
                disabled={qty <= 0 || qty > product.stock}
              >
                Add to Cart
              </Button>
              <div className="mt-3">
                <Button
                  variant="outline-secondary"
                  onClick={handleDecreaseQty}
                  disabled={qty <= 0}
                >
                  -
                </Button>
                <span className="mx-3">{qty}</span>
                <Button
                  variant="outline-secondary"
                  onClick={handleIncreaseQty}
                  disabled={qty >= product.stock}
                >
                  +
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Button variant="secondary" onClick={handleAddToCart}>
                Update Cart
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
