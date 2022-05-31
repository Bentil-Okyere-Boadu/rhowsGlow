import React from "react";
import { Button, Card } from "react-bootstrap";
import devImg from "../images/logo-black.webp"


const Product = ({data}) => {
  return (
    <Card style={{ width: "18rem", margin: "0.5rem" }}>
      <Card.Img variant="top" src={devImg}  />
      <Card.Body>
        <Card.Title>{data}</Card.Title>
        <Card.Text>
          {data}
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
