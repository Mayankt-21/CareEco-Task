import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products when the component is mounted
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        if (response.ok) {
          setProducts(data); // Update products state
        } else {
          setError(data.message || "Error fetching products");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("Unable to fetch products. Please try again later.");
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>; // Show loader while fetching
  if (error) return <div>{error}</div>; // Show error message if fetch fails

  return (
    <Container className="mt-4">
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} xs={12} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.images[0] || "https://via.placeholder.com/150"}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description || "No description available."}
                </Card.Text>
                <Card.Text>
                  <strong>Price: </strong>${product.price}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    // Redirect to product details page (future implementation)
                    alert(`Redirecting to product: ${product.name}`);
                    navigate(`/product/${product._id}`);
                  }}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
